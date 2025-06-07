function distributingApples(n, m) {
    const MOD = 1000000007; // 10^9 + 7
    
    // Tính a^b % MOD
    function powMod(a, b) {
        let result = 1;
        a = a % MOD;
        while (b > 0) {
            if (b % 2 === 1) {
                result = (result * a) % MOD;
            }
            b = Math.floor(b / 2);
            a = (a * a) % MOD;
        }
        return result;
    }
    
    // Tính nghịch đảo modular
    function modInverse(a) {
        return powMod(a, MOD - 2);
    }
    
    // Tính trước mảng giai thừa và nghịch đảo giai thừa
    const maxN = n + m;
    const factorial = new Array(maxN);
    const invFactorial = new Array(maxN);
    
    factorial[0] = 1;
    for (let i = 1; i < maxN; i++) {
        factorial[i] = (factorial[i-1] * i) % MOD;
    }
    
    invFactorial[maxN - 1] = modInverse(factorial[maxN - 1]);
    for (let i = maxN - 2; i >= 0; i--) {
        invFactorial[i] = (invFactorial[i+1] * (i+1)) % MOD;
    }
    
    // Tính tổ hợp C(n, k) sử dụng giai thừa đã tính trước
    function combination(n, k) {
        if (k > n) return 0;
        
        return (((factorial[n] * invFactorial[k]) % MOD) * invFactorial[n-k]) % MOD;
    }
    
    // Công thức: C(n+m-1, n-1) = C(n+m-1, m)
    return combination(n + m - 1, m);
}
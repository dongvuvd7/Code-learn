function exponentiation(a, b, c) {
    const MOD = 1000000007n;
    const PHI = 1000000006n;
    
    a = BigInt(a);
    b = BigInt(b);
    c = BigInt(c);
    
    // Trường hợp đặc biệt
    if (a === 0n) {
        if (b === 0n && c === 0n) return 1; // 0^0 = 1
        if (b === 0n && c >= 1n) return 0; // 0^0 = 0 (theo ngữ cảnh)
        if (b >= 1n && c >= 1n) return 0; // 0^(b^c) = 0
        if (c === 0n) return 1; // 0^1 = 1 (b^0 = 1)
    }
    if (b === 0n && c >= 1n) return 1; // a^0 = 1
    if (c === 0n) return Number(a % MOD); // b^0 = 1, a^1 = a
    
    // Hàm lũy thừa nhanh
    function modPow(base, exp, mod) {
        base = base % mod;
        let result = 1n;
        while (exp > 0n) {
            if (exp & 1n) result = (result * base) % mod;
            base = (base * base) % mod;
            exp >>= 1n;
        }
        return result;
    }
    
    // Lấy a mod MOD trước để xử lý a = 1000000007
    a = a % MOD;
    
    // Tính b^c mod PHI
    let exp = modPow(b, c, PHI);
    
    // Tính a^exp mod MOD
    return Number(modPow(a, exp, MOD));
}
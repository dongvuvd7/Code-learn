function sumOfSquares(n) {
    if (n < 0) return 0;
    const MOD = 1000000007n;
    let N = BigInt(n);
    // Binary search for floor(sqrt(N))
    let low = 0n;
    let high = 1000000001n;
    while (low < high) {
        let mid = low + (high - low + 1n) / 2n;
        if (mid * mid <= N) {
            low = mid;
        } else {
            high = mid - 1n;
        }
    }
    let m = low;
    // Modular exponentiation for inverse
    function modPow(base, exp, mod) {
        let res = 1n;
        base = base % mod;
        while (exp > 0n) {
            if (exp % 2n === 1n) {
                res = (res * base) % mod;
            }
            base = (base * base) % mod;
            exp = exp / 2n;
        }
        return res;
    }
    let inv6 = modPow(6n, MOD - 2n, MOD);
    let mm = m % MOD;
    let mm1 = (m + 1n) % MOD;
    let mm2 = (2n * m + 1n) % MOD;
    let num = (((mm * mm1) % MOD) * mm2) % MOD;
    let sum = (num * inv6) % MOD;
    return Number(sum);
}

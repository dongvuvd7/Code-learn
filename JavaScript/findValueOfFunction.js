function findValueOfFunction(x) {
    const MOD = 1000000007;

    function fastPower(base, exp, mod) {
        if (base === 0) return 0;
        if (base === 1 || exp === 0) return 1;

        let result = 1;
        base = base % mod;

        while (exp > 0) {
            if (exp & 1) {
                result = (result * base) % mod;
            }
            base = (base * base) % mod;
            exp >>= 1;
        }

        return result;
    }

    let result = 1;

    for (let i = 1; i <= x; i++) {
        if (i === 1) continue; // 1^anything = 1, không ảnh hưởng

        const exponent = x + 1 - i;
        if (exponent > 0) {
            const power = fastPower(i, exponent, MOD);
            result = (result * power) % MOD;
        }
    }

    return result;
}

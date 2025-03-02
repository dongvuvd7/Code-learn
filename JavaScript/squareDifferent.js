function squareDifferent(n) {
    const MOD = 10**9 + 7;

    // Lấy giá trị tuyệt đối của n
    let absN = Math.abs(n);

    // Tính tổng từ 1 đến n
    let sum = absN * (absN + 1) / 2;
    sum = sum % MOD;

    // Tính tổng bình phương từ 1 đến n
    let sumOfSquares = absN * (absN + 1) % MOD * (2 * absN + 1) % MOD * modInverse(6, MOD) % MOD;

    // Tính bình phương của tổng
    let squareOfSum = sum * sum % MOD;

    // Tính kết quả
    let result = (squareOfSum - sumOfSquares + MOD) % MOD;

    return result;
}

// Hàm tính nghịch đảo modulo
function modInverse(a, m) {
    let m0 = m, t, q;
    let x0 = 0, x1 = 1;

    if (m == 1)
        return 0;

    while (a > 1) {
        // q là thương số
        q = Math.floor(a / m);
        t = m;

        // m là số dư, áp dụng thuật toán Euclid
        m = a % m, a = t;
        t = x0;

        x0 = x1 - q * x0;
        x1 = t;
    }

    // Đảm bảo x1 là số dương
    if (x1 < 0)
        x1 += m0;

    return x1;
}

console.log(squareDifferent(0));
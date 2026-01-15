/**
 * BÀI TOÁN: PASSWORD - TÌM MẬT KHẨU MỚI
 *
 * Yêu cầu:
 * - Tìm số nguyên dương a nhỏ nhất sao cho:
 *   1. a chia hết cho n
 *   2. a có ít nhất k số 0 ở cuối
 *
 * Ví dụ:
 * n = 123456789, k = 8
 * → a = 12345678900000000 (có 8 số 0, chia hết cho n)
 *
 * PHÂN TÍCH:
 * - Để có k số 0 ở cuối, số phải chia hết cho 10^k
 * - a phải chia hết cho cả n và 10^k
 * → a = LCM(n, 10^k)
 *
 * Công thức: LCM(x, y) = (x * y) / GCD(x, y)
 *
 * Độ phức tạp: O(log(min(n, 10^k)))
 */
function gcd(a, b) {
    a = a < 0n ? -a : a;
    b = b < 0n ? -b : b;
    while (b !== 0n) {
        let t = b;
        b = a % b;
        a = t;
    }
    return a;
}

function password(n, k) {
    const bn = BigInt(n);
    const bk = BigInt(k);
    const tenk = 10n ** bk;
    const g = gcd(bn, tenk);
    const lcm = (bn / g) * tenk;
    return +lcm.toString();
}

module.exports = password;

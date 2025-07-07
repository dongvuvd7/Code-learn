/**
 * Tính 2^n mod (10^9 + 7) bằng thuật toán Fast Exponentiation
 *
 * Bài toán: Tính 2^n với n rất lớn (lên đến 3×10^8)
 * Vì kết quả rất lớn nên trả về kết quả mod (10^9 + 7)
 *
 * Thuật toán: Fast Exponentiation (Lũy thừa nhanh)
 * - Ý tưởng: a^n = (a^(n/2))^2 nếu n chẵn
 *           a^n = a × (a^((n-1)/2))^2 nếu n lẻ
 * - Độ phức tạp: O(log n) thay vì O(n)
 * - Áp dụng modular arithmetic để tránh tràn số
 *
 * Ví dụ:
 * - 2^0 = 1
 * - 2^10 = 1024
 * - 2^100 mod (10^9+7) = 976371285
 *
 * @param {number} num - Số mũ n (0 ≤ num ≤ 3×10^8)
 * @returns {number} - Kết quả 2^n mod (10^9 + 7)
 */
function powTwo(num) {
    const MOD = 1000000007; // 10^9 + 7

    // Trường hợp cơ sở
    if (num === 0) return 1;

    // Fast Exponentiation
    function fastPow(base, exp, mod) {
        let result = 1;
        base = base % mod;

        while (exp > 0) {
            // Nếu exp lẻ, nhân result với base
            if (exp % 2 === 1) {
                result = (result * base) % mod;
            }

            // exp = exp / 2 (chia đôi)
            exp = Math.floor(exp / 2);

            // base = base^2
            base = (base * base) % mod;
        }

        return result;
    }

    return fastPow(2, num, MOD);
}

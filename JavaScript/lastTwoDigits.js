/**
 * Tìm 2 chữ số tận cùng của a^b
 *
 * Bài toán: Tính a^b mod 100 để lấy 2 chữ số cuối
 *
 * Thuật toán: Fast Exponentiation với Modulo
 * - Sử dụng thuật toán chia để trị để tính lũy thừa
 * - Áp dụng modulo 100 ở mỗi bước để tránh overflow
 * - Công thức: a^b = (a^(b/2))^2 nếu b chẵn
 *              a^b = a * a^(b-1) nếu b lẻ
 *
 * Ví dụ:
 * - a=3, b=6: 3^6 = 729 → "29"
 * - a=7, b=4: 7^4 = 2401 → "01"
 *
 * @param {number} a - Cơ số (1 ≤ a ≤ 10^9)
 * @param {number} b - Số mũ (1 ≤ b ≤ 10^9)
 * @returns {string} - 2 chữ số cuối của a^b (có thể có leading zero)
 */
function lastTwoDigits(a, b) {
    // Hàm tính lũy thừa nhanh với modulo
    function fastPowerMod(base, exp, mod) {
        let result = 1;
        base = base % mod; // Đảm bảo base < mod

        while (exp > 0) {
            // Nếu exp lẻ, nhân result với base hiện tại
            if (exp % 2 === 1) {
                result = (result * base) % mod;
            }

            // Chia exp cho 2 và bình phương base
            exp = Math.floor(exp / 2);
            base = (base * base) % mod;
        }

        return result;
    }

    // Tính a^b mod 100 để lấy 2 chữ số cuối
    const lastTwo = fastPowerMod(a, b, 100);

    // Đảm bảo luôn trả về 2 chữ số (thêm leading zero nếu cần)
    return lastTwo.toString().padStart(2, "0");
}

// Test với các ví dụ từ đề bài
console.log(lastTwoDigits(3, 6)); // "29" (3^6 = 729)
console.log(lastTwoDigits(7, 4)); // "01" (7^4 = 2401)

// Test thêm các trường hợp khác
console.log(lastTwoDigits(2, 10)); // "24" (2^10 = 1024)
console.log(lastTwoDigits(5, 3)); // "25" (5^3 = 125)
console.log(lastTwoDigits(10, 5)); // "00" (10^5 = 100000)
console.log(lastTwoDigits(1, 1000000000)); // "01" (1^anything = 1)

/**
 * Tính tổng các chữ số cho đến khi chỉ còn 1 chữ số (Digital Root)
 * 
 * Bài toán: Cho số n, tính tổng các chữ số của n, rồi tiếp tục tính tổng
 * các chữ số của kết quả cho đến khi chỉ còn 1 chữ số duy nhất.
 * 
 * Thuật toán tối ưu: Sử dụng công thức toán học Digital Root
 * - Nếu n = 0: kết quả = 0
 * - Nếu n % 9 = 0 và n ≠ 0: kết quả = 9
 * - Ngược lại: kết quả = n % 9
 * 
 * Ví dụ:
 * - n=12345: 1+2+3+4+5=15 → 1+5=6
 * - n=999: 9+9+9=27 → 2+7=9
 * - n=0: → 0
 * 
 * @param {number|string|BigInt} n - Số đầu vào (0 ≤ n ≤ 10^18)
 * @returns {number} - Chữ số cuối cùng sau khi tính tổng liên tiếp
 */
function sumOfDigits(n){
    // Xử lý trường hợp n là BigInt hoặc string
    if (typeof n === 'bigint') {
        n = n.toString();
    }
    if (typeof n === 'string') {
        // Tính tổng các chữ số từ chuỗi
        let sum = 0;
        for (let i = 0; i < n.length; i++) {
            sum += parseInt(n[i]);
        }
        n = sum;
    }
    
    // Áp dụng công thức Digital Root
    if (n === 0) return 0;
    
    const remainder = n % 9;
    return remainder === 0 ? 9 : remainder;
}

console.log(sumOfDigits(12345)); // 6
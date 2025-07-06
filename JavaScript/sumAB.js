/**
 * Tính tổng các số nguyên từ a đến b
 * 
 * Bài toán: Cho hai số nguyên a và b, tính tổng a + (a+1) + ... + b
 * Sử dụng công thức: sum = (số phần tử) × (số đầu + số cuối) / 2
 * 
 * Xử lý các trường hợp đặc biệt:
 * - a > b: trả về 0 (không có phần tử nào)
 * - a = b: trả về a
 * - Số âm và dương: áp dụng công thức bình thường
 * - Số lớn: sử dụng BigInt để tránh tràn số
 * 
 * Ví dụ:
 * - sumAB(1, 5) = 1+2+3+4+5 = 15
 * - sumAB(-3, 2) = -3+(-2)+(-1)+0+1+2 = -3
 * - sumAB(5, 1) = 0 (a > b)
 * 
 * @param {number} a - Số bắt đầu (-10^9 ≤ a ≤ 10^9)
 * @param {number} b - Số kết thúc (-10^9 ≤ b ≤ 10^9)
 * @returns {number} - Tổng các số từ a đến b
 */
function sumAB(a, b) {
    // Xử lý trường hợp a > b
    if (a > b) {
        return 0;
    }
    
    // Chuyển sang BigInt để tránh tràn số với giá trị lớn
    const aBig = BigInt(a);
    const bBig = BigInt(b);
    
    // Áp dụng công thức: n(a + b)/2 với n = b - a + 1
    const count = bBig - aBig + 1n;
    const sum = count * (aBig + bBig) / 2n;
    
    // Chuyển về number (an toàn vì kết quả nằm trong phạm vi JavaScript)
    return Number(sum);
}

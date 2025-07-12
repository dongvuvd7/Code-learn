/**
 * Tìm n chữ số cuối của tổng cấp số nhân
 * 
 * Bài toán: Tính tổng sum(a,b) = a^0 + a^1 + a^2 + ... + a^b
 * và trả về n chữ số cuối cùng của kết quả.
 * Nếu sum(a,b) không đủ n chữ số thì thêm '0' vào đầu.
 * 
 * Thuật toán:
 * 1. Sử dụng BigInt để tránh tràn số với a, b lớn
 * 2. Tính tổng bằng cách duyệt từ i=0 đến i=b
 * 3. Tối ưu: nhân power với a thay vì tính a^i mỗi lần
 * 4. Chuyển kết quả thành chuỗi và xử lý định dạng
 * 5. Thêm '0' vào đầu nếu cần, lấy n chữ số cuối
 * 
 * Ví dụ:
 * - a=2, b=4, n=1: sum = 1+2+4+8+16 = 31 → "1"
 * - a=3, b=3, n=4: sum = 1+3+9+27 = 40 → "0040"
 * 
 * @param {number} a - Cơ số của lũy thừa (1 ≤ a ≤ 10^5)
 * @param {number} b - Số mũ cao nhất (1 ≤ b ≤ 10^5)
 * @param {number} n - Số chữ số cuối cần lấy (1 ≤ n ≤ 10)
 * @returns {string} - Chuỗi chứa n chữ số cuối của sum(a,b)
 */
function nLastChar(a, b, n){
    // Tính tổng sum(a,b) = a^0 + a^1 + a^2 + ... + a^b
    let sum = 0n; // Sử dụng BigInt để tránh tràn số
    let power = 1n; // a^0 = 1
    const aBig = BigInt(a);
    
    for (let i = 0; i <= b; i++) {
        sum += power;
        power *= aBig; // Tính a^(i+1) cho lần lặp tiếp theo
    }
    
    // Chuyển sum thành chuỗi
    let sumStr = sum.toString();
    
    // Nếu độ dài < n, thêm '0' vào đầu
    while (sumStr.length < n) {
        sumStr = '0' + sumStr;
    }
    
    // Lấy n chữ số cuối
    return sumStr.slice(-n);
}
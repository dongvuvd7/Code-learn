/**
 * Tính trung bình cộng của các giá trị ASCII trong chuỗi
 * 
 * Bài toán: Cho một chuỗi s, tính trung bình cộng của các giá trị ASCII
 * của tất cả các ký tự trong chuỗi. Kết quả làm tròn đến 1 chữ số thập phân.
 * 
 * Thuật toán:
 * 1. Duyệt qua từng ký tự trong chuỗi
 * 2. Lấy giá trị ASCII của mỗi ký tự bằng charCodeAt()
 * 3. Tính tổng tất cả giá trị ASCII
 * 4. Chia cho số lượng ký tự để có trung bình
 * 5. Làm tròn đến 1 chữ số thập phân
 * 
 * Ví dụ:
 * - s="abcd": 'a'=97, 'b'=98, 'c'=99, 'd'=100 → (97+98+99+100)/4 = 98.5
 * - s="aaaa": 'a'=97 → (97+97+97+97)/4 = 97.0
 * 
 * @param {string} s - Chuỗi đầu vào (1 ≤ length ≤ 10^5)
 * @returns {number} - Trung bình cộng ASCII làm tròn 1 chữ số thập phân
 */
function averageOfTheASCII(s) {
    // Tính tổng các giá trị ASCII
    let sum = 0;
    for (let i = 0; i < s.length; i++) {
        sum += s.charCodeAt(i);
    }
    
    // Tính trung bình và làm tròn đến 1 chữ số thập phân
    const average = sum / s.length;
    return Math.round(average * 10) / 10;
}
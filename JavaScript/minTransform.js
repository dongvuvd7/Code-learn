/**
 * Tìm số phép biến đổi tối thiểu để đưa n về 1
 * 
 * Bài toán: Cho số nguyên dương n, có thể thực hiện các phép toán:
 * - Nếu n chẵn: n = n/2
 * - Nếu n lẻ: n = n-1 hoặc n = n+1
 * Tìm số phép biến đổi tối thiểu để n = 1
 * 
 * Thuật toán tối ưu:
 * - Số chẵn: luôn chia 2
 * - Số lẻ: sử dụng quy tắc bit để chọn n-1 hay n+1
 *   + Nếu n = 3: chọn n-1 (đặc biệt)
 *   + Nếu bit thứ 2 của n là 1: chọn n+1 (tạo nhiều số 0 liên tiếp)
 *   + Ngược lại: chọn n-1
 * 
 * Ví dụ:
 * - n=5: 5→4→2→1 (3 bước)
 * - n=15: 15→16→8→4→2→1 (5 bước, tối ưu hơn 15→14→7→6→3→2→1)
 * 
 * @param {number} n - Số nguyên dương đầu vào (1 ≤ n ≤ 10^15)
 * @returns {number} - Số phép biến đổi tối thiểu
 */
function minTransform(n){
    let count = 0;
    
    while(n !== 1) {
        if(n % 2 === 0) {
            // Số chẵn: chia 2
            n = Math.floor(n / 2);
        } else if(n === 3 || (n & 2) === 0) {
            // Số lẻ: chọn n-1 nếu n=3 hoặc bit thứ 2 = 0
            n = n - 1;
        } else {
            // Số lẻ: chọn n+1 nếu bit thứ 2 = 1 (tối ưu hóa)
            n = n + 1;
        }
        count++;
    }
    
    return count;
}
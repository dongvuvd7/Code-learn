/**
 * Bài toán vượt sông - River Crossing Problem
 * 
 * Vấn đề: Có n người cần qua sông bằng một chiếc thuyền có sức chứa tối đa k người.
 * Điều kiện:
 * - Phải có ít nhất 1 người trên thuyền để lái (không thể tự động)
 * - Thuyền chỉ chở được tối đa k người
 * - Mục tiêu: tìm số lượt tối thiểu để chuyển tất cả n người qua sông
 * 
 * Chiến lược tối ưu:
 * - Lượt đầu: chuyển k người qua sông
 * - Các lượt tiếp theo: 1 người quay lại đón, rồi chuyển k người qua (mỗi chu kỳ chuyển được k-1 người mới)
 * - Lượt cuối: chuyển những người còn lại mà không cần ai quay lại
 * 
 * @param {number} n - Số người cần qua sông
 * @param {number} k - Sức chứa tối đa của thuyền
 * @returns {number} - Số lượt tối thiểu cần thiết, hoặc -1 nếu không thể
 */
function riverCrossing(n, k) {
    // Kiểm tra các trường hợp không thể
    if (k < 1) return -1;
    if (n === 0) return 0;
    if (k === 1 && n > 1) return -1;
    
    // Trường hợp đặc biệt
    if (n === 1) return 1;
    if (k >= n) return 1;
    
    // Thuật toán chính:
    // Mỗi chu kỳ (đi + về) có thể chuyển (k-1) người
    // Lượt cuối cùng chỉ cần đi, không cần về
    
    if (n <= k) {
        return 1; // Tất cả đi trong 1 lượt
    }
    
    // Tính số chu kỳ đầy đủ (đi + về)
    // Mỗi chu kỳ chuyển được (k-1) người
    let remainingAfterFirstTrip = n - k;
    let fullCycles = Math.ceil(remainingAfterFirstTrip / (k - 1));
    
    return 1 + fullCycles * 2;
}
/**
 * Bài toán con sên bò - Snail Crawling Problem
 * 
 * Vấn đề: Con sên mỗi ngày bò được 1 mét, cứ bò n ngày liên tiếp thì nghỉ 1 ngày.
 * Tìm số ngày để con sên bò từ điểm xuất phát đến đích cách k mét.
 * 
 * Quy tắc:
 * - Mỗi ngày con sên bò được 1 mét
 * - Chu kỳ: bò n ngày liên tiếp → nghỉ 1 ngày → lặp lại
 * - Mục tiêu: tìm số ngày tối thiểu để đi được k mét
 * 
 * Phân tích:
 * - Nếu k ≤ n: con sên đến đích trước khi phải nghỉ → cần k ngày
 * - Nếu k > n: cần tính số chu kỳ hoàn chỉnh + ngày bò còn lại
 *   + Mỗi chu kỳ: n ngày bò + 1 ngày nghỉ = (n+1) ngày để đi n mét
 * 
 * Ví dụ: n=2, k=3
 * - Ngày 1-2: bò 2m
 * - Ngày 3: nghỉ
 * - Ngày 4: bò 1m → đến đích (tổng 4 ngày)
 * 
 * @param {number} n - Số ngày bò liên tiếp trước khi nghỉ (0 ≤ n ≤ 10^9)
 * @param {number} k - Khoảng cách đến đích (mét) (0 ≤ k ≤ 10^9)
 * @returns {number} - Số ngày cần thiết để đến đích, hoặc -1 nếu không thể
 */
function snailCrawling(n, k){
    // Kiểm tra các trường hợp đặc biệt
    if (n < 1 && k > 0) return -1;  // Không thể bò
    if (k <= 0) return 0;  // Đã ở đích
    if (k <= n) return k;  // Đến đích trước khi nghỉ
    
    // Tính số chu kỳ hoàn chỉnh cần thiết
    // Mỗi chu kỳ: n ngày bò + 1 ngày nghỉ = n mét
    const completeCycles = Math.floor((k - 1) / n);
    const remainingDistance = k - completeCycles * n;
    
    // Tổng số ngày
    return completeCycles * (n + 1) + remainingDistance;
}
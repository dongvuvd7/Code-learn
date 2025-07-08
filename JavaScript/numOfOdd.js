/**
 * Đếm số lượng số lẻ chia hết cho k trong khoảng [1, n]
 * 
 * Bài toán: Cho dãy số tự nhiên từ 1 đến n, tìm số lượng các số vừa lẻ vừa chia hết cho k.
 * 
 * Phân tích:
 * - Nếu k là số chẵn: không có số nào vừa lẻ vừa chia hết cho k (vì số chia hết cho số chẵn phải chẵn)
 * - Nếu k là số lẻ: các bội số của k sẽ có tính chẵn lẻ xen kẽ (k, 2k, 3k, 4k, ...)
 *   → Các bội lẻ: k×1, k×3, k×5, ... (k nhân với số lẻ)
 * 
 * Ví dụ: n=11, k=3 → các số chia hết cho 3: [3, 6, 9] → số lẻ: [3, 9] → kết quả: 2
 * 
 * @param {number} n - Giới hạn trên của dãy số (1 ≤ n ≤ 10^9)
 * @param {number} k - Số chia (1 ≤ k ≤ 10^9)
 * @returns {number} - Số lượng số lẻ chia hết cho k trong khoảng [1, n]
 */
function numOfOdd(n, k){
    // Nếu k chẵn, không có số lẻ nào chia hết cho k
    if (k % 2 === 0) {
        return 0;
    }
    
    // Nếu k lẻ, đếm các bội lẻ của k trong [1, n]
    // Số lượng = ceil(floor(n/k) / 2)
    return Math.ceil(Math.floor(n / k) / 2);
}
/**
 * Tìm độ dài đoạn liên tiếp dài nhất trong mảng A mà các phần tử cùng chia hết
 * cho một số nguyên d > 1.
 * @param {number} n - Số phần tử của mảng (1 ≤ n ≤ 100).
 * @param {number[]} A - Mảng n số nguyên.
 * @returns {number} Độ dài đoạn liên tiếp dài nhất thỏa mãn điều kiện.
 */
function maxlength(n, A) {
    // Hàm tính GCD của hai số
    function gcd(a, b) {
        a = Math.abs(a);
        b = Math.abs(b);
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
    
    let maxLength = 0;
    
    // Duyệt tất cả các đoạn bắt đầu từ i
    for (let i = 0; i < n; i++) {
        let currentGcd = A[i];
        
        // Mở rộng đoạn đến j
        for (let j = i; j < n; j++) {
            currentGcd = gcd(currentGcd, A[j]);
            
            // Nếu GCD > 1, cập nhật độ dài đoạn
            if (currentGcd > 1) {
                maxLength = Math.max(maxLength, j - i + 1);
            }
        }
    }
    
    return maxLength;
}
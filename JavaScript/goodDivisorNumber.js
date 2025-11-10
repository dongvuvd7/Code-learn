/**
 * BÀI TOÁN: GOOD DIVISOR NUMBER - KIỂM TRA SỐ TỐT THEO ƯỚC VÀ CHÊNH LỆCH
 *
 * Mô tả: Kiểm tra số n có phải "tốt" không: Các ước dương d1 < d2 < ... < dk của n sao cho
 *        các chênh lệch d_{i+1} - d_i (i=1..k-1) cũng là ước của n.
 *
 * Ví dụ:
 * - n=6: Ước [1,2,3,6], chênh [1,1,3] → tất cả chia hết 6 → true
 * - n=10: Ước [1,2,5,10], chênh [1,3,5] → 3 không chia hết 10 → false
 *
 * HƯỚNG GIẢI:
 * - Tìm tất cả ước của n bằng cách duyệt từ 1 đến √n (O(√n) thời gian, √1e9 ~ 3e4, nhanh).
 * - Sắp xếp ước tăng dần.
 * - Tính chênh lệch liên tiếp, kiểm tra mỗi chênh có chia hết n không (n % diff == 0).
 * - Nếu tất cả thỏa mãn (hoặc không có chênh với n=1), trả true; ngược lại false.
 * - Không gian: Số ước nhỏ (≤100 cho n=1e9), hiệu quả.
 */
function goodDivisorNumber(n) {
    if (n <= 0) return false; // Theo constraint n >=1, nhưng an toàn

    // Hàm tìm tất cả ước
    function getDivisors(num) {
        const divisors = [];
        for (let i = 1; i * i <= num; i++) {
            if (num % i === 0) {
                divisors.push(i);
                if (i !== num / i) {
                    divisors.push(num / i);
                }
            }
        }
        divisors.sort((a, b) => a - b);
        return divisors;
    }

    const divs = getDivisors(n);

    // Kiểm tra chênh lệch
    for (let i = 0; i < divs.length - 1; i++) {
        const diff = divs[i + 1] - divs[i];
        if (n % diff !== 0) {
            return false;
        }
    }

    return true;
}

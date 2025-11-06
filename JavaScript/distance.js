/**
 * BÀI TOÁN: DISTANCE - TỐI ĐA HÓA SỐ '1' VỚI KHOẢNG CÁCH TỐI THIỂU
 *
 * Mô tả: Trong chuỗi nhị phân s đã thỏa mãn quy tắc (khoảng cách giữa '1' >= k+1),
 *        tối đa hóa số '0' flip thành '1' mà vẫn giữ quy tắc.
 *
 * Ví dụ: s="100010", k=1 → 1 (flip vị trí 3 thành '1' → "101010")
 *
 * HƯỚNG GIẢI:
 * - Precompute prefix sum số '1's để check nhanh có '1' forced trong [i+1, i+k].
 * - Greedy left-to-right: Duy trì next_available (vị trí tiếp theo có thể place).
 * - Với mỗi i: Nếu '1' forced, update next_available = max(current, i+k+1).
 * - Nếu '0' và i >= next_available và không có forced '1' trong [i+1,i+k], place và update next_available.
 * - Thời gian: O(n), n<1e4.
 */
function distance(s, k) {
    const n = s.length;
    const prefix = new Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
        prefix[i] = prefix[i - 1] + (s[i - 1] === "1" ? 1 : 0);
    }

    let next_available = 0;
    let count = 0;

    for (let i = 0; i < n; i++) {
        if (s[i] === "1") {
            next_available = Math.max(next_available, i + k + 1);
        } else {
            if (i >= next_available) {
                const left = i + 1;
                const right = Math.min(n - 1, i + k);
                let can_place = true;
                if (left <= right) {
                    const num_ones = prefix[right + 1] - prefix[left];
                    if (num_ones > 0) {
                        can_place = false;
                    }
                }
                if (can_place) {
                    count++;
                    next_available = i + k + 1;
                }
            }
        }
    }

    return count;
}

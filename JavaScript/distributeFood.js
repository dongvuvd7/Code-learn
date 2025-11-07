/**
 * BÀI TOÁN: FOOD DISTRIBUTION - PHÂN PHÁT ĐỒ ĂN
 *
 * Mô tả:
 * - n tỉnh (đánh số 0 đến n-1)
 * - k lần phân phát
 * - Mỗi lần [x, y, z]: từ tỉnh x đến y, mỗi tỉnh được z kg
 *
 * Ví dụ:
 * n=5, food=[[1,3,3], [0,1,1]]
 * - Lần 1: tỉnh 1,2,3 mỗi tỉnh +3 → [0,3,3,3,0]
 * - Lần 2: tỉnh 0,1 mỗi tỉnh +1 → [1,4,3,3,0]
 *
 * CÁCH GIẢI:
 * - Sử dụng Difference Array (mảng hiệu) để tối ưu
 * - Thay vì cập nhật từng phần tử, chỉ đánh dấu điểm đầu/cuối
 * - Độ phức tạp: O(k + n)
 */
function distributeFood(food, n) {
    // Khởi tạo mảng kết quả
    const result = new Array(n).fill(0);

    // Sử dụng Difference Array để tối ưu
    const diff = new Array(n + 1).fill(0);

    // Xử lý từng lần phân phát
    for (const [x, y, z] of food) {
        // Đánh dấu điểm bắt đầu và kết thúc
        diff[x] += z; // Bắt đầu cộng z từ vị trí x
        diff[y + 1] -= z; // Kết thúc cộng z sau vị trí y
    }

    // Tính prefix sum để có kết quả cuối cùng
    let cumSum = 0;
    for (let i = 0; i < n; i++) {
        cumSum += diff[i];
        result[i] = cumSum;
    }

    return result;
}

module.exports = distributeFood;

/**
 * Kiểm tra khả năng biến đổi mảng thành dãy tăng hoặc giảm bằng cách đổi dấu
 *
 * Bài toán: Cho mảng số nguyên, có thể đổi dấu bất kỳ phần tử nào (convert(x) = -x).
 * Kiểm tra xem có thể tạo dãy tăng hoặc giảm (cho phép bằng nhau) hay không.
 *
 * Thuật toán tham lam (Greedy):
 * 1. Dãy tăng: Tại mỗi vị trí, chọn giá trị nhỏ nhất có thể mà > prev
 *    - Thử -|a[i]| trước (nhỏ hơn), nếu không được thì thử |a[i]|
 * 2. Dãy giảm: Tại mỗi vị trí, chọn giá trị lớn nhất có thể mà < prev
 *    - Thử |a[i]| trước (lớn hơn), nếu không được thì thử -|a[i]|
 *
 * Ví dụ: [4,3,-3,4,6]
 * - Dãy tăng: [-4,-3,3,4,6] (chọn giá trị nhỏ nhất có thể tại mỗi bước)
 * - Dãy giảm: [4,3,-3,-4,-6] (chọn giá trị lớn nhất có thể tại mỗi bước)
 *
 * @param {number[]} a - Mảng số nguyên đầu vào (1 ≤ length ≤ 10^5)
 * @returns {boolean} - true nếu có thể tạo dãy tăng hoặc giảm, false nếu không
 */
function convertArray(a) {
    // Kiểm tra khả năng tạo dãy tăng
    function canBeIncreasing() {
        let prev = -Infinity; // Giá trị trước
        for (let i = 0; i < a.length; i++) {
            let absVal = Math.abs(a[i]);
            // Các giá trị có thể tại vị trí i: -absVal hoặc absVal
            let minVal = -absVal; // Giá trị nhỏ nhất có thể
            if (minVal <= prev) {
                // Nếu giá trị nhỏ nhất không lớn hơn prev, thử giá trị lớn hơn
                minVal = absVal;
                if (minVal <= prev) {
                    return false; // Không thể làm tăng
                }
            }
            prev = minVal; // Cập nhật giá trị trước
        }
        return true;
    }

    // Kiểm tra khả năng tạo dãy giảm
    function canBeDecreasing() {
        let prev = Infinity; // Giá trị trước
        for (let i = 0; i < a.length; i++) {
            let absVal = Math.abs(a[i]);
            // Các giá trị có thể tại vị trí i: -absVal hoặc absVal
            let maxVal = absVal; // Giá trị lớn nhất có thể
            if (maxVal >= prev) {
                // Nếu giá trị lớn nhất không nhỏ hơn prev, thử giá trị nhỏ hơn
                maxVal = -absVal;
                if (maxVal >= prev) {
                    return false; // Không thể làm giảm
                }
            }
            prev = maxVal; // Cập nhật giá trị trước
        }
        return true;
    }

    // Trả về true nếu có thể tạo dãy tăng hoặc giảm
    return canBeIncreasing() || canBeDecreasing();
}

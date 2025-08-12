/**
 * Khôi phục tất cả địa chỉ IP hợp lệ từ chuỗi số
 *
 * Bài toán: Cho chuỗi s chỉ chứa chữ số, tìm tất cả cách chia thành 4 phần
 * để tạo địa chỉ IP hợp lệ (mỗi phần từ 0-255, không có leading zero trừ "0").
 *
 * Thuật toán Backtracking:
 * 1. Thử tất cả cách chia chuỗi thành 4 phần
 * 2. Kiểm tra mỗi phần có hợp lệ không (0-255, không leading zero)
 * 3. Nếu đủ 4 phần hợp lệ và hết chuỗi → thêm vào kết quả
 *
 * Điều kiện hợp lệ cho mỗi phần:
 * - Giá trị từ 0 đến 255
 * - Không có leading zero (trừ số "0" đơn lẻ)
 *
 * Ví dụ:
 * - "25525511135" → ["255.255.11.135", "255.255.111.35"]
 * - "123456789" → ["123.45.67.89"]
 *
 * @param {string} s - Chuỗi số cần khôi phục (0 ≤ length ≤ 12)
 * @returns {string[]} - Mảng tất cả địa chỉ IP hợp lệ
 */
function restoreIpAddress(s) {
    const result = [];

    // Kiểm tra độ dài hợp lệ (IP cần ít nhất 4 ký tự, tối đa 12 ký tự)
    if (s.length < 4 || s.length > 12) return result;

    /**
     * Kiểm tra một phần có hợp lệ làm thành phần IP không
     * @param {string} part - Phần cần kiểm tra
     * @returns {boolean} - true nếu hợp lệ, false nếu không
     */
    function isValidPart(part) {
        // Kiểm tra độ dài (1-3 ký tự)
        if (part.length === 0 || part.length > 3) return false;

        // Kiểm tra leading zero (không được có số 0 đứng đầu trừ "0")
        if (part.length > 1 && part[0] === "0") return false;

        // Kiểm tra giá trị trong phạm vi [0, 255]
        const num = parseInt(part, 10);
        return num <= 255;
    }

    /**
     * Hàm backtracking để thử tất cả cách chia chuỗi
     * @param {number} start - Vị trí bắt đầu trong chuỗi s
     * @param {string[]} parts - Mảng các phần đã tạo
     */
    function backtrack(start, parts) {
        // Pruning: kiểm tra còn đủ ký tự để tạo các phần còn lại không
        const remaining = s.length - start;
        const partsNeeded = 4 - parts.length;

        // Nếu không đủ ký tự hoặc quá nhiều ký tự cho các phần còn lại
        if (remaining < partsNeeded || remaining > partsNeeded * 3) {
            return;
        }

        // Nếu đã có đủ 4 phần
        if (parts.length === 4) {
            // Kiểm tra đã duyệt hết chuỗi chưa
            if (start === s.length) {
                result.push(parts.join(".")); // Tạo IP và thêm vào kết quả
            }
            return;
        }

        // Thử các độ dài khác nhau cho phần tiếp theo (1, 2, 3 ký tự)
        for (let len = 1; len <= 3 && start + len <= s.length; len++) {
            const part = s.substring(start, start + len);

            // Nếu phần này hợp lệ
            if (isValidPart(part)) {
                parts.push(part); // Thêm phần vào danh sách
                backtrack(start + len, parts); // Đệ quy với vị trí tiếp theo
                parts.pop(); // Backtrack: loại bỏ phần này
            }
        }
    }

    // Bắt đầu backtracking từ vị trí 0 với mảng rỗng
    backtrack(0, []);
    return result;
}

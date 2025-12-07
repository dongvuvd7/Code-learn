/**
 * BÀI TOÁN: VIM EDITOR BASIC - MÔ PHỎNG PHÍM TẮT VIM CƠ BẢN
 *
 * Mô tả: Mô phỏng các phím tắt Vim trên chuỗi s: "h" (trái), "l" (phải), "x" (xóa tại cursor),
 *        "rα" (thay thế tại cursor bằng α). Cursor bắt đầu tại 0.
 *
 * Ví dụ: ops = ["l", "h", "l", "x", "r2"], s = "abcdef" → "a2def"
 *
 * HƯỚNG GIẢI:
 * - Chuyển s thành array chars để dễ chỉnh sửa.
 * - Duyệt từng op, cập nhật cursor và chars tương ứng.
 * - Cursor giới hạn [0, length].
 * - Sau tất cả ops, join chars thành string.
 * - Thời gian: O(|ops| * |s|) do splice, chấp nhận với 1e4.
 */
function vimEditorBasic(ops, s) {
    let chars = s.split("");
    let cursor = 0;

    for (let op of ops) {
        if (op === "h") {
            if (cursor > 0) {
                cursor--;
            }
        } else if (op === "l") {
            if (cursor < chars.length) {
                cursor++;
            }
        } else if (op === "x") {
            if (cursor < chars.length) {
                chars.splice(cursor, 1);
                // cursor không đổi, giờ chỉ vào vị trí tiếp theo
            }
        } else if (op.startsWith("r") && op.length >= 2) {
            if (cursor < chars.length) {
                chars[cursor] = op[1];
            }
        }
    }

    return chars.join("");
}

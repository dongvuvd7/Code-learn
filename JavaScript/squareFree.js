/**
 * BÀI TOÁN: SQUARE FREE - SỐ KHÔNG CHỨA THỪA SỐ CHÍNH PHƯƠNG
 *
 * Định nghĩa:
 * - Số square free: không chia hết cho bất kỳ số chính phương nào (ngoài 1)
 * - Hoặc: phân tích thành thừa số nguyên tố, không có thừa số nào lặp ≥ 2 lần
 *
 * Ví dụ:
 * - 19 = 19 → square free ✓
 * - 18 = 2 × 3² → không square free (3 lặp 2 lần) ✗
 * - 12 = 2² × 3 → không square free (2 lặp 2 lần) ✗
 * - 30 = 2 × 3 × 5 → square free ✓
 * - 4 = 2² → không square free ✗
 *
 * CÁCH GIẢI:
 * - Kiểm tra n có chia hết cho i² với i từ 2 đến √n không
 * - Nếu có → không square free
 * - Nếu không → square free
 *
 * Lưu ý:
 * - Xử lý số âm: lấy |n|
 * - Số 0, 1 là trường hợp đặc biệt
 */
function squareFree(n) {
    // Xử lý số âm
    n = Math.abs(n);

    // Trường hợp đặc biệt
    if (n === 0) {
        return false; // 0 chia hết cho mọi số chính phương
    }

    if (n === 1) {
        return true; // 1 là square free
    }

    // Kiểm tra chia hết cho số chính phương
    // Duyệt i từ 2 đến √n
    const sqrtN = Math.sqrt(n);

    for (let i = 2; i <= sqrtN; i++) {
        const square = i * i;

        // Nếu n chia hết cho i²
        if (n % square === 0) {
            return false; // Không square free
        }
    }

    // Không chia hết cho số chính phương nào
    return true;
}

module.exports = squareFree;

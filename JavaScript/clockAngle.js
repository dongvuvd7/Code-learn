/**
 * Tính góc giữa kim giờ và kim phút trên đồng hồ
 *
 * Bài toán: Cho thời gian h giờ m phút, tính góc nhỏ hơn giữa 2 kim đồng hồ.
 *
 * Phân tích chuyển động kim:
 * - Kim phút: 360°/60phút = 6°/phút
 * - Kim giờ: 360°/720phút = 0.5°/phút (12 giờ = 720 phút)
 * - Mỗi giờ kim giờ quay 30° (360°/12 = 30°)
 *
 * Công thức:
 * - Góc kim phút = m × 6°
 * - Góc kim giờ = h × 30° + m × 0.5°
 * - Góc giữa 2 kim = min(|góc_giờ - góc_phút|, 360° - |góc_giờ - góc_phút|)
 *
 * @param {number} h - Giờ (0 ≤ h ≤ 23)
 * @param {number} m - Phút (0 ≤ m ≤ 59)
 * @returns {number} - Góc nhỏ hơn giữa kim giờ và kim phút (≤ 180°)
 */
function clockAngle(h, m) {
    // Chuyển về định dạng 12 giờ (vì đồng hồ analog có 12 giờ)
    h = h % 12;

    // Tính góc kim giờ: mỗi giờ 30°, mỗi phút kim giờ di chuyển thêm 0.5°
    const hourAngle = h * 30 + m * 0.5;

    // Tính góc kim phút: mỗi phút 6°
    const minuteAngle = m * 6;

    // Tính góc tuyệt đối giữa 2 kim
    const angle = Math.abs(hourAngle - minuteAngle);

    // Trả về góc nhỏ hơn: nếu góc > 180° thì lấy góc bù (360° - góc)
    return Math.min(angle, 360 - angle);
}

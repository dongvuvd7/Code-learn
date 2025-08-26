function chargePhone(s1, s2, k) {
    /**
     * Tính lượng pin điện thoại sau khi sạc
     *
     * Bài toán: DAN sạc pin từ s1 đến s2, cứ k phút tăng 1%
     * Tính tổng thời gian sạc và chia cho k để có phần trăm pin
     *
     * Thuật toán:
     * 1. Chuyển đổi thời gian s1, s2 thành giây
     * 2. Tính thời gian sạc = s2 - s1 (giây)
     * 3. Chuyển thời gian sạc thành phút
     * 4. Chia cho k và làm tròn xuống để có % pin
     *
     * Ví dụ: s1="00:12:12", s2="01:12:32", k=4
     * - s1 = 12*60 + 12 = 732 giây
     * - s2 = 1*3600 + 12*60 + 32 = 4352 giây
     * - Thời gian sạc = 4352 - 732 = 3620 giây = 60.33 phút
     * - Pin = floor(60.33/4) = 15%
     *
     * @param {string} s1 - Thời gian bắt đầu sạc (hh:mm:ss)
     * @param {string} s2 - Thời gian kết thúc sạc (hh:mm:ss)
     * @param {number} k - Số phút để tăng 1% pin (1 ≤ k ≤ 10^5)
     * @returns {number} - Phần trăm pin sau khi sạc
     */

    // Hàm chuyển đổi thời gian "hh:mm:ss" thành giây
    function timeToSeconds(timeStr) {
        const [hours, minutes, seconds] = timeStr.split(":").map(Number);
        return hours * 3600 + minutes * 60 + seconds;
    }

    // Chuyển đổi s1 và s2 thành giây
    const startSeconds = timeToSeconds(s1);
    const endSeconds = timeToSeconds(s2);

    // Tính thời gian sạc (giây)
    const chargingTimeSeconds = endSeconds - startSeconds;

    // Chuyển thành phút
    const chargingTimeMinutes = chargingTimeSeconds / 60;

    // Tính phần trăm pin (làm tròn xuống)
    const batteryPercentage = Math.floor(chargingTimeMinutes / k);

    return batteryPercentage > 100 ? 100 : batteryPercentage; // Đảm bảo không vượt quá 100%
}

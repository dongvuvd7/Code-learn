/**
 * BÀI TOÁN: PROCESSING DATA - XỬ LÝ DỮ LIỆU
 *
 * LOGIC MỚI:
 * - File được thêm tuần tự, mỗi file cách nhau về INDEX (không phải thời gian)
 * - Tại mỗi GIÂY, kiểm tra xem có thể thêm file tiếp theo không
 * - File i bắt đầu xử lý tại giây startTime[i]
 * - File i chiếm RAM từ giây startTime[i] đến startTime[i] + b[i] - 1
 */
function data(a, b, k) {
    const n = a.length;

    // Mảng lưu [startTime, endTime, ram] cho từng file
    const files = [];

    let time = 0;

    for (let i = 0; i < n; i++) {
        // Tìm thời điểm sớm nhất có thể bắt đầu file i
        // (phải >= time và phải có đủ RAM)
        while (true) {
            // Tính RAM đang dùng tại thời điểm 'time'
            let usedRam = 0;
            for (const [start, end, ram] of files) {
                if (start <= time && time <= end) {
                    usedRam += ram;
                }
            }

            // Kiểm tra có đủ RAM không
            if (usedRam + a[i] <= k) {
                // Đủ RAM, thêm file
                const startTime = time;
                const endTime = time + b[i] - 1;
                files.push([startTime, endTime, a[i]]);
                time++; // Chuyển sang giây tiếp theo cho file tiếp theo
                break;
            } else {
                // Không đủ RAM, quá tải
                return time;
            }
        }
    }

    return -1;
}

module.exports = data;

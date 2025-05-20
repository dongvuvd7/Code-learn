function minNumberInString(str) {
    let minNum = null; // Lưu số nhỏ nhất
    const n = str.length;
    
    for (let i = 0; i < n; i++) {
        // Kiểm tra nếu bắt đầu bằng số hoặc dấu trừ
        if (str[i] >= '0' && str[i] <= '9') {
            // Bắt đầu một số dương
            let numStr = str[i];
            let j = i + 1;
            // Mở rộng chuỗi con số
            while (j < n && str[j] >= '0' && str[j] <= '9') {
                numStr += str[j];
                j++;
            }
            // Chuyển thành số và cập nhật minNum
            const num = BigInt(numStr);
            if (minNum === null || num < minNum) {
                minNum = num;
            }
        } else if (str[i] === '-' && i + 1 < n && str[i + 1] >= '0' && str[i + 1] <= '9') {
            // Bắt đầu một số âm
            let numStr = str[i];
            let j = i + 1;
            numStr += str[j]; // Thêm chữ số đầu tiên
            j++;
            // Mở rộng chuỗi con số
            while (j < n && str[j] >= '0' && str[j] <= '9') {
                numStr += str[j];
                j++;
            }
            // Chuyển thành số và cập nhật minNum
            const num = BigInt(numStr);
            if (minNum === null || num < minNum) {
                minNum = num;
            }
        }
    }
    
    // Nếu không tìm thấy số nào, trả về -1
    return minNum === null ? -1 : Number(minNum);
}
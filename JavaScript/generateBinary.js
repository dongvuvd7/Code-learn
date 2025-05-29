function generateBinary(n) {
    // Trường hợp đặc biệt khi n = 0
    if (n === 0) return [];
    
    const result = [];
    // Số lượng chuỗi nhị phân có độ dài n là 2^n
    const count = Math.pow(2, n);
    
    for (let i = 0; i < count; i++) {
        // Chuyển đổi số i sang dạng nhị phân và thêm các chữ số '0' ở đầu nếu cần
        let binaryString = i.toString(2);
        
        // Thêm các số 0 ở đầu để đạt độ dài n
        while (binaryString.length < n) {
            binaryString = '0' + binaryString;
        }
        
        result.push(binaryString);
    }
    
    return result;
}
function decode(s) {
    // Lật ngược chuỗi s
    let reversed = s.split('').reverse().join('');
    
    // Xóa bất kỳ ký tự nào không phải chữ cái hoặc dấu cách
    let result = reversed.replace(/[^a-zA-Z\s]/g, '');
    
    return result;
}

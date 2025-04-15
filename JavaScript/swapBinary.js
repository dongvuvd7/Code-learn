function swapBinary(a, b) {
    // Kiểm tra độ dài
    if (a.length !== b.length) return -1;
    
    // Đếm số 0 và 1 trong cả hai chuỗi
    let countA0 = 0, countA1 = 0;
    let countB0 = 0, countB1 = 0;
    
    for (let i = 0; i < a.length; i++) {
        if (a[i] === '0') countA0++;
        else countA1++;
        if (b[i] === '0') countB0++;
        else countB1++;
    }
    
    // Nếu số 0 và 1 không khớp, trả về -1
    if (countA0 !== countB0 || countA1 !== countB1) return -1;
    
    // Đếm số vị trí khác nhau
    let diff = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) diff++;
    }
    
    // Số lần hoán đổi tối thiểu = diff / 2
    return diff / 2;
}
function triangleOrSquareNumber(n){
    let isTriangle = false;
    let isSquare = false;
    
    // Kiểm tra số tam giác bằng cách giải phương trình
    // n = k*(k+1)/2 <=> k^2 + k - 2*n = 0
    const k = (-1 + Math.sqrt(1 + 8 * n)) / 2;
    
    // k phải là số nguyên dương
    if (k > 0 && Math.abs(k - Math.round(k)) < 1e-10) {
        // Xác minh lại bằng công thức gốc
        const kInt = Math.round(k);
        if (kInt * (kInt + 1) / 2 === n) {
            isTriangle = true;
        }
    }
    
    // Kiểm tra số chính phương
    const sqrtN = Math.sqrt(n);
    if (Math.abs(sqrtN - Math.round(sqrtN)) < 1e-10) {
        const sqrtInt = Math.round(sqrtN);
        if (sqrtInt * sqrtInt === n) {
            isSquare = true;
        }
    }
    
    // Trả về kết quả
    if (isTriangle && isSquare) {
        return 3;
    } else if (isTriangle) {
        return 1;
    } else if (isSquare) {
        return 2;
    } else {
        return -1;
    }
}
function interestingNumber(n) {
    // Số 0, 1 không phải là số thú vị
    if (n <= 1) return false;
    
    // Trường hợp n là số âm
    if (n < 0) {
        // Kiểm tra n có thể biểu diễn dưới dạng (-p) * q không
        // Trong đó p và q là số nguyên tố
        n = Math.abs(n);
    }
    
    // Đếm số lượng thừa số nguyên tố
    let primeFactors = [];
    
    // Tìm các thừa số nguyên tố
    for (let i = 2; i <= Math.sqrt(n); i++) {
        while (n % i === 0) {
            primeFactors.push(i);
            n /= i;
        }
    }
    
    if (n > 1) {
        primeFactors.push(n);
    }
    
    // Kiểm tra xem có đúng 2 thừa số nguyên tố khác nhau không
    if (primeFactors.length === 2) {
        return true;
    }
    
    // Trường hợp bình phương của số nguyên tố không được coi là số thú vị
    return false;
}
function pyramidOfCups(n) {
    // Nếu n < 5, không thể tạo kim tự tháp 2 tầng
    if (n < 5) return false;
    
    let sum = 0n;
    let k = 1n;
    n = BigInt(n);
    
    // Tính tổng bình phương từ 1^2 đến k^2
    while (true) {
        sum += k * k;
        if (sum == n && k >= 2n) return true;
        if (sum > n) return false;
        k++;
    }
}
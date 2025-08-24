function checkPerfectNumber(n){
    // Nếu n không phải số dương, trả về false
    if (n <= 0) {
        return false;
    }
    
    // Số 1 có ước thực sự duy nhất là 1, nhưng tổng là 0, nên không phải số hoàn hảo
    if (n === 1) {
        return false;
    }
    
    // Tìm tất cả các ước của n (trừ chính nó) và tính tổng
    let sum = 1; // Luôn có ước số 1
    
    // Tối ưu: chỉ cần kiểm tra đến căn bậc hai của n
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            sum += i; // Thêm ước i
            
            // Nếu i khác n/i thì thêm cả n/i (ước đối xứng)
            if (i !== n / i) {
                sum += n / i;
            }
        }
    }
    
    // Kiểm tra điều kiện số hoàn hảo
    return sum === n;
}
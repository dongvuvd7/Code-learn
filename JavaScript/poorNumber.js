function poorNumber(n){
    // Xử lý trường hợp n âm
    n = Math.abs(n);
    
    // Trường hợp đặc biệt
    if (n === 1) return true; // 1 không có ước dương thực sự nào
    
    // Trường hợp số nguyên tố: Số nguyên tố chỉ có 1 là ước thực sự
    if (isPrime(n)) return true; // 1 < n với mọi n > 1
    
    // Trường hợp số hoàn hảo: Số hoàn hảo có tổng các ước bằng chính nó
    // Ví dụ: 6 = 1+2+3, 28 = 1+2+4+7+14
    if (isPerfect(n)) return false;
    
    // Tính tổng các ước thực sự
    let sum = 1; // Bắt đầu với 1 vì 1 luôn là ước
    
    // Chỉ kiểm tra đến căn bậc hai của n
    const sqrtN = Math.sqrt(n);
    for (let i = 2; i <= sqrtN; i++) {
        if (n % i === 0) {
            sum += i;
            
            // Nếu i khác với n/i, thêm n/i vào tổng
            if (i !== n / i) {
                sum += n / i;
            }
            
            // Kiểm tra sớm nếu tổng đã vượt quá n
            if (sum > n) return false;
        }
    }
    
    return sum < n;
}

// Kiểm tra số nguyên tố
function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    
    const sqrtN = Math.sqrt(n);
    for (let i = 5; i <= sqrtN; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    
    return true;
}

// Kiểm tra số hoàn hảo (Perfect number)
function isPerfect(n) {
    // Chỉ có một số lượng nhỏ các số hoàn hảo được biết đến
    // Hiện tại chỉ biết 8 số hoàn hảo: 6, 28, 496, 8128, 33550336, 8589869056, ...
    if (n === 6 || n === 28 || n === 496 || n === 8128 || 
        n === 33550336 || n === 8589869056) return true;
    
    // Với n rất lớn, ta sử dụng đặc tính của số hoàn hảo chẵn: 2^(p-1)*(2^p-1)
    // với 2^p-1 là số nguyên tố Mersenne
    // Tuy nhiên, việc này tốn kém nên chỉ kiểm tra các số hoàn hảo nhỏ
    
    return false;
}
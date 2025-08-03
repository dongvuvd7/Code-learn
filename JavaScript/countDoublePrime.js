function countDoublePrime(n){
    if (n < 2) return 0; // Không có số DoublePrime nào nhỏ hơn 2
    
    // Sàng Eratosthenes cho tất cả các số đến 2n
    const max = 2 * n;
    const isPrime = new Array(max + 1).fill(true);
    isPrime[0] = isPrime[1] = false;
    
    for (let i = 2; i * i <= max; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j <= max; j += i) {
                isPrime[j] = false;
            }
        }
    }
    
    // Đếm số DoublePrime
    let count = 0;
    for (let x = 2; x <= n; x++) {
        if (isPrime[x] && isPrime[2 * x - 1]) {
            count++;
        }
    }
    
    return count;
}
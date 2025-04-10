function reversePrime(L, R) {
    const MAX_N = 10000000; // 10^7
    
    // Sàng Eratosthenes để sinh số nguyên tố
    let isPrime = new Array(MAX_N + 1).fill(true);
    isPrime[0] = isPrime[1] = false;
    
    for (let i = 2; i * i <= MAX_N; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j <= MAX_N; j += i) {
                isPrime[j] = false;
            }
        }
    }
    
    // Hàm đảo ngược số
    function reverseNumber(num) {
        return parseInt(num.toString().split('').reverse().join(''));
    }
    
    // Tìm reversePrime
    let result = [];
    for (let p = 2; p <= MAX_N; p++) {
        if (isPrime[p]) {
            let reversed = reverseNumber(p);
            if (reversed >= L && reversed <= R) {
                result.push(reversed);
            }
        }
    }
    
    // Sắp xếp tăng dần
    return result.sort((a, b) => a - b);
}

// Test cases
console.log(reversePrime(1, 10));       // [2, 3, 5, 7]
console.log(reversePrime(30, 40));      // [31, 32, 34, 37]
console.log(reversePrime(9999900, 10000000)); // Một số reversePrime lớn
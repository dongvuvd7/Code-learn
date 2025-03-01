/**
 * Hàm tách n thành các mảng gồm 1 cặp số nguyên tố sao cho tổng của cặp số nguyên tố đó bằng n
 */
function goldback(n){
    if(n < 2 || n%2 == 1) return []
    // Hàm kiểm tra số nguyên tố
    function isPrime(num){
        if(num < 2) return false;
        for(let i = 2; i <= Math.sqrt(num); i++){
            if(num % i === 0) return false;
        }
        return true;
    }
    
    // Tạo mảng chứa cặp số nguyên tố
    let result = [];
    for(let i = 2; i <= n / 2; i++){
        if(isPrime(i) && isPrime(n - i)){
            result.push([i, n - i]);
        }
    }
    return result;
}

console.log(goldback(16));
/**
 * Cặp số nguyên tố sexy là cặp số cách nhau 6 đơn vị
 * Đếm trong khoảng từ l đến r có bao nhiêu cặp số nguyên tố sexy
 * @param {*} l 
 * @param {*} r 
 */
function sexyPrimePairs(l,r){
    let count = 0;
    for (let i = l; i <= r - 6; i++) {
        if (isPrime(i) && isPrime(i + 6)) {
            count++;
        }
    }
    return count;
}

function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) return false;
    }
    return true;
}
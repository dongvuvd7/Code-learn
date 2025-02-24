/**
 * Bố số nguyên tố sinh là là 1 bộ gồm 3 số nguyên tố liên tiếp và số nhỏ nhất cách số lớn nhất 6 đơn vị (ngoại trừ 2 bộ (2, 3, 5) và (3, 5, 7))
 * Đếm trong khoảng từ l đến r có bao nhiêu bộ số nguyên tố sinh ba
 * @param {*} l 
 * @param {*} r 
 */
function primeTriplets(l,r){
    let count = 0;
    for (let i = l; i <= r - 6; i++) {
        if ((isPrime(i) && isPrime(i + 2) && isPrime(i + 6)) || (isPrime(i) && isPrime(i + 4) && isPrime(i + 6))) {
            count++;
        }
    }
    // Bổ sung 2 bộ số nguyên tố sinh (2, 3, 5) và (3, 5, 7) nếu nằm trong khoảng l và r
    if (l <= 2 && r >= 5) count++;
    if (l <= 3 && r >= 7) count++;

    return count;
}

function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) return false;
    }
    return true;
}

console.log(primeTriplets(2, 5));
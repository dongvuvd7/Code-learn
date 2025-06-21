function rootmultiple(N){
    while(countCharOfNumber(N) > 1){
        console.log('countCharOfNumber', countCharOfNumber(N));
        console.log('productOfDigits', productOfDigits(N));
        N = productOfDigits(N);
    }
    return N;
}

/**
 * Hàm đếm số lượng ký tự trong số
 */
function countCharOfNumber(n) {
    let str = n.toString();
    return str.length;
}

/**
 * Hàm tính tích của các chữ số trong số
 */
function productOfDigits(n) {
    let product = 1;
    while (n > 0) {
        product *= n % 10;
        n = Math.floor(n / 10);
    }
    return product;
}

console.log(rootmultiple(8125218));

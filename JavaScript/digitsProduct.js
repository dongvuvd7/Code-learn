/**
 * Tìm số nguyên dương nhỏ nhất có tích các chữ số bằng product và trả về -1 nếu không tồn tại
 * 
 */
function digitsProduct(product){
    if(product === 0) return 10;
    if(product === 1) return 1;
    let result = 0, i = 9;
    for(i = 9; i > 1; i--){
        while(product % i === 0){
            product /= i;
            result = result * 10 + i;
        }
    }
    //Đảo ngược kết quả
    if(product > 1) return -1;
    let res = 0;
    while(result > 0){
        res = res * 10 + result % 10;
        result = Math.floor(result / 10);
    }
    return res;
}

console.log(digitsProduct(12)); // 26

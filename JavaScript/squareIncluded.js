/**
 * Một số là square-included nếu phân tích nó thành các thừa số nguyên tố thì có ít nhất một số chính phương
 */
function squareIncluded(n){
    if(n == 0) return false;
    let i = 2;
    while(i*i <= n){
        if(n % (i*i) == 0) return true;
        i++;
    }
    return false;
}
/**
 * Given three integers x, y and n, find the largest integer k such that:
 * k is less than or equal to n
 * k % x = y
 * where % is the modulo operation. If there is no such integer, return -1 instead.
 */
function requiredRemainder(x,y,n){
    let result = n - (n % x) + y;
    if(result > n){
        result -= x;
    }
    return result;
}
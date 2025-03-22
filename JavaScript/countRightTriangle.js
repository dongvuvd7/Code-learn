/**
 * Tìm số tam giác vuông có thể được tạo ra từ n đỉnh của đa giác đều
 * @param {*} n 
 */
function countRightTriangle(n){
    return  (n < 3 || n % 2 !== 0) ? 0 : (n / 2) * (n - 2);
}

console.log(countRightTriangle(4));
/**
 * Trả về tổ hợp chập k của n phần tử
 */
function makeFlags(k,n){
    if(k > n) return 0;
    if(k == 0) return 1;
    return makeFlags(k-1,n-1) + makeFlags(k,n-1);
}

console.log(makeFlags(2,3));
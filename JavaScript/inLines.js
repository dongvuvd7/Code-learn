/**
 * Đếm số đường chéo của đa giác lồi n đỉnh
 */
function inLines(n){
    if(n < 3) return -1;
    else return n*(n-3)/2;
}
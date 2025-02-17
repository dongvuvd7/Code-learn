/**
 * Hai số nguyên dương x và y được gọi là số đặc biệt nếu  thỏa mãn l<=x^2<=r, l<=y^3<=r và |x^2 - y^3| <= k
 * Tìm số lượng số đặc biệt trong đoạn [l,r]
 */
function counterPoN(l,r,k){
    let res = 0;
    for (let i = 1; i * i <= r; i++) {
        for (let j = 1; j * j * j <= r; j++) {
            if (l <= i * i && i * i <= r && l <= j * j * j && j * j * j <= r && Math.abs(i * i - j * j * j) <= k) {
                res++;
            }
        }
    }
    return res;
}
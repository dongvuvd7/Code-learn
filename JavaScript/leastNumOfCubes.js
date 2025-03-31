/**
 * Cho một số nguyên dương n, 
 * tìm số lượng ít nhất các số lập phương mà tổng của nó bằng n
 */
function leastNumOfCubes(n){
    // Tạo mảng để lưu trữ số lượng lập phương
    let cubes = [];
    for (let i = 1; i * i * i <= n; i++) {
        cubes.push(i * i * i);
    }
    // Tạo mảng dp để lưu trữ số lượng lập phương tối thiểu cho từng giá trị từ 0 đến n
    let dp = new Array(n + 1).fill(Infinity);
    dp[0] = 0;
    // Duyệt qua từng số lập phương và cập nhật dp
    for (let cube of cubes) {
        for (let j = cube; j <= n; j++) {
            dp[j] = Math.min(dp[j], dp[j - cube] + 1);
        }
    }
    return dp[n];
}
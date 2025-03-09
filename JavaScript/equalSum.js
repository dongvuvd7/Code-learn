/**
 * Đếm số cách tạo thành 2 mảng có tổng bằng nhau từ mảng n phần tử từ 1 đến n
 * @param {*} n 
 */
function equalSum(n){
    let sum = n * (n + 1) / 2;
    if(sum % 2) return 0;
    sum /= 2;
    let dp = new Array(sum + 1).fill(0);
    dp[0] = 1;
    for(let i = 1; i <= n; i++){
        for(let j = sum; j >= i; j--){
            dp[j] = (dp[j] + dp[j - i]) % 1000000007;
        }
    }
    return (dp[sum] % 1000000007) / 2;
}   
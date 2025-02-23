
/**
 * Cho 1 con xúc xắc có mặt từ 1 đến 6, hãy trả về tất cả các cách có thể để ném được tổng giá trị bằng n
 * Kết quả lấy dư cho 10^9 + 7
 */
function throwingDices(n){
    if(n == 0) return 0;
    let dp = new Array(n + 1).fill(0);
    dp[0] = 1;
    for(let i = 1; i <= n; i++){
        for(let j = 1; j <= 6; j++){
            if(i - j >= 0){
                dp[i] += dp[i - j];
                dp[i] %= 1000000007;
            }
        }
    }
    return dp[n];
}

console.log(throwingDices(0))




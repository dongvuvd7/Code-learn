/**
 * Cho mảng prices chứa giá của các sách và mảng pages chứa số trang của các sách, hãy trả về số trang tối đa mà bạn có thể mua với số tiền n
 */
function maximumPages(prices,pages,n){
    let dp = new Array(n+1).fill(0);
    for(let i = 0; i < prices.length; i++){
        for(let j = n; j >= prices[i]; j--){
            dp[j] = Math.max(dp[j], dp[j - prices[i]] + pages[i]);
        }
    }
    return dp[n];
}
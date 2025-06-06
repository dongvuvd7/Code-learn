/**
 * a is arr with size is 4
 * check if can divide a into 2 parts with same sum
 * return "YES" if can, "NO" if can't
 */
function divide(a){
    let sum = 0;
    for(let i = 0; i < a.length; i++){
        sum += a[i];
    }
    if(sum % 2 != 0){
        return "NO";
    }
    let half = sum / 2;
    let dp = new Array(half + 1).fill(false);
    dp[0] = true;
    for(let i = 0; i < a.length; i++){
        for(let j = half; j >= a[i]; j--){
            dp[j] = dp[j] || dp[j - a[i]];
        }
    }
    return dp[half] ? "YES" : "NO";
}
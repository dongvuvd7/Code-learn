/**
 * Xét một bản đồ n x n ô vuông và có bẫy. 
 * Hãy tính số đường đi có thể để đến được đích bằng cách đi sang phải hoặc xuống dưới và không đi chéo('.': thể hiện cho đường đi, '*': thể hiện cho bẫy). 
 * Vì số đường đi có thể rất lớn nên lấy dư cho 10^9+7
 * 
 */
function countPaths(arr){
    const n = arr.length;
    const mod = 1000000007;
    const dp = Array.from({ length: n }, () => Array(n).fill(0));

    // Nếu ô đầu tiên không phải là bẫy, khởi tạo ô đầu tiên
    if (arr[0][0] === '.') {
        dp[0][0] = 1;
    }

    // Khởi tạo hàng đầu tiên
    for (let j = 1; j < n; j++) {
        if (arr[0][j] === '.') {
            dp[0][j] = dp[0][j - 1];
        }
    }

    // Khởi tạo cột đầu tiên
    for (let i = 1; i < n; i++) {
        if (arr[i][0] === '.') {
            dp[i][0] = dp[i - 1][0];
        }
    }

    // Tính số đường đi cho các ô còn lại
    for (let i = 1; i < n; i++) {
        for (let j = 1; j < n; j++) {
            if (arr[i][j] === '.') {
                dp[i][j] = (dp[i - 1][j] + dp[i][j - 1]) % mod;
            }
        }
    }

    return dp[n - 1][n - 1];
}
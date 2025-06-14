function countNumber(n){
    // Mảng để lưu trữ các giá trị đã tính (memoization)
    const memo = {};
    
    // Hàm đệ quy để đếm số cách
    function count(pos, sum) {
        // Nếu đã duyệt tất cả 6 chữ số
        if (pos === 6) {
            return sum === n ? 1 : 0;
        }
        
        // Nếu đã tính toán trường hợp này rồi
        const key = `${pos},${sum}`;
        if (memo[key] !== undefined) {
            return memo[key];
        }
        
        let ways = 0;
        
        // Phạm vi chữ số cho vị trí hiện tại
        const start = (pos === 0) ? 1 : 0;  // Vị trí đầu tiên không thể là 0
        
        for (let digit = start; digit <= 9; digit++) {
            // Nếu tổng mới vượt quá n, bỏ qua
            if (sum + digit > n) continue;
            
            ways += count(pos + 1, sum + digit);
        }
        
        // Lưu lại kết quả đã tính
        memo[key] = ways;
        return ways;
    }
    
    return count(0, 0);
}
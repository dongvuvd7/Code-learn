/**
 * Tìm số đối xứng thu được từ số nguyên dương n (11 ≤ n ≤ 99) bằng cách
 * lặp lại quá trình cộng n với số ánh xạ gương (số đảo ngược các chữ số),
 * kể cả khi n đã là số đối xứng ban đầu.
 * @param {number} n - Số nguyên dương có hai chữ số (11 ≤ n ≤ 99).
 * @returns {number} Số đối xứng thu được.
 */
function symmetricNumber(n) {
    // Hàm kiểm tra số đối xứng
    function isPalindrome(num) {
        let str = num.toString();
        return str === str.split('').reverse().join('');
    }
    
    // Hàm tính số ánh xạ gương
    function getReverse(num) {
        return parseInt(num.toString().split('').reverse().join(''));
    }
    
    // Thực hiện ít nhất một bước biến đổi
    let reverseN = getReverse(n);
    n = n + reverseN;
    
    // Nếu đã đối xứng, trả về kết quả
    if (isPalindrome(n)) return n;
    
    // Lặp cho đến khi tìm được số đối xứng
    while (true) {
        reverseN = getReverse(n);
        n = n + reverseN;
        
        if (isPalindrome(n)) {
            return n;
        }
    }
}
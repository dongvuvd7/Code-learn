/**
 * Kiểm tra khả năng biến đổi chuỗi a thành chuỗi b
 * 
 * Bài toán: Cho chuỗi a (chữ hoa + thường) và chuỗi b (chỉ chữ hoa).
 * Có thể biến đổi a bằng 2 cách:
 * 1. Chuyển chữ thường thành chữ hoa
 * 2. Xóa tất cả chữ thường
 * 
 * Thuật toán: Two Pointers
 * - Duyệt qua a, với mỗi ký tự chữ hoa trong a:
 *   + Nếu khớp với ký tự hiện tại trong b: chuyển sang ký tự tiếp theo của b
 *   + Nếu không khớp: không thể biến đổi
 * - Với chữ thường: có thể chuyển thành chữ hoa hoặc xóa
 * - Kiểm tra xem đã duyệt hết b chưa
 * 
 * Ví dụ: a="daBcd", b="ABC"
 * - 'd' (thường): bỏ qua hoặc chuyển thành 'D'
 * - 'a' (thường): chuyển thành 'A' → khớp với b[0]
 * - 'B' (hoa): khớp với b[1]
 * - 'c' (thường): chuyển thành 'C' → khớp với b[2]
 * - 'd' (thường): xóa
 * → Kết quả: true
 * 
 * @param {string} a - Chuỗi nguồn (chữ hoa + thường)
 * @param {string} b - Chuỗi đích (chỉ chữ hoa)
 * @returns {boolean} - true nếu có thể biến đổi, false nếu không
 */
function canTransform(a, b){
    // Sử dụng đệ quy có memoization để kiểm tra tất cả khả năng
    const memo = new Map();
    
    function canMatch(i, j) {
        // i: vị trí hiện tại trong a
        // j: vị trí hiện tại trong b
        
        // Base cases
        if (j === b.length) return true;  // Đã khớp hết b
        if (i === a.length) return false; // Hết a nhưng chưa hết b
        
        // Kiểm tra memoization
        const key = `${i},${j}`;
        if (memo.has(key)) return memo.get(key);
        
        let result = false;
        const charA = a[i];
        
        if (charA >= 'A' && charA <= 'Z') {
            // Chữ hoa: phải khớp chính xác
            if (charA === b[j]) {
                result = canMatch(i + 1, j + 1);
            } else {
                result = false;
            }
        } else {
            // Chữ thường: có 2 lựa chọn
            // Lựa chọn 1: Chuyển thành chữ hoa
            const upperCharA = charA.toUpperCase();
            if (upperCharA === b[j]) {
                result = canMatch(i + 1, j + 1);
            }
            
            // Lựa chọn 2: Xóa ký tự này
            if (!result) {
                result = canMatch(i + 1, j);
            }
        }
        
        memo.set(key, result);
        return result;
    }
    
    return canMatch(0, 0);
}

console.log(canTransform("AbbBcD", "ABBD"));
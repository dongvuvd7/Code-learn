/**
 * Tìm số suy giảm nhỏ nhất lớn hơn n
 * 
 * Bài toán: Số suy giảm là số có các chữ số giảm dần từ trái sang phải.
 * Ví dụ: 4, 93, 321, 9876 là các số suy giảm
 *        111, 322, 123 không phải là số suy giảm
 * 
 * Thuật toán: Duyệt từ n+1 và kiểm tra từng số cho đến khi tìm được số suy giảm đầu tiên
 * - Với mỗi số, kiểm tra các chữ số có giảm dần hay không
 * - Số có 1 chữ số luôn là số suy giảm
 * - Trả về số suy giảm nhỏ nhất > n
 * 
 * Ví dụ:
 * - n=123 → 210 (vì 124,125,...,209 đều không suy giảm)
 * - n=5 → 6 (số có 1 chữ số luôn suy giảm)
 * - n=983 → 984 (đã suy giảm: 9>8>4)
 * 
 * @param {number} n - Số nguyên dương đầu vào (1 ≤ n ≤ 10^6)
 * @returns {number} - Số suy giảm nhỏ nhất lớn hơn n
 */
function reductionNumber(n){
    let current = n + 1;
    
    while (true) {
        const str = current.toString();
        let isReduction = true;
        
        // Kiểm tra tính suy giảm
        for (let i = 0; i < str.length - 1; i++) {
            if (parseInt(str[i]) <= parseInt(str[i + 1])) {
                isReduction = false;
                break;
            }
        }
        
        if (isReduction) {
            return current;
        }
        
        current++;
    }
}
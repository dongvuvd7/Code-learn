/**
 * Tính số thao tác tối thiểu để biến đổi chuỗi s1 thành s2
 * 
 * Bài toán: Có 2 thao tác:
 * 1. Thay đổi 1 ký tự thành ký tự khác (cost = 1)
 * 2. Hoán đổi 2 ký tự (cost = 1)
 * 
 * Thuật toán:
 * 1. Kiểm tra điều kiện cần: độ dài 2 chuỗi phải bằng nhau
 * 2. Tìm các vị trí khác nhau giữa s1 và s2
 * 3. Tối ưu hóa bằng cách ưu tiên hoán đổi (1 thao tác cho 2 vị trí)
 * 4. Các vị trí còn lại dùng thao tác thay đổi
 * 
 * Ví dụ: s1="abcd", s2="badd"
 * - Vị trí 0: 'a' != 'b' 
 * - Vị trí 1: 'b' != 'a'
 * - Vị trí 2: 'c' != 'd'
 * - Vị trí 3: 'd' == 'd' ✓
 * 
 * Tối ưu: Hoán đổi vị trí 0,1 (a↔b) = 1 thao tác
 * Thay đổi vị trí 2 (c→d) = 1 thao tác
 * Tổng = 2 thao tác
 * 
 * @param {string} s1 - Chuỗi nguồn (1 ≤ length ≤ 10^5)
 * @param {string} s2 - Chuỗi đích (1 ≤ length ≤ 10^5)
 * @returns {number} - Số thao tác tối thiểu, -1 nếu không thể
 */
function canSwitchString(s1, s2) {
    // Kiểm tra điều kiện cần thiết
    if (s1.length !== s2.length) {
        return -1;
    }
    
    const n = s1.length;
    
    // Tìm các vị trí khác nhau
    const differences = [];
    for (let i = 0; i < n; i++) {
        if (s1[i] !== s2[i]) {
            differences.push(i);
        }
    }
    
    // Nếu không có vị trí nào khác nhau
    if (differences.length === 0) {
        return 0;
    }
    
    // Tạo map để theo dõi các ký tự cần thay đổi
    const needChange = new Map(); // s1[i] -> danh sách vị trí cần thành s2[i]
    
    // Phân loại các vị trí khác nhau
    for (let pos of differences) {
        const fromChar = s1[pos];
        const toChar = s2[pos];
        
        if (!needChange.has(fromChar)) {
            needChange.set(fromChar, []);
        }
        needChange.get(fromChar).push({pos, toChar});
    }
    
    let operations = 0;
    const processed = new Set(); // Các vị trí đã xử lý
    
    // Ưu tiên tìm các cặp có thể hoán đổi
    for (let pos of differences) {
        if (processed.has(pos)) continue;
        
        const char1 = s1[pos];
        const char2 = s2[pos];
        
        // Tìm vị trí khác có thể hoán đổi
        let foundSwap = false;
        for (let otherPos of differences) {
            if (processed.has(otherPos) || otherPos === pos) continue;
            
            const otherChar1 = s1[otherPos];
            const otherChar2 = s2[otherPos];
            
            // Kiểm tra có thể hoán đổi không
            if (char1 === otherChar2 && char2 === otherChar1) {
                // Hoán đổi 2 vị trí
                operations++;
                processed.add(pos);
                processed.add(otherPos);
                foundSwap = true;
                break;
            }
        }
        
        // Nếu không tìm được cặp hoán đổi, phải thay đổi
        if (!foundSwap) {
            operations++;
            processed.add(pos);
        }
    }
    
    return operations;
}

// Test với ví dụ từ đề bài
console.log(canSwitchString("abcd", "badd")); // 2

// Test thêm các trường hợp khác
console.log(canSwitchString("abc", "bca")); // 2 (hoán đổi a↔b, thay c→a)
console.log(canSwitchString("abc", "abc")); // 0 (đã giống nhau)
console.log(canSwitchString("ab", "ba"));   // 1 (hoán đổi a↔b)
console.log(canSwitchString("abc", "def")); // 3 (thay đổi tất cả)
console.log(canSwitchString("abc", "abcd")); // -1 (độ dài khác nhau)

// Verification: Trace chi tiết cho ví dụ
function traceExample(s1, s2) {
    console.log(`\nTrace cho s1="${s1}", s2="${s2}":`);
    
    if (s1.length !== s2.length) {
        console.log("Độ dài khác nhau → -1");
        return;
    }
    
    const differences = [];
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) {
            differences.push(i);
            console.log(`Vị trí ${i}: '${s1[i]}' != '${s2[i]}'`);
        }
    }
    
    console.log(`Các vị trí khác nhau: [${differences.join(', ')}]`);
    console.log(`Kết quả: ${canSwitchString(s1, s2)} thao tác`);
}

// Trace chi tiết
traceExample("abcd", "badd");
traceExample("ab", "ba");
traceExample("abc", "bca");

/**
 * Chuyển đổi chuỗi sang định dạng UpperCase (PascalCase)
 * 
 * Bài toán: Cho một chuỗi chứa các từ được phân cách bởi khoảng trắng,
 * chuyển đổi thành tên hàm theo nguyên tắc UpperCase - mỗi từ có chữ cái đầu viết hoa
 * và loại bỏ tất cả khoảng trắng.
 * 
 * Thuật toán:
 * 1. Loại bỏ khoảng trắng thừa ở đầu cuối
 * 2. Tách chuỗi thành các từ (theo một hoặc nhiều khoảng trắng)
 * 3. Với mỗi từ: viết hoa chữ cái đầu, viết thường các chữ cái còn lại
 * 4. Ghép các từ lại không có khoảng cách
 * 
 * Ví dụ:
 * - "hello case" → "HelloCase"
 * - "camel case word" → "CamelCaseWord"
 * - "  multiple   spaces  " → "MultipleSpaces"
 * 
 * @param {string} string - Chuỗi đầu vào chứa các từ phân cách bởi khoảng trắng
 * @returns {string} - Chuỗi theo định dạng UpperCase (PascalCase)
 */
function upperCase(string){
    // Kiểm tra chuỗi rỗng
    if (!string || string.trim().length === 0) {
        return '';
    }
    
    return string
        .trim()
        .split(/\s+/)
        .filter(word => word.length > 0)  // Loại bỏ từ rỗng
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join('');
}
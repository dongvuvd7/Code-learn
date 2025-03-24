/**
 * Chuyển chuỗi s thành chuỗi mới bằng cách dịch các ký tự trong chuỗi s sang trái n vị trí thứ tự trong bảng chữ cái
 * @param {string} s - Chuỗi đầu vào
 * @param {number} n - Số vị trí cần dịch
 * @returns {string} - Chuỗi đã được mã hóa
 */
function encode(s, n) {
    const lowerCaseStart = 'a'.charCodeAt(0);
    const upperCaseStart = 'A'.charCodeAt(0);
    const alphabetLength = 26;

    return s.split('').map(char => {
        if (char >= 'a' && char <= 'z') {
            // Xử lý ký tự in thường
            let newCharCode = ((char.charCodeAt(0) - lowerCaseStart - n + alphabetLength) % alphabetLength) + lowerCaseStart;
            return String.fromCharCode(newCharCode);
        } else if (char >= 'A' && char <= 'Z') {
            // Xử lý ký tự in hoa
            let newCharCode = ((char.charCodeAt(0) - upperCaseStart - n + alphabetLength) % alphabetLength) + upperCaseStart;
            return String.fromCharCode(newCharCode);
        } else {
            // Giữ nguyên ký tự không phải chữ cái
            return char;
        }
    }).join('');
}
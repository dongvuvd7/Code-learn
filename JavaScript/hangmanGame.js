/**
 * BÀI TOÁN: HANGMAN GAME - TRÒ CHƠI ĐOÁN CHỮ
 *
 * Mô tả: Kiểm tra xem có thể thắng trò chơi hangman không
 *        - Có 6 mạng
 *        - Đoán đúng: chữ cái xuất hiện
 *        - Đoán sai: mất 1 mạng
 *        - Thắng: đoán đúng tất cả chữ cái trước khi hết mạng
 *
 * Ví dụ: text = "code", answers = ["c","d","y","i","e","o","n"]
 * - Đoán "c": đúng (c___)
 * - Đoán "d": đúng (c_d_)
 * - Đoán "y": sai, mạng = 5
 * - Đoán "i": sai, mạng = 4
 * - Đoán "e": đúng (c_de)
 * - Đoán "o": đúng (code) → THẮNG
 *
 * CÁCH GIẢI:
 * 1. Tạo Set chứa các ký tự duy nhất trong text
 * 2. Duyệt qua answers, kiểm tra từng lần đoán
 * 3. Nếu đúng: xóa khỏi Set
 * 4. Nếu sai: giảm mạng
 * 5. Thắng khi Set rỗng, thua khi mạng = 0
 */
function hangmanGame(text, answers) {
    // Tạo Set chứa các ký tự duy nhất cần đoán
    const remainingChars = new Set(text);

    // Số mạng ban đầu
    let lives = 6;

    // Duyệt qua từng lần đoán
    for (let guess of answers) {
        // Kiểm tra đã thắng chưa
        if (remainingChars.size === 0) {
            return true;
        }

        // Kiểm tra lần đoán có đúng không
        if (remainingChars.has(guess)) {
            // Đoán đúng: xóa ký tự khỏi Set
            remainingChars.delete(guess);
        } else {
            // Đoán sai: mất 1 mạng
            lives--;

            // Kiểm tra đã thua chưa
            if (lives === 0) {
                return false;
            }
        }
    }

    // Sau khi hết lượt đoán, kiểm tra còn ký tự nào chưa đoán
    return remainingChars.size === 0;
}

// Test cases
console.log(
    'Test 1: hangmanGame("code", ["c","d","y","i","e","o","n"]) =',
    hangmanGame("code", ["c", "d", "y", "i", "e", "o", "n"])
);
// Expected: true
// Đúng: c, d, e, o (4)
// Sai: y, i, n (3) → còn 3 mạng

console.log(
    'Test 2: hangmanGame("codelearn", ["c","m","y","i","b","q","w","o"]) =',
    hangmanGame("codelearn", ["c", "m", "y", "i", "b", "q", "w", "o"])
);
// Expected: false
// Đúng: c, o (2)
// Sai: m, y, i, b, q, w (6) → hết mạng

console.log('Test 3: hangmanGame("abc", ["a","b","c"]) =', hangmanGame("abc", ["a", "b", "c"]));
// Expected: true
// Đoán đúng hết, không sai lần nào

console.log(
    'Test 4: hangmanGame("hello", ["x","y","z","a","b","c","d"]) =',
    hangmanGame("hello", ["x", "y", "z", "a", "b", "c", "d"])
);
// Expected: false
// Sai 6 lần liên tiếp → hết mạng

console.log('Test 5: hangmanGame("aaa", ["a"]) =', hangmanGame("aaa", ["a"]));
// Expected: true
// Chỉ cần đoán "a" một lần

console.log(
    'Test 6: hangmanGame("abcdef", ["f","e","d","c","b","a"]) =',
    hangmanGame("abcdef", ["f", "e", "d", "c", "b", "a"])
);
// Expected: true
// Đoán đúng hết theo thứ tự ngược

module.exports = hangmanGame;

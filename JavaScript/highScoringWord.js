/**
 * Tìm từ có điểm số cao nhất trong chuỗi
 * 
 * Bài toán: Cho một chuỗi chứa các từ phân cách bởi khoảng trắng,
 * tìm từ có tổng điểm các ký tự cao nhất.
 * Điểm của mỗi ký tự: a=1, b=2, c=3, ..., z=26
 * 
 * Quy tắc:
 * - Nếu có nhiều từ cùng điểm cao nhất, trả về từ xuất hiện đầu tiên
 * - Chỉ chứa chữ cái thường
 * - Luôn có ít nhất một từ
 * 
 * Thuật toán: Sử dụng reduce để duyệt qua các từ và so sánh điểm
 * - Tách chuỗi thành các từ
 * - Tính điểm cho mỗi từ bằng cách cộng ASCII - 96
 * - Giữ lại từ có điểm cao nhất
 * 
 * Ví dụ:
 * - "man i need a taxi" → "taxi" (t=20+a=1+x=24+i=9 = 54)
 * - "what time are we climbing up the volcano" → "volcano"
 * 
 * @param {string} x - Chuỗi đầu vào chứa các từ phân cách bởi khoảng trắng
 * @returns {string} - Từ có điểm số cao nhất
 */
function highScoringWord(x){
    return x.split(' ').reduce((maxWord, currentWord) => {
        const getScore = word => 
            word.split('').reduce((sum, char) => sum + char.charCodeAt(0) - 96, 0);
        
        return getScore(currentWord) > getScore(maxWord) ? currentWord : maxWord;
    });
}
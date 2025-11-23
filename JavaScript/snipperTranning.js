/**
 * BÀI TOÁN: SNIPPER TRAINING - BẮN TÊN KIẾM ĐIỂM
 *
 * Mô tả: Có n bia, bia thứ i có điểm = max(0, a[i] - i)
 *        Bắn k lần (mỗi bia chỉ bắn 1 lần), tìm tổng điểm max + min
 *
 * Ví dụ: a = [3,9,3,1,0], k = 2
 * - Điểm các bia: [3-0, 9-1, 3-2, 1-3, 0-4] = [3, 8, 1, 0, 0]
 * - Điểm cao nhất: chọn 8 + 3 = 11
 * - Điểm thấp nhất: chọn 0 + 0 = 0
 * - Kết quả: 11 + 0 = 11
 *
 * CÁCH GIẢI:
 * 1. Tính điểm từng bia: score[i] = max(0, a[i] - i)
 * 2. Sắp xếp mảng điểm
 * 3. Điểm cao nhất: lấy k điểm lớn nhất
 * 4. Điểm thấp nhất: lấy k điểm nhỏ nhất
 */
function snipperTranning(a, k) {
    // Tính điểm cho từng bia
    const scores = [];
    for (let i = 0; i < a.length; i++) {
        const score = a[i] - i;
        // Điểm phải >= 0
        scores.push(score >= 0 ? score : 0);
    }

    // Sắp xếp điểm tăng dần
    scores.sort((x, y) => x - y);

    // Tính điểm thấp nhất: lấy k điểm nhỏ nhất
    let minScore = 0;
    for (let i = 0; i < k; i++) {
        minScore += scores[i];
    }

    // Tính điểm cao nhất: lấy k điểm lớn nhất
    let maxScore = 0;
    for (let i = scores.length - 1; i >= scores.length - k; i--) {
        maxScore += scores[i];
    }

    // Trả về tổng
    return maxScore + minScore;
}

// Test cases
console.log("Test 1: snipperTranning([3,9,3,1,0], 2) =", snipperTranning([3, 9, 3, 1, 0], 2));
// Expected: 11 (maxScore=11, minScore=0)

console.log("Test 2: snipperTranning([9,9,9,9], 1) =", snipperTranning([9, 9, 9, 9], 1));
// Expected: 15 (maxScore=9, minScore=6)

console.log("Test 3: snipperTranning([1,2,3,4,5], 3) =", snipperTranning([1, 2, 3, 4, 5], 3));
// Expected: (3+2+1) + (0+0+0) = 6

console.log("Test 4: snipperTranning([10,10,10], 2) =", snipperTranning([10, 10, 10], 2));
// Expected: (10+9) + (8+9) = 36

module.exports = snipperTranning;

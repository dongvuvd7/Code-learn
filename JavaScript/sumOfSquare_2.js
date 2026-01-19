/**
 * BÀI TOÁN: SUM OF SQUARE - TỔNG CHÍNH PHƯƠNG
 *
 * Định nghĩa:
 * - S là tổng chính phương nếu S = n × x² với n < x
 * - n, x là số nguyên dương
 *
 * Ví dụ:
 * - 25 = 1 × 5² (n=1, x=5, 1<5) ✓
 * - 27 = 3 × 3² (n=3, x=3, 3≮3) ✗
 * - 18 = 2 × 3² (n=2, x=3, 2<3) ✓
 * - 10: không biểu diễn được ✗
 *
 * CÁCH GIẢI:
 * - Duyệt x từ 2 đến √S
 * - Với mỗi x, kiểm tra:
 *   + S có chia hết cho x² không
 *   + Nếu có, n = S/x²
 *   + Kiểm tra n < x
 *
 * Tối ưu:
 * - n < x → S/x² < x → S < x³ → x > ∛S
 * - Vậy chỉ cần duyệt từ max(2, ⌈∛S⌉+1) đến √S
 */
function sumOfSquare(S) {
    // Trường hợp đặc biệt
    if (S === 0) {
        return true;
    }

    if (S === 1) {
        return false; // 1 = 1×1², nhưng n=1, x=1, không thỏa n<x
    }

    // Duyệt các giá trị x có thể
    const sqrtS = Math.sqrt(S);

    for (let x = 2; x <= sqrtS; x++) {
        const xSquare = x * x;

        // Kiểm tra S có chia hết cho x² không
        if (S % xSquare === 0) {
            const n = S / xSquare;

            // Kiểm tra điều kiện n < x
            if (n < x) {
                return true;
            }
        }
    }

    return false;
}

module.exports = sumOfSquare;

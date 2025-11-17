/**
 * BÀI TOÁN: MIN SUM OF TWO PRODUCTS - SỐ FROBENIUS
 *
 * Mô tả:
 * - Tìm số tự nhiên n nhỏ nhất sao cho mọi số ≥ n đều viết được dưới dạng a*x + b*y
 * - x, y là các số tự nhiên (≥ 0)
 *
 * Định lý Frobenius (Chicken McNugget Theorem):
 * - Nếu gcd(a, b) = 1, số lớn nhất KHÔNG biểu diễn được là: a*b - a - b
 * - Vậy số nhỏ nhất mà mọi số ≥ nó đều biểu diễn được là: a*b - a - b + 1
 *
 * Trường hợp đặc biệt:
 * - Nếu a = 0 và b = 0: chỉ biểu diễn được 0 → -1
 * - Nếu a = 0 hoặc b = 0: chỉ biểu diễn được bội của số còn lại → -1
 * - Nếu gcd(a, b) > 1: chỉ biểu diễn được bội của gcd → -1
 *
 * Ví dụ:
 * - a=3, b=5: gcd=1 → n = 3×5 - 3 - 5 + 1 = 8 ✓
 *   (7 không biểu diễn được, từ 8 trở đi đều được)
 * - a=3, b=7: gcd=1 → n = 3×7 - 3 - 7 + 1 = 12 ✓
 * - a=2, b=4: gcd=2 → chỉ biểu diễn được số chẵn → -1
 */
function minSumOfTwoProducts(a, b) {
    // Hàm tính GCD (Ước chung lớn nhất) với BigInt
    function gcd(x, y) {
        x = BigInt(x);
        y = BigInt(y);
        while (y !== 0n) {
            const temp = y;
            y = x % y;
            x = temp;
        }
        return x;
    }

    // Trường hợp đặc biệt: a = 0 và b = 0
    if (a === 0 && b === 0) {
        return -1;
    }

    // Trường hợp a = 0 hoặc b = 0
    if (a === 0 || b === 0) {
        return -1;
    }

    // Tính GCD
    const g = gcd(a, b);

    // Nếu gcd > 1, không thể biểu diễn mọi số
    if (g > 1n) {
        return -1;
    }

    // Áp dụng định lý Frobenius với BigInt để xử lý số lớn
    // a, b có thể lên đến 10^9, nên a*b có thể lên đến 10^18
    const aBig = BigInt(a);
    const bBig = BigInt(b);

    // Số lớn nhất không biểu diễn được: a*b - a - b
    // Số nhỏ nhất mà mọi số ≥ nó đều biểu diễn được: a*b - a - b + 1
    const result = aBig * bBig - aBig - bBig + 1n;

    // Trả về dạng Number (hoặc giữ BigInt nếu quá lớn)
    return Number(result);
}

module.exports = minSumOfTwoProducts;

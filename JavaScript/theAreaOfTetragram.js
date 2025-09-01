/**
 * Tính diện tích tứ giác nội tiếp bằng công thức Brahmagupta
 *
 * Bài toán: Cho 4 cạnh của tứ giác nội tiếp, tính diện tích
 *
 * Công thức Brahmagupta:
 * - s = (a + b + c + d) / 2 (nửa chu vi)
 * - Area = √[(s-a)(s-b)(s-c)(s-d)]
 *
 * Tứ giác nội tiếp là tứ giác có tất cả 4 đỉnh nằm trên một đường tròn.
 * Công thức này chỉ áp dụng cho tứ giác nội tiếp.
 *
 * Ví dụ:
 * - a=3.67, b=4.28, c=3.71, d=3.67
 * - s = (3.67+4.28+3.71+3.67)/2 = 7.665
 * - Area = √[(7.665-3.67)(7.665-4.28)(7.665-3.71)(7.665-3.67)]
 *        = √[3.995 × 3.385 × 3.955 × 3.995]
 *        = √213.78... ≈ 14.62
 *
 * @param {number} a - Độ dài cạnh thứ 1 (1 ≤ a ≤ 10^5)
 * @param {number} b - Độ dài cạnh thứ 2 (1 ≤ b ≤ 10^5)
 * @param {number} c - Độ dài cạnh thứ 3 (1 ≤ c ≤ 10^5)
 * @param {number} d - Độ dài cạnh thứ 4 (1 ≤ d ≤ 10^5)
 * @returns {number} - Diện tích tứ giác nội tiếp, làm tròn 2 chữ số thập phân
 */
function theAreaOfTetragram(a, b, c, d) {
    // Tính nửa chu vi (semiperimeter)
    const s = (a + b + c + d) / 2;

    // Áp dụng công thức Brahmagupta
    // Area = √[(s-a)(s-b)(s-c)(s-d)]
    const area = Math.sqrt((s - a) * (s - b) * (s - c) * (s - d));

    // Làm tròn đến 2 chữ số thập phân
    return Math.round(area * 100) / 100;
}

// Test với ví dụ từ đề bài
console.log(theAreaOfTetragram(3.67, 4.28, 3.71, 3.67)); // 14.62

// Test thêm các trường hợp khác
console.log(theAreaOfTetragram(1, 1, 1, 1)); // Hình vuông với cạnh 1
console.log(theAreaOfTetragram(3, 4, 5, 6)); // Tứ giác bất kỳ
console.log(theAreaOfTetragram(2, 2, 2, 2)); // Hình vuông với cạnh 2

// Verification: Tính chi tiết cho ví dụ đề bài
function verifyCalculation(a, b, c, d) {
    console.log(`\nVerification cho a=${a}, b=${b}, c=${c}, d=${d}:`);

    const s = (a + b + c + d) / 2;
    console.log(`Nửa chu vi s = (${a} + ${b} + ${c} + ${d}) / 2 = ${s}`);

    const term1 = s - a;
    const term2 = s - b;
    const term3 = s - c;
    const term4 = s - d;

    console.log(`s - a = ${s} - ${a} = ${term1}`);
    console.log(`s - b = ${s} - ${b} = ${term2}`);
    console.log(`s - c = ${s} - ${c} = ${term3}`);
    console.log(`s - d = ${s} - ${d} = ${term4}`);

    const product = term1 * term2 * term3 * term4;
    console.log(`Tích = ${term1} × ${term2} × ${term3} × ${term4} = ${product}`);

    const area = Math.sqrt(product);
    console.log(`Diện tích = √${product} = ${area}`);
    console.log(`Làm tròn = ${Math.round(area * 100) / 100}`);
}

// Kiểm tra chi tiết
verifyCalculation(3.67, 4.28, 3.71, 3.67);

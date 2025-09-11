/**
 * Giải bài toán tìm cặp số nguyên dương thỏa mãn 3 điều kiện
 *
 * Bài toán: Với mỗi i, tìm a[i][1] và a[i][2] sao cho:
 * - a[i][1] * a[i][2] = p[i]
 * - a[i][1] div a[i][2] = q[i] (phép chia nguyên)
 * - a[i][1] mod a[i][2] = r[i] (phép chia dư)
 *
 * Phân tích toán học:
 * Từ phép chia có dư: a[i][1] = q[i] * a[i][2] + r[i]
 * Thay vào điều kiện 1: (q[i] * a[i][2] + r[i]) * a[i][2] = p[i]
 * Triển khai: q[i] * a[i][2]² + r[i] * a[i][2] = p[i]
 * Phương trình bậc 2: q[i] * x² + r[i] * x - p[i] = 0 (với x = a[i][2])
 *
 * Giải phương trình để tìm x, sau đó tính a[i][1] = q[i] * x + r[i]
 *
 * @param {number[]} p - Mảng tích (1 ≤ p[i] ≤ 10^18)
 * @param {number[]} q - Mảng thương (0 ≤ q[i] ≤ 10^9)
 * @param {number[]} r - Mảng dư (0 ≤ r[i] ≤ 10^9)
 * @returns {number[][]} - Mảng các cặp [a[i][1], a[i][2]]
 */
function harderEasyProblem(p, q, r) {
    const result = [];
    const n = p.length;

    for (let i = 0; i < n; i++) {
        const pi = p[i];
        const qi = q[i];
        const ri = r[i];

        // Trường hợp đặc biệt: qi = 0
        if (qi === 0) {
            // Nếu q[i] = 0, thì a[i][1] = r[i] và a[i][1] * a[i][2] = p[i]
            // Do đó a[i][2] = p[i] / r[i]
            const a1 = ri;
            const a2 = pi / ri;
            result.push([a1, a2]);
            continue;
        }

        // Trường hợp tổng quát: qi > 0
        // Phương trình bậc 2: qi * x² + ri * x - pi = 0
        // Với x = a[i][2]

        const a = qi;
        const b = ri;
        const c = -pi;

        // Sử dụng công thức nghiệm của phương trình bậc 2
        // x = (-b + sqrt(b² - 4ac)) / (2a)
        // Chỉ lấy nghiệm dương

        const discriminant = b * b - 4 * a * c;
        const sqrtDiscriminant = Math.sqrt(discriminant);

        // Nghiệm dương
        const x = (-b + sqrtDiscriminant) / (2 * a);

        // a[i][2] = x (làm tròn để đảm bảo số nguyên)
        const a2 = Math.round(x);

        // a[i][1] = qi * a[i][2] + ri
        const a1 = qi * a2 + ri;

        result.push([a1, a2]);
    }

    return result;
}

// Test với ví dụ từ đề bài
const p = [36, 323, 104, 240];
const q = [4, 1, 1, 1];
const r = [0, 2, 5, 8];

console.log(harderEasyProblem(p, q, r));
// Kết quả mong đợi: [[12,3], [19,17], [13,8], [20,12]]

// Verification: Kiểm tra kết quả
function verifyResult(p, q, r, result) {
    console.log("Kiểm tra kết quả:");
    for (let i = 0; i < p.length; i++) {
        const [a1, a2] = result[i];
        const product = a1 * a2;
        const quotient = Math.floor(a1 / a2);
        const remainder = a1 % a2;

        console.log(`i=${i}: a1=${a1}, a2=${a2}`);
        console.log(`  ${a1} * ${a2} = ${product} (mong đợi ${p[i]}) ${product === p[i] ? "✓" : "✗"}`);
        console.log(`  ${a1} div ${a2} = ${quotient} (mong đợi ${q[i]}) ${quotient === q[i] ? "✓" : "✗"}`);
        console.log(`  ${a1} mod ${a2} = ${remainder} (mong đợi ${r[i]}) ${remainder === r[i] ? "✓" : "✗"}`);
        console.log();
    }
}

// Kiểm tra kết quả
const testResult = harderEasyProblem(p, q, r);
verifyResult(p, q, r, testResult);

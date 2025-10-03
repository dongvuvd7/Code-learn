/**
 * BÀI TOÁN: DARTS INSIDE CIRCULAR DARTBOARD - ĐẾM PHI TIÊU TRONG TẤM GỖ TRÒN
 *
 * Mô tả: Đếm số phi tiêu rơi vào trong tấm gỗ tròn có tâm (0,0) và bán kính r
 *
 * Điều kiện để một điểm (x,y) nằm trong hình tròn:
 * - Khoảng cách từ điểm đến tâm ≤ bán kính
 * - sqrt(x² + y²) ≤ r
 * - Để tránh lỗi floating point: x² + y² ≤ r²
 *
 * Ví dụ:
 * - points = [[-2,0], [2,0], [0,2], [0,-2]], r = 2
 *   Tất cả điểm có khoảng cách = 2 = r → 4 điểm trong/trên đường tròn
 *
 * CÁCH GIẢI:
 * 1. Với mỗi điểm (x,y) trong points
 * 2. Tính x² + y²
 * 3. So sánh với r²
 * 4. Đếm các điểm thỏa mãn x² + y² ≤ r²
 */
function dartsInsideCircularDartboard(points, r) {
    let count = 0;
    const rSquared = r * r;

    // Duyệt qua từng điểm
    for (let point of points) {
        const x = point[0];
        const y = point[1];

        // Tính khoảng cách bình phương từ điểm đến tâm (0, 0)
        const distanceSquared = x * x + y * y;

        // Kiểm tra điểm có nằm trong/trên đường tròn không
        if (distanceSquared <= rSquared) {
            count++;
        }
    }

    return count;
}

// Test với các ví dụ đề bài
console.log("=== Test với ví dụ đề bài ===");

const test1Points = [
    [-2, 0],
    [2, 0],
    [0, 2],
    [0, -2],
];
const test1R = 2;
console.log(`Test 1: points = ${JSON.stringify(test1Points)}, r = ${test1R}`);
console.log(`Result: ${dartsInsideCircularDartboard(test1Points, test1R)}`); // Kết quả mong đợi: 4

const test2Points = [
    [0, 0],
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
];
const test2R = 4;
console.log(`Test 2: points = ${JSON.stringify(test2Points)}, r = ${test2R}`);
console.log(`Result: ${dartsInsideCircularDartboard(test2Points, test2R)}`); // Kết quả mong đợi: 5

const test3Points = [
    [12, 7],
    [12, 15],
    [46, 21],
];
const test3R = 2;
console.log(`Test 3: points = ${JSON.stringify(test3Points)}, r = ${test3R}`);
console.log(`Result: ${dartsInsideCircularDartboard(test3Points, test3R)}`); // Kết quả mong đợi: 0

// Phân tích chi tiết từng test case
console.log("\n=== Phân tích chi tiết ===");

function analyzePoints(points, r) {
    console.log(`\nPhân tích với r = ${r}:`);
    const rSquared = r * r;
    console.log(`r² = ${rSquared}`);

    let count = 0;
    for (let i = 0; i < points.length; i++) {
        const [x, y] = points[i];
        const distanceSquared = x * x + y * y;
        const distance = Math.sqrt(distanceSquared);
        const isInside = distanceSquared <= rSquared;

        console.log(`  Điểm ${i + 1}: (${x}, ${y})`);
        console.log(`    Khoảng cách² = ${x}² + ${y}² = ${distanceSquared}`);
        console.log(`    Khoảng cách = ${distance.toFixed(2)}`);
        console.log(
            `    ${distanceSquared} ${isInside ? "≤" : ">"} ${rSquared} → ${isInside ? "TRONG" : "NGOÀI"} đường tròn`
        );

        if (isInside) count++;
    }

    console.log(`  → Tổng số điểm trong đường tròn: ${count}`);
    return count;
}

analyzePoints(test1Points, test1R);
analyzePoints(test2Points, test2R);
analyzePoints(test3Points, test3R);

// Thêm các test case khác
console.log("\n=== Test cases bổ sung ===");

const test4Points = [[0, 0]]; // Tâm
const test4R = 1;
console.log(`Test 4: Điểm tâm (0,0), r=1 → ${dartsInsideCircularDartboard(test4Points, test4R)}`); // 1

const test5Points = [[3, 4]]; // Điểm có khoảng cách = 5
const test5R = 5;
console.log(`Test 5: Điểm (3,4), r=5 → ${dartsInsideCircularDartboard(test5Points, test5R)}`); // 1 (đúng trên biên)

const test6Points = [[3, 4]]; // Điểm có khoảng cách = 5
const test6R = 4;
console.log(`Test 6: Điểm (3,4), r=4 → ${dartsInsideCircularDartboard(test6Points, test6R)}`); // 0 (ngoài)

const test7Points = []; // Mảng rỗng
const test7R = 10;
console.log(`Test 7: Mảng rỗng, r=10 → ${dartsInsideCircularDartboard(test7Points, test7R)}`); // 0

// Export function
module.exports = dartsInsideCircularDartboard;

/**
 * BÀI TOÁN: LCM OF ARRAY - BỘI CHUNG NHỎ NHẤT CỦA MẢNG
 *
 * Mô tả: Tìm số nhỏ nhất (ngoại trừ 0) là bội chung của tất cả phần tử trong mảng
 *
 * Công thức:
 * - LCM(a, b) = (a * b) / GCD(a, b)
 * - LCM(a, b, c) = LCM(LCM(a, b), c)
 * - LCM của mảng = LCM(arr[0], LCM(arr[1], LCM(arr[2], ...)))
 *
 * Ví dụ:
 * - [1,2,4,6] → LCM = 12 vì 12 chia hết cho tất cả
 * - [2,5,15] → LCM = 30 vì 30 chia hết cho tất cả
 *
 * CÁCH GIẢI:
 * 1. Tính GCD của 2 số
 * 2. Tính LCM của 2 số = (a * b) / GCD(a, b)
 * 3. Duyệt mảng, tích lũy LCM từng phần tử
 * 4. Áp dụng modulo để tránh overflow
 */
function lcmOfArray(arr) {
    const MOD = 1000000007n;
    let maxExps = new Map();
    for (let num of arr) {
        if (num <= 1) continue;
        let n = num;
        for (let i = 2; i * i <= n; i++) {
            if (n % i === 0) {
                let cnt = 0;
                while (n % i === 0) {
                    n /= i;
                    cnt++;
                }
                let current = maxExps.get(i) || 0;
                if (cnt > current) maxExps.set(i, cnt);
            }
        }
        if (n > 1) {
            let current = maxExps.get(n) || 0;
            if (1 > current) maxExps.set(n, 1);
        }
    }
    let res = 1n;
    for (let [p, e] of maxExps) {
        let bp = BigInt(p);
        for (let i = 0; i < e; i++) {
            res = (res * bp) % MOD;
        }
    }
    return Number(res);
}

// Test với các ví dụ đề bài
console.log("=== Test với ví dụ đề bài ===");
console.log(`LCMOfArray([1,2,4,6]) = ${LCMOfArray([1, 2, 4, 6])}`); // Expected: 12
console.log(`LCMOfArray([2,5,15]) = ${LCMOfArray([2, 5, 15])}`); // Expected: 30

// Phân tích chi tiết
console.log("\n=== Phân tích chi tiết ===");

function analyzeLCM(arr) {
    console.log(`\nPhân tích LCM của [${arr.join(", ")}]:`);

    function gcd(a, b) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    function lcm(a, b) {
        const g = gcd(a, b);
        const result = (a / g) * b;
        console.log(`  LCM(${a}, ${b}) = (${a} × ${b}) / GCD(${a}, ${b}) = (${a} × ${b}) / ${g} = ${result}`);
        return result;
    }

    let result = arr[0];
    console.log(`  Bắt đầu với: ${result}`);

    for (let i = 1; i < arr.length; i++) {
        const prev = result;
        result = lcm(result, arr[i]);
        console.log(`  → LCM hiện tại: ${result}`);
    }

    console.log(`  Kết quả cuối cùng: ${result}`);

    // Kiểm tra kết quả
    console.log(`  Kiểm tra:`);
    for (let num of arr) {
        console.log(`    ${result} ÷ ${num} = ${result / num} ${result % num === 0 ? "✓" : "✗"}`);
    }

    return result;
}

analyzeLCM([1, 2, 4, 6]);
analyzeLCM([2, 5, 15]);

// Thêm các test case khác
console.log("\n=== Test cases bổ sung ===");

console.log(`LCMOfArray([3, 4, 5]) = ${LCMOfArray([3, 4, 5])}`); // 60
console.log(`LCMOfArray([1]) = ${LCMOfArray([1])}`); // 1
console.log(`LCMOfArray([6, 8, 12]) = ${LCMOfArray([6, 8, 12])}`); // 24

// Test với số lớn
console.log(`LCMOfArray([7, 11, 13]) = ${LCMOfArray([7, 11, 13])}`); // 1001

// Phân tích một case phức tạp
console.log("\n=== Phân tích case phức tạp ===");
analyzeLCM([6, 8, 12]);

// Export function
module.exports = LCMOfArray;

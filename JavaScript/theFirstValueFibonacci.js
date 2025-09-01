/**
 * Tìm giá trị f1 = x trong dãy Fibonacci khi biết f0 = 0, n và fn
 *
 * Bài toán: Dãy Fibonacci có quy luật:
 * - f0 = 0 (đã biết)
 * - f1 = x (cần tìm)
 * - fi = fi-1 + fi-2 với i ≥ 2
 *
 * Thuật toán:
 * 1. Biểu diễn fn theo x: fn = a*x + b (với a, b là hệ số Fibonacci)
 * 2. Tính hệ số a, b bằng cách xây dựng 2 dãy song song
 * 3. Giải phương trình: a*x + b = fn → x = (fn - b) / a
 *
 * Ví dụ n=6, fn=16:
 * - f0=0, f1=x, f2=x, f3=2x, f4=3x, f5=5x, f6=8x
 * - 8x = 16 → x = 2
 *
 * @param {number} n - Vị trí trong dãy Fibonacci (2 ≤ n ≤ 50)
 * @param {number} fn - Giá trị tại vị trí n (0 ≤ fn ≤ 10^18)
 * @returns {number} - Giá trị x = f1 cần tìm
 */
function theFirstValueFibonacci(n, fn) {
    // Trường hợp đặc biệt
    if (n === 1) return fn; // f1 = x = fn
    if (fn === 0) return 0; // Nếu fn = 0 thì x = 0

    // Tính hệ số a và b sao cho fn = a*x + b
    // Sử dụng 2 dãy song song:
    // - Dãy A: hệ số của x (a0=0, a1=1, ai=ai-1+ai-2)
    // - Dãy B: số hạng tự do (b0=0, b1=0, bi=bi-1+bi-2)

    let a_prev2 = 0,
        a_prev1 = 1; // a0 = 0, a1 = 1
    let b_prev2 = 0,
        b_prev1 = 0; // b0 = 0, b1 = 0

    // Tính hệ số tại vị trí n
    for (let i = 2; i <= n; i++) {
        const a_current = a_prev1 + a_prev2;
        const b_current = b_prev1 + b_prev2;

        // Cập nhật cho lần lặp tiếp theo
        a_prev2 = a_prev1;
        a_prev1 = a_current;
        b_prev2 = b_prev1;
        b_prev1 = b_current;
    }

    const a = a_prev1; // Hệ số của x
    const b = b_prev1; // Số hạng tự do

    // Giải phương trình: a*x + b = fn
    // x = (fn - b) / a
    return (fn - b) / a;
}

// Test với ví dụ từ đề bài
console.log(theFirstValueFibonacci(6, 16)); // 2

// Verification: Kiểm tra kết quả
function verifyFibonacci(n, x, expectedFn) {
    let f0 = 0,
        f1 = x;

    if (n === 0) return f0 === expectedFn;
    if (n === 1) return f1 === expectedFn;

    for (let i = 2; i <= n; i++) {
        const fi = f1 + f0;
        f0 = f1;
        f1 = fi;
    }

    console.log(`Với x=${x}, f${n}=${f1}, mong đợi=${expectedFn}`);
    return f1 === expectedFn;
}

// Kiểm tra kết quả
verifyFibonacci(6, 2, 16); // Với x=2, f6=16, mong đợi=16

// Test thêm các trường hợp khác
console.log(theFirstValueFibonacci(2, 5)); // f2 = x → x = 5
console.log(theFirstValueFibonacci(3, 10)); // f3 = 2x → x = 5
console.log(theFirstValueFibonacci(4, 15)); // f4 = 3x → x = 5

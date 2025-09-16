/**
 * Tính cal(k) = f(1) + f(2) + f(3) + ... + f(k) với f(n) = 2*n - 1
 *
 * Bài toán: Tìm tổng dãy số lẻ đầu tiên
 * f(1) = 2*1 - 1 = 1
 * f(2) = 2*2 - 1 = 3
 * f(3) = 2*3 - 1 = 5
 * ...
 * f(k) = 2*k - 1
 *
 * Phân tích toán học:
 * cal(k) = Σ(i=1 to k) f(i)
 *        = Σ(i=1 to k) (2*i - 1)
 *        = 2*Σ(i=1 to k) i - Σ(i=1 to k) 1
 *        = 2 * k*(k+1)/2 - k
 *        = k*(k+1) - k
 *        = k² + k - k
 *        = k²
 *
 * Vậy cal(k) = k² mod (10^9 + 7)
 *
 * Ví dụ:
 * - k=2: cal(2) = 2² = 4 ✓
 * - k=3: cal(3) = 3² = 9 (f(1)+f(2)+f(3) = 1+3+5 = 9) ✓
 *
 * @param {number} k - Số nguyên dương (1 ≤ k ≤ 10^9)
 * @returns {number} - Kết quả cal(k) mod (10^9 + 7)
 */
function calNumber(k) {
    const MOD = 1000000007;

    // Do k có thể lên đến 10^9, k² có thể overflow
    // Cần sử dụng BigInt hoặc modular arithmetic

    // Cách 1: Sử dụng BigInt (đơn giản nhất)
    const result = (BigInt(k) * BigInt(k)) % BigInt(MOD);
    return Number(result);
}

// Cách 2: Sử dụng modular arithmetic để tránh BigInt
function calNumberAlt(k) {
    const MOD = 1000000007;

    // Tính k² mod MOD một cách an toàn
    // (k mod MOD) * (k mod MOD) mod MOD
    const kMod = k % MOD;
    return (kMod * kMod) % MOD;
}

// Test với ví dụ từ đề bài
console.log(calNumber(2)); // 4

// Verification: Kiểm tra bằng cách tính trực tiếp
function verifyCalNumber(k) {
    const MOD = 1000000007;
    let sum = 0;

    for (let i = 1; i <= k && i <= 1000; i++) {
        // Giới hạn để tránh chậm
        const fi = 2 * i - 1;
        sum = (sum + fi) % MOD;
    }

    console.log(`Verification k=${k}: trực tiếp=${sum}, công thức=${calNumber(k)}`);
    return sum;
}

// Test với các giá trị nhỏ
console.log(calNumber(1)); // 1 (f(1) = 1)
console.log(calNumber(3)); // 9 (f(1)+f(2)+f(3) = 1+3+5 = 9)
console.log(calNumber(4)); // 16 (f(1)+f(2)+f(3)+f(4) = 1+3+5+7 = 16)
console.log(calNumber(5)); // 25

// Verification với giá trị nhỏ
verifyCalNumber(5);

// Test với giá trị lớn
console.log(calNumber(1000000)); // Test với 10^6
console.log(calNumber(1000000000)); // Test với 10^9

// So sánh 2 cách implementation
console.log("Cách 1 (BigInt):", calNumber(1000000000));
console.log("Cách 2 (Modular):", calNumberAlt(1000000000));

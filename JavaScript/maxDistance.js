const MOD = 2019201997n;
const A = 2019201913n;
const B = 2019201949n;

function solveTestCase(n, k) {
    // Tính M = (A * (k-1) + B * n) mod MOD
    const kMinus1 = BigInt(k - 1);
    const bn = BigInt(n);
    const result = (A * kMinus1 + B * bn) % MOD;
    return Number(result);
}

function cowDistribution(testCases) {
    const results = [];
    for (const [n, k] of testCases) {
        results.push(solveTestCase(n, k));
    }
    return results;
}

// Hàm để chạy và in kết quả
function solve(input) {
    // Giả định input là mảng các cặp [n, k]
    const results = cowDistribution(input);
    return results;
}

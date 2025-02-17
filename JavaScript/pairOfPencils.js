/**
 * Cho các số từ 1 đến n, tìm số cặp số (a,b) sao cho a + b = k
 * (a, b) và (b, a) được coi là một cặp số duy nhất
 * Không tính cặp số (k, 0) (0, k)
 */
function pairOfPencils(n, k) {
    // a phải nhỏ hơn b, do đó a < k/2
    let maxA = Math.min(n, Math.floor((k - 1) / 2));
    let minA = Math.max(1, k - n);

    // Số lượng cặp (a, b) là số lượng giá trị của a từ minA đến maxA
    if (maxA < minA) {
        return 0;
    }

    return maxA - minA + 1;

}

console.log(pairOfPencils(100000000000000,100000000000000 - 2));
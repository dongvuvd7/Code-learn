function multipleOfThreeAndFile(n) {
    // Chuyển n thành BigInt
    n = BigInt(n);
    
    // Tính số lượng bội số
    const n3 = n / 3n;    // số bội của 3
    const n5 = n / 5n;    // số bội của 5
    const n15 = n / 15n;  // số bội của 15 (bị đếm trùng)
    
    // Tính tổng bằng công thức dãy số cộng: (n * (n + 1)) / 2 * bước nhảy
    const sum3 = 3n * n3 * (n3 + 1n) / 2n;    // tổng bội của 3
    const sum5 = 5n * n5 * (n5 + 1n) / 2n;    // tổng bội của 5
    const sum15 = 15n * n15 * (n15 + 1n) / 2n; // tổng bội của 15
    
    // Tổng cuối cùng = tổng bội 3 + tổng bội 5 - tổng bội 15 (tránh đếm trùng)
    const total = sum3 + sum5 - sum15;
    
    // Lấy 10 số cuối
    const resultStr = total.toString();
    return resultStr.slice(-10);
}
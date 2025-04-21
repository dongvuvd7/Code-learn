function sumOfNotDivisibleByK(n, k) {
    // Chuyển đổi input thành BigInt để xử lý các số lớn
    let nBig = BigInt(n);
    let kBig = BigInt(k);
    
    // Tính tổng các số từ 0 đến n
    const sumAll = (nBig * (nBig + 1n)) / 2n;
    
    // Tìm số lớn nhất chia hết cho k trong khoảng [0, n]
    const lastMultiple = (nBig / kBig) * kBig;
    
    // Số lượng số chia hết cho k trong đoạn [0, n]
    const countDivisible = lastMultiple / kBig + 1n;
    
    // Tổng các số chia hết cho k từ 0 đến n
    // 0 + k + 2k + ... + lastMultiple = k * (0 + 1 + 2 + ... + (lastMultiple/k))
    const sumDivisible = kBig * (countDivisible - 1n) * countDivisible / 2n;
    
    // Kết quả là tổng tất cả các số trừ đi tổng các số chia hết cho k
    return +(sumAll - sumDivisible).toString();
}
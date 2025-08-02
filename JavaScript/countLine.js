function countLine(n, m) {
    // Nếu n < 2, không thể tạo đường thẳng
    if (n < 2) return 0;
    
    // Nếu m < 3, không có điểm nào thẳng hàng, trả về C(n, 2)
    if (m < 3) return (n * (n - 1)) / 2;
    
    // Tính theo công thức: [n(n-1) - m(m-1) + 2] / 2
    // Sử dụng BigInt để tránh tràn số với n, m lớn
    let result = (BigInt(n) * BigInt(n - 1) - BigInt(m) * BigInt(m - 1) + 2n) / 2n;
    return Number(result);
}
function squaresOnTheBoard(n){
    // Công thức tính tổng bình phương các số từ 1 đến n
    // S = n(n+1)(2n+1)/6
    
    // Đối với các giá trị n lớn, sử dụng BigInt để tránh tràn số
    if (n > 1000) {
        const nBig = BigInt(n);
        return (nBig * (nBig + 1n) * (2n * nBig + 1n) / 6n).toString();
    }
    
    return Math.floor(n * (n + 1) * (2 * n + 1) / 6);
}
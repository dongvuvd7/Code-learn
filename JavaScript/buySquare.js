/**
 * Tìm số mảnh đất hình vuông tối thiểu cần mua với số tiền cho trước
 * 
 * Bài toán: Mảnh đất cạnh a ha có giá a² nghìn đô.
 * Tìm cách mua ít mảnh đất nhất để tiêu hết n nghìn đô.
 * 
 * Bản chất: Phân tích n thành tổng các số chính phương với số hạng ít nhất
 * (Square Sum Problem - dựa trên định lý Lagrange's Four Square)
 * 
 * Thuật toán tối ưu:
 * 1. Kiểm tra n có phải số chính phương → 1 mảnh đất
 * 2. Kiểm tra n có phải tổng 2 số chính phương → 2 mảnh đất  
 * 3. Áp dụng định lý Legendre: số có dạng 4^a(8b+7) cần 4 số chính phương
 * 4. Trường hợp còn lại → 3 mảnh đất
 * 
 * Ví dụ: n = 344 = 18² + 4² + 2² → 3 mảnh đất
 * 
 * @param {number} n - Số tiền có (1 ≤ n ≤ 60000)
 * @returns {number} - Số mảnh đất tối thiểu cần mua
 */
function buySquare(n) {
    // Kiểm tra số chính phương hoàn hảo
    const sqrt = Math.floor(Math.sqrt(n));
    if (sqrt * sqrt === n) return 1;

    // Kiểm tra tổng 2 số chính phương
    for (let i = 1; i * i <= n; i++) {
        const remaining = n - i * i;
        const sqrt2 = Math.floor(Math.sqrt(remaining));
        if (sqrt2 * sqrt2 === remaining) return 2;
    }

    // Kiểm tra tổng 3 số chính phương (theo định lý Legendre)
    // Một số không thể biểu diễn bằng 3 số chính phương khi có dạng 4^a(8b+7)
    let temp = n;
    while (temp % 4 === 0) temp /= 4;
    if (temp % 8 === 7) return 4;

    return 3; // Trường hợp còn lại
}

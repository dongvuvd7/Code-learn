function minLineIntersection(n) {
    // Nếu n bằng 0, không cần đường thẳng nào
    if (n === 0) return 0;
    
    // Chuyển đổi n thành BigInt để xử lý chính xác với số lớn
    let nBig = BigInt(n);
    
    // Ước lượng ban đầu để giới hạn khoảng tìm kiếm
    // L ≈ sqrt(2n) để L(L-1)/2 ≈ n
    let estL = Math.floor(Math.sqrt(Number(nBig) * 2));
    
    // Tìm kiếm nhị phân để tìm L chính xác
    let left = 0;
    let right = estL * 2; // Đảm bảo phạm vi đủ lớn
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let midBig = BigInt(mid);
        let intersections = midBig * (midBig - BigInt(1)) / BigInt(2);
        
        if (intersections < nBig) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return left;
}
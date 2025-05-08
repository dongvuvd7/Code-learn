function theBestCar(a, b) {
    let maxDistancePerLiter = 0;
    let bestCarIndex = 0;
    
    // Duyệt qua từng xe
    for (let i = 0; i < a.length; i++) {
        // Tính quãng đường đi được trên mỗi lít xăng
        let distancePerLiter = b[i] / a[i];
        
        // Nếu quãng đường trên mỗi lít lớn hơn giá trị tối đa hiện tại
        // hoặc bằng nhưng index nhỏ hơn (ưu tiên xe khai báo trước)
        if (distancePerLiter > maxDistancePerLiter) {
            maxDistancePerLiter = distancePerLiter;
            bestCarIndex = i;
        }
    }
    
    return bestCarIndex;
}
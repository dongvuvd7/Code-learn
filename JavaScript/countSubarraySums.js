function countSubarraySums(n, arr) {
    // Sử dụng bảng băm để đếm số lần xuất hiện của các tổng tiền tố
    const prefixSumCount = new Map();
    
    // Tổng tiền tố hiện tại
    let currentSum = 0;
    
    // Biến đếm kết quả
    let count = 0;
    
    // Trường hợp tổng tiền tố bằng 0
    prefixSumCount.set(0, 1);
    
    // Duyệt qua từng phần tử trong mảng
    for (let i = 0; i < arr.length; i++) {
        // Cập nhật tổng tiền tố
        currentSum += arr[i];
        
        // Kiểm tra xem có tồn tại tổng tiền tố (currentSum - n) hay không
        // Nếu có, tức là có một đoạn con từ vị trí nào đó đến i có tổng bằng n
        if (prefixSumCount.has(currentSum - n)) {
            count += prefixSumCount.get(currentSum - n);
        }
        
        // Cập nhật số lần xuất hiện của tổng tiền tố hiện tại
        if (prefixSumCount.has(currentSum)) {
            prefixSumCount.set(currentSum, prefixSumCount.get(currentSum) + 1);
        } else {
            prefixSumCount.set(currentSum, 1);
        }
    }
    
    return count;
}
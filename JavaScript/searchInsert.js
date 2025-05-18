function searchInsert(nums, target) {
    // Khởi tạo các biến đánh dấu vị trí đầu và cuối của mảng
    let left = 0;
    let right = nums.length - 1;
    
    // Tìm kiếm nhị phân
    while (left <= right) {
        // Tính vị trí giữa
        const mid = Math.floor((left + right) / 2);
        
        // Nếu tìm thấy target, trả về vị trí
        if (nums[mid] === target) {
            return mid;
        }
        // Nếu giá trị ở giữa nhỏ hơn target, tìm ở nửa sau
        else if (nums[mid] < target) {
            left = mid + 1;
        }
        // Nếu giá trị ở giữa lớn hơn target, tìm ở nửa trước
        else {
            right = mid - 1;
        }
    }
    
    // Khi kết thúc vòng lặp mà không tìm thấy,
    // left sẽ là vị trí cần chèn (vị trí duy nhất còn lại)
    return left;
}
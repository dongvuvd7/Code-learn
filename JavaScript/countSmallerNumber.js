function countSmallerNumber(nums){
    const n = nums.length;
    
    // Tạo mảng chứa các phần tử và vị trí gốc của chúng
    const indexed = nums.map((val, idx) => ({ val, idx }));
    
    // Sắp xếp mảng theo giá trị tăng dần
    indexed.sort((a, b) => a.val - b.val);
    
    // Tạo mảng kết quả
    const result = new Array(n).fill(0);
    
    // Đếm số lượng phần tử nhỏ hơn cho mỗi vị trí
    for (let i = 0; i < n; i++) {
        let count = i; // Số phần tử nhỏ hơn indexed[i].val
        
        // Điều chỉnh count nếu có phần tử trùng giá trị
        let j = i - 1;
        while (j >= 0 && indexed[j].val === indexed[i].val) {
            count--;
            j--;
        }
        
        result[indexed[i].idx] = count;
    }
    
    return result;
}
function productExceptSelf(nums) {
    const n = nums.length;
    const result = new Array(n);
    
    // Đếm số lượng số 0 và tính tích các số khác 0
    let zeroCount = 0;
    let productWithoutZeros = 1;
    
    for (let i = 0; i < n; i++) {
        if (nums[i] === 0) {
            zeroCount++;
        } else {
            productWithoutZeros *= nums[i];
        }
    }
    
    for (let i = 0; i < n; i++) {
        if (zeroCount > 1) {
            // Nếu có hơn 1 số 0, tích luôn bằng 0
            result[i] = 0;
        } else if (zeroCount === 1) {
            // Nếu có đúng 1 số 0, chỉ vị trí số 0 mới có tích khác 0
            result[i] = nums[i] === 0 ? productWithoutZeros : 0;
        } else {
            // Không có số 0 nào
            result[i] = productWithoutZeros / nums[i];
        }
    }
    
    return result;
}

console.log(productExceptSelf([1, 2, 3, 4])); // [24, 12, 8, 6]
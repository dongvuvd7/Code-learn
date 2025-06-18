function summaryRanges(a){
    // Nếu mảng rỗng, trả về mảng rỗng
    if (a.length === 0) {
        return [];
    }
    
    const result = [];
    let start = 0; // Chỉ số bắt đầu của dải hiện tại
    
    for (let i = 1; i <= a.length; i++) {
        // Kiểm tra xem có phải cuối dải hay không
        // (i === a.length hoặc a[i] không liên tiếp với a[i-1])
        if (i === a.length || a[i] !== a[i - 1] + 1) {
            // Kết thúc một dải
            if (start === i - 1) {
                // Dải chỉ có 1 phần tử
                result.push(a[start].toString());
            } else {
                // Dải có nhiều hơn 1 phần tử
                result.push(`${a[start]}->${a[i - 1]}`);
            }
            // Bắt đầu dải mới
            start = i;
        }
    }
    
    return result;
}
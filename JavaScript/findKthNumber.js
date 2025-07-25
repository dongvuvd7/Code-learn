function findKthNumber(n) {
    const selected = new Set();
    const result = [];
    let k = 1;
    
    while (result.length < n) {
        let count = 0;
        let multiplier = 1;
        
        // Chọn k số chia hết cho k mà chưa được chọn
        while (count < k && result.length < n) {
            let current = k * multiplier;
            
            if (!selected.has(current)) {
                selected.add(current);
                result.push(current);
                count++;
            }
            multiplier++;
        }
        
        k++;
    }
    
    return result[n - 1];
}
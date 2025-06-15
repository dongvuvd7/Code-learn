function verifyAlienDictionary(words, order) {
    // Tạo ánh xạ thứ tự từ order
    const charOrder = new Map();
    for (let i = 0; i < order.length; i++) {
        charOrder.set(order[i], i);
    }
    
    // So sánh từng cặp từ liền kề
    for (let i = 0; i < words.length - 1; i++) {
        const word1 = words[i];
        const word2 = words[i + 1];
        
        // So sánh từng ký tự
        for (let j = 0; j < word1.length; j++) {
            // Nếu word2 ngắn hơn và hết ký tự
            if (j >= word2.length) return false; // word1 dài hơn, sai thứ tự
            
            // Nếu ký tự khác nhau
            if (word1[j] !== word2[j]) {
                // Kiểm tra thứ tự ký tự
                if (charOrder.get(word1[j]) > charOrder.get(word2[j])) {
                    return false; // Sai thứ tự
                }
                break; // Thoát sau khi tìm ký tự khác nhau
            }
        }
    }
    
    return true; // Tất cả cặp đúng thứ tự
}
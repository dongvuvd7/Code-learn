function fermatLastTheorem(n) {
    // Trường hợp n = 0: a^0 + b^0 = c^0 tức là 1 + 1 = 1, không thỏa mãn
    if (n === 0) {
        return [-1, -1, -1];
    }
    
    // Trường hợp n = 1: a + b = c
    if (n === 1) {
        return [1, 2, 3]; // a=1, b=1, c=2 là bộ nhỏ nhất
    }
    
    // Trường hợp n = 2: Pythagorean triple
    if (n === 2) {
        return [3, 4, 5]; // Bộ ba Pythagorean nhỏ nhất là (3,4,5)
    }
    
    // Trường hợp n > 2: Theo định lý Fermat, không có nghiệm
    return [-1, -1, -1];
}
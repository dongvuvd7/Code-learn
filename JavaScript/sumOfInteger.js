function sumOfInteger(n, x, y) {
    // Chuyển x và y thành string để dễ so sánh
    const xStr = x.toString();
    const yStr = y.toString();
    
    let sum = 0;
    
    for (let i = 1; i <= n; i++) {
        const iStr = i.toString();
        if (!iStr.includes(xStr) && !iStr.includes(yStr)) {
            sum += i;
        }
    }
    
    return sum;
}
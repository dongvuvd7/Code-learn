function sumOfSquare(s) {
    if (s == 0) return true;
    if (s < 9) return false;
    for (let i = 1; i <= s; i++) {
        if (s % i == 0) {
            let h = s / i;
            let j = Math.sqrt(h);
            if (j * j == h && j > i) {
                return true;
            }
        }
    }
    return false;
}
// Kiểm tra
console.log(sumOfSquare(27)); // true

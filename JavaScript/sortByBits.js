function sortByBits(array) {
    // Hàm đếm số bit 1 của một số
    function countBits(num) {
        let count = 0;
        while (num > 0) {
            count += num & 1;
            num >>= 1;
        }
        return count;
    }

    // Sắp xếp mảng theo số bit 1, nếu số bit 1 bằng nhau thì so sánh giá trị của phần tử
    return array.sort((a, b) => {
        const countA = countBits(a);
        const countB = countBits(b);
        if (countA === countB) {
            return a - b;
        }
        return countA - countB;
    });
}
/**
 * Tìm số may mắn thứ n (số chỉ chứa chữ số 4 và 7)
 *
 * Bài toán: Số may mắn chỉ chứa các chữ số 4 và 7
 * Dãy số may mắn: 4, 7, 44, 47, 74, 77, 444, 447, 474, 477, 744, 747, 774, 777, ...
 *
 * Thuật toán: Sử dụng tương tự hệ nhị phân
 * - Coi 4 như bit 0, 7 như bit 1
 * - Với n số may mắn có k chữ số: từ 2^(k-1) đến 2^k - 1
 * - Chuyển đổi biểu diễn nhị phân thành chuỗi 4 và 7
 *
 * Ví dụ:
 * - n=1: số đầu tiên có 1 chữ số → "4"
 * - n=2: số thứ 2 có 1 chữ số → "7"
 * - n=3: số đầu tiên có 2 chữ số → "44"
 * - n=4: số thứ 2 có 2 chữ số → "47"
 *
 * @param {number} n - Thứ tự số may mắn cần tìm (1 ≤ n ≤ 100)
 * @returns {number} - Số may mắn thứ n
 */
function luckyNumber(n) {
    // Tìm độ dài của số may mắn thứ n
    let length = 1;
    let count = 0;
    let totalPrevious = 0;

    // Với độ dài k, có 2^k số may mắn
    while (count + Math.pow(2, length) < n) {
        count += Math.pow(2, length);
        length++;
    }

    // Vị trí của số trong nhóm có cùng độ dài
    const position = n - count - 1; // -1 vì index bắt đầu từ 0

    // Chuyển đổi position thành biểu diễn nhị phân với độ dài length
    let binaryStr = position.toString(2).padStart(length, "0");

    // Chuyển đổi 0→4, 1→7
    let result = "";
    for (let char of binaryStr) {
        result += char === "0" ? "4" : "7";
    }

    return parseInt(result);
}

// Cách 2: Generate tất cả số may mắn theo thứ tự (đơn giản hơn)
function luckyNumberAlt(n) {
    const luckyNumbers = [];

    // Generate số may mắn theo từng độ dài
    for (let length = 1; length <= 7; length++) {
        // 7 chữ số đủ cho n ≤ 100
        // Với độ dài length, có 2^length số may mắn
        for (let i = 0; i < Math.pow(2, length); i++) {
            // Chuyển i thành biểu diễn nhị phân với độ dài length
            const binaryStr = i.toString(2).padStart(length, "0");

            // Chuyển đổi 0→4, 1→7
            let luckyNum = "";
            for (let bit of binaryStr) {
                luckyNum += bit === "0" ? "4" : "7";
            }

            luckyNumbers.push(parseInt(luckyNum));

            // Nếu đã đủ 100 số đầu tiên thì dừng
            if (luckyNumbers.length >= 100) break;
        }

        if (luckyNumbers.length >= 100) break;
    }

    return luckyNumbers[n - 1]; // n-1 vì mảng bắt đầu từ index 0
}

// Test với các ví dụ từ đề bài
console.log(luckyNumber(1)); // 4
console.log(luckyNumber(3)); // 44

// Test thêm các trường hợp
console.log(luckyNumber(2)); // 7
console.log(luckyNumber(4)); // 47
console.log(luckyNumber(5)); // 74
console.log(luckyNumber(6)); // 77

// Hiển thị 20 số may mắn đầu tiên để kiểm tra
console.log("\n20 số may mắn đầu tiên:");
for (let i = 1; i <= 20; i++) {
    console.log(`${i}: ${luckyNumber(i)}`);
}

// So sánh 2 cách implementation
console.log("\nSo sánh 2 cách:");
for (let i = 1; i <= 10; i++) {
    const method1 = luckyNumber(i);
    const method2 = luckyNumberAlt(i);
    console.log(`n=${i}: Method1=${method1}, Method2=${method2}, Match=${method1 === method2}`);
}

/**
 * BÀI TOÁN: GCD ARRAY - ƯỚC CHUNG LỚN NHẤT CỦA MẢNG
 *
 * Mục tiêu: Tìm GCD (Greatest Common Divisor) của tất cả phần tử trong mảng
 *
 * Tính chất: GCD(a, b, c) = GCD(GCD(a, b), c)
 *
 * Ví dụ:
 * - [6,9,15,27] → GCD = 3
 * - [100,45] → GCD = 5
 *
 * CÁCH GIẢI:
 * 1. Tính GCD của 2 số đầu tiên
 * 2. Tích lũy GCD với các phần tử tiếp theo
 * 3. Xử lý trường hợp có số 0 trong mảng
 */
function gcdArray(arr) {
    if (arr.length === 0) return 0;

    // Hàm tính GCD của 2 số bằng thuật toán Euclid
    function gcd(a, b) {
        // Xử lý trường hợp có số 0
        if (a === 0) return b;
        if (b === 0) return a;

        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    // Tính GCD của toàn bộ mảng
    let result = arr[0];

    for (let i = 1; i < arr.length; i++) {
        result = gcd(result, arr[i]);

        // Tối ưu: nếu GCD = 1 thì không cần tính tiếp
        if (result === 1) {
            break;
        }
    }

    return result;
}

module.exports = gcdArray;

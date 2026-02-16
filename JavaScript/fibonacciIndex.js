/**
 * Bài toán: Tìm chỉ số của số Fibonacci đầu tiên có n chữ số
 *
 * Khái quát vấn đề:
 * - Dãy Fibonacci: F0 = 0, F1 = 1, Fi = Fi-1 + Fi-2 (với i > 1)
 * - Dãy: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
 * - Cần tìm chỉ số đầu tiên của số Fibonacci có đúng n chữ số
 *
 * Hướng giải:
 * 1. Khởi tạo F0 = 0, F1 = 1
 * 2. Kiểm tra xem F0 hoặc F1 có n chữ số không, nếu có thì trả về index tương ứng
 * 3. Tính các số Fibonacci tiếp theo bằng công thức Fi = Fi-1 + Fi-2
 * 4. Kiểm tra số chữ số của mỗi số Fibonacci bằng cách chuyển sang chuỗi và đếm độ dài
 * 5. Trả về chỉ số khi tìm được số Fibonacci đầu tiên có đúng n chữ số
 *
 * Ví dụ:
 * - fibonacciIndex(1) = 0  (F0 = 0 có 1 chữ số)
 * - fibonacciIndex(2) = 7  (F7 = 13 là số đầu tiên có 2 chữ số)
 * - fibonacciIndex(3) = 12 (F12 = 144 là số đầu tiên có 3 chữ số)
 * - fibonacciIndex(4) = 17 (F17 = 1597 là số đầu tiên có 4 chữ số)
 */
function fibonacciIndex(n) {
    let f0 = 0;
    let f1 = 1;

    // Check if F0 has n digits
    if (f0.toString().length === n) {
        return 0;
    }

    // Check if F1 has n digits
    if (f1.toString().length === n) {
        return 1;
    }

    // Generate Fibonacci numbers until we find one with n digits
    let index = 2;
    while (true) {
        let fi = f0 + f1;
        if (fi.toString().length === n) {
            return index;
        }
        f0 = f1;
        f1 = fi;
        index++;
    }
}

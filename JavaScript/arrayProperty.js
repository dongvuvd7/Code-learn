/**
 * BÀI TOÁN: ARRAY PROPERTY - XÁC ĐỊNH TÍNH CHẤT DÃY SỐ
 *
 * Mô tả: Xác định dãy số có tính chất gì
 *        - Linear (Tuyến tính): a[k+1] = a[k] + d (công sai d)
 *        - Exponential (Lũy thừa): a[k+1] = a[k] × r (công bội r)
 *        - Undetermined: Không xác định được
 *
 * Ví dụ:
 * - [1,3,5,7,9] → Linear, d = 2
 * - [2,4,8,16,32] → Exponential, r = 2
 * - [5,-6,3,-8] → Undetermined
 *
 * CÁCH GIẢI:
 * 1. Kiểm tra Linear: tất cả hiệu a[i+1] - a[i] bằng nhau
 * 2. Kiểm tra Exponential: tất cả thương a[i+1] / a[i] bằng nhau
 * 3. Xử lý công bội phân số (gcd để tối giản)
 */
function arrayProperty(a) {
    // Dãy có ít hơn 2 phần tử không xác định được
    if (a.length < 2) {
        return "Undetermined";
    }

    // Hàm tính GCD
    function gcd(x, y) {
        x = Math.abs(x);
        y = Math.abs(y);
        while (y !== 0) {
            let temp = y;
            y = x % y;
            x = temp;
        }
        return x;
    }

    // Kiểm tra tính tuyến tính (Linear)
    function checkLinear() {
        const diff = a[1] - a[0];

        for (let i = 1; i < a.length - 1; i++) {
            if (a[i + 1] - a[i] !== diff) {
                return null;
            }
        }

        return diff;
    }

    // Kiểm tra tính lũy thừa (Exponential)
    function checkExponential() {
        // Kiểm tra có số 0 không (trừ trường hợp đặc biệt)
        for (let i = 0; i < a.length - 1; i++) {
            if (a[i] === 0) {
                // Nếu a[i] = 0 và a[i+1] != 0 thì không thể là exponential
                if (a[i + 1] !== 0) {
                    return null;
                }
            }
        }

        // Nếu phần tử đầu tiên là 0
        if (a[0] === 0) {
            // Kiểm tra tất cả có phải 0 không
            for (let i = 0; i < a.length; i++) {
                if (a[i] !== 0) {
                    return null;
                }
            }
            // Dãy toàn 0: không xác định được công bội
            return null;
        }

        // Tính công bội từ 2 phần tử đầu
        const numerator = a[1];
        const denominator = a[0];

        // Kiểm tra tất cả tỷ lệ có bằng nhau không
        for (let i = 1; i < a.length - 1; i++) {
            if (a[i] === 0) {
                // Nếu a[i] = 0 thì a[i+1] cũng phải = 0
                if (a[i + 1] !== 0) {
                    return null;
                }
                continue;
            }

            // a[i+1]/a[i] phải bằng a[1]/a[0]
            // => a[i+1] * a[0] = a[1] * a[i]
            if (a[i + 1] * a[0] !== a[1] * a[i]) {
                return null;
            }
        }

        // Tính công bội và tối giản phân số
        const g = gcd(numerator, denominator);
        let num = numerator / g;
        let den = denominator / g;

        // Đưa dấu âm lên tử số (mẫu số luôn dương)
        if (den < 0) {
            num = -num;
            den = -den;
        }

        // Nếu mẫu số = 1, trả về số nguyên
        if (den === 1) {
            return num.toString();
        }

        return `${num}/${den}`;
    }

    // Kiểm tra Linear trước
    const linearDiff = checkLinear();
    if (linearDiff !== null) {
        return `Linear - Arithmetic Difference = ${linearDiff}`;
    }

    // Kiểm tra Exponential
    const expRatio = checkExponential();
    if (expRatio !== null) {
        return `Exponential - Geometric Difference = ${expRatio}`;
    }

    // Không xác định được
    return "Undetermined";
}

// Test cases
console.log("Test 1:", arrayProperty([1, 3, 5, 7, 9, 11]));
// Expected: "Linear - Arithmetic Difference = 2"

console.log("Test 2:", arrayProperty([2, 4, 8, 16, 32]));
// Expected: "Exponential - Geometric Difference = 2"

console.log("Test 3:", arrayProperty([5, -6, 3, -8]));
// Expected: "Undetermined"

console.log("Test 5:", arrayProperty([8, 4, 2, 1]));
// Expected: "Exponential - Geometric Difference = 1/2"

console.log("Test 6:", arrayProperty([1, 1, 1, 1]));
// Expected: "Linear - Arithmetic Difference = 0"

console.log("Test 7:", arrayProperty([0, 0, 0]));
// Expected: "Linear - Arithmetic Difference = 0"

console.log("Test 8:", arrayProperty([3, -6, 12, -24]));
// Expected: "Exponential - Geometric Difference = -2"

console.log("Test 9:", arrayProperty([100]));
// Expected: "Undetermined"

console.log("Test 10:", arrayProperty([-5, -3, -1, 1, 3]));
// Expected: "Linear - Arithmetic Difference = 2"

// Test cases với số 0
console.log("Test 11:", arrayProperty([0, 1, 2, 3]));
// Expected: "Linear - Arithmetic Difference = 1"

console.log("Test 12:", arrayProperty([1, 0, 0, 0]));
// Expected: "Undetermined" (không thể là exponential vì 0/1 khác 0/0)

console.log("Test 13:", arrayProperty([2, 0, 0, 0]));
// Expected: "Undetermined"

// Test công bội âm với phân số
console.log("Test 14:", arrayProperty([8, -4, 2, -1]));
// Expected: "Exponential - Geometric Difference = -1/2"

console.log("Test 15:", arrayProperty([-8, 4, -2, 1]));
// Expected: "Exponential - Geometric Difference = -1/2"

module.exports = arrayProperty;

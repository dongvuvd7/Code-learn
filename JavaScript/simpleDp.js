/**
 * BÀI TOÁN: SIMPLE DP - XỬ LÝ DÃY SỐ VỚI CÁC LỆNH
 *
 * Mô tả: Xử lý một dãy các lệnh trên mảng arr:
 * - push x: Thêm x vào cuối arr
 * - pop: Bỏ phần tử cuối arr
 * - print +: In tổng s1 = arr[0] + arr[1] + arr[2] + ...
 * - print -: In tổng s2 = arr[0] - arr[1] + arr[2] - arr[3] + ...
 *
 * Ví dụ:
 * act = ["push 7","push 8","print +","pop","push 5","print -"]
 * - push 7: arr = [7]
 * - push 8: arr = [7,8]
 * - print +: s1 = 7+8 = 15 → result = [15]
 * - pop: arr = [7]
 * - push 5: arr = [7,5]
 * - print -: s2 = 7-5 = 2 → result = [15,2]
 *
 * CÁCH GIẢI:
 * 1. Duy trì mảng arr và mảng kết quả result
 * 2. Với mỗi lệnh, phân tích và thực hiện tương ứng
 * 3. Tính toán s1, s2 khi cần thiết
 */
function simpleDp(act) {
    let arr = [];
    let result = [];

    // Hàm tính tổng s1 = arr[0] + arr[1] + arr[2] + ...
    function calculateS1() {
        return arr.reduce((sum, num) => sum + num, 0);
    }

    // Hàm tính tổng s2 = arr[0] - arr[1] + arr[2] - arr[3] + ...
    function calculateS2() {
        return arr.reduce((sum, num, index) => {
            return index % 2 === 0 ? sum + num : sum - num;
        }, 0);
    }

    // Xử lý từng lệnh
    for (let command of act) {
        if (command.startsWith("push ")) {
            // Lệnh push x: thêm x vào cuối arr
            const x = parseInt(command.split(" ")[1]);
            arr.push(x);
        } else if (command === "pop") {
            // Lệnh pop: bỏ phần tử cuối arr (nếu có)
            if (arr.length > 0) {
                arr.pop();
            }
        } else if (command === "print +") {
            // Lệnh print +: thêm s1 vào result
            result.push(calculateS1());
        } else if (command === "print -") {
            // Lệnh print -: thêm s2 vào result
            result.push(calculateS2());
        }
    }

    return result;
}

// Test với ví dụ đề bài
console.log("=== Test với ví dụ đề bài ===");
const testCase1 = ["push 7", "push 8", "print +", "pop", "push 5", "print -"];
console.log("Input:", testCase1);
console.log("Output:", simpleDp(testCase1)); // Kết quả mong đợi: [15, 2]

// Phân tích chi tiết ví dụ
console.log("\n=== Phân tích chi tiết ===");
function analyzeStep(act) {
    let arr = [];
    let result = [];
    let step = 1;

    function calculateS1() {
        return arr.reduce((sum, num) => sum + num, 0);
    }

    function calculateS2() {
        return arr.reduce((sum, num, index) => {
            return index % 2 === 0 ? sum + num : sum - num;
        }, 0);
    }

    for (let command of act) {
        console.log(`Bước ${step}: "${command}"`);

        if (command.startsWith("push ")) {
            const x = parseInt(command.split(" ")[1]);
            arr.push(x);
            console.log(`  → arr = [${arr.join(",")}]`);
        } else if (command === "pop") {
            if (arr.length > 0) {
                arr.pop();
            }
            console.log(`  → arr = [${arr.join(",")}]`);
        } else if (command === "print +") {
            const s1 = calculateS1();
            result.push(s1);
            console.log(`  → s1 = ${arr.join(" + ")} = ${s1}`);
            console.log(`  → result = [${result.join(",")}]`);
        } else if (command === "print -") {
            const s2 = calculateS2();
            result.push(s2);
            let s2Formula = arr
                .map((num, idx) => (idx % 2 === 0 ? `+${num}` : `-${num}`))
                .join(" ")
                .replace(/^\+/, "");
            console.log(`  → s2 = ${s2Formula} = ${s2}`);
            console.log(`  → result = [${result.join(",")}]`);
        }

        step++;
    }

    return result;
}

analyzeStep(testCase1);

// Thêm các test case khác
console.log("\n=== Test cases khác ===");

const testCase2 = ["push 1", "push 2", "push 3", "print +", "print -"];
console.log("Test 2:", testCase2);
console.log("Output:", simpleDp(testCase2)); // [6, 2] vì s1=1+2+3=6, s2=1-2+3=2

const testCase3 = ["print +", "print -", "push 10", "print +", "print -"];
console.log("Test 3:", testCase3);
console.log("Output:", simpleDp(testCase3)); // [0, 0, 10, 10] vì arr rỗng → s1=s2=0

const testCase4 = ["push 5", "push 3", "pop", "push 7", "print +", "print -"];
console.log("Test 4:", testCase4);
console.log("Output:", simpleDp(testCase4)); // [12, -2] vì arr=[5,7] → s1=5+7=12, s2=5-7=-2

// Export function
module.exports = simpleDp;

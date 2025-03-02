/**
 * Cho chuỗi s gồm các toán hạng, toán tử và dấu ngoặc. Tính giá trị của chuỗi s
 * Ví dụ: 9 + 3 * 2 = 15
 * Ví du: 10 / (9 + 1) = 1
 * Ví du: (6 + 4) * 3 = 30
 */
function calculate2(s) {
    // Hàm xác định độ ưu tiên của toán tử
    function precedence(op) {
        if (op === '+' || op === '-') return 1;
        if (op === '*' || op === '/') return 2;
        return 0;
    }

    // Hàm thực hiện phép toán
    function applyOp(a, b, op) {
        switch (op) {
            case '+': return a + b;
            case '-': return a - b;
            case '*': return a * b;
            case '/': return a / b;
        }
        return 0;
    }

    // Hàm chuyển đổi biểu thức từ dạng trung tố sang dạng hậu tố
    function infixToPostfix(s) {
        let stack = [];
        let postfix = [];
        let i = 0;

        while (i < s.length) {
            if (s[i] === ' ') {
                i++;
                continue;
            }

            if (s[i] >= '0' && s[i] <= '9') {
                let num = 0;
                while (i < s.length && s[i] >= '0' && s[i] <= '9') {
                    num = num * 10 + parseInt(s[i]);
                    i++;
                }
                postfix.push(num);
                i--;
            } else if (s[i] === '(') {
                stack.push(s[i]);
            } else if (s[i] === ')') {
                while (stack.length && stack[stack.length - 1] !== '(') {
                    postfix.push(stack.pop());
                }
                stack.pop();
            } else {
                while (stack.length && precedence(stack[stack.length - 1]) >= precedence(s[i])) {
                    postfix.push(stack.pop());
                }
                stack.push(s[i]);
            }
            i++;
        }

        while (stack.length) {
            postfix.push(stack.pop());
        }

        return postfix;
    }

    // Hàm tính giá trị của biểu thức hậu tố
    function evaluatePostfix(postfix) {
        let stack = [];

        for (let i = 0; i < postfix.length; i++) {
            if (typeof postfix[i] === 'number') {
                stack.push(postfix[i]);
            } else {
                let b = stack.pop();
                let a = stack.pop();
                stack.push(applyOp(a, b, postfix[i]));
            }
        }

        return stack.pop();
    }

    let postfix = infixToPostfix(s);
    let result = evaluatePostfix(postfix);

    // Làm tròn kết quả đến 2 chữ số thập phân nếu là số thực
    if (typeof result === 'number' && !Number.isInteger(result)) {
        result = parseFloat(result.toFixed(2));
    }

    return result;
}


console.log(calculate2("(6 + 3) * 3"));
/**
 * Thực hiện phép toán XOR giữa message và key
 * Nếu chuỗi message < chuỗi key thì key sẽ được lặp lại cho đến khi đủ độ dài và thực hiện phép toán XOR, tương tự nếu chuỗi key < chuỗi message
 * @param {*} message 
 * @param {*} key 
 */
function xorOperator(message, key) {
    // Đảm bảo message và key là chuỗi
    message = message.toString();
    key = key.toString();

    // Lặp lại key cho đến khi đủ độ dài của message
    while (key.length < message.length) {
        key += key;
    }
    key = key.slice(0, message.length);

    // Thực hiện phép toán XOR
    let result = '';
    for (let i = 0; i < message.length; i++) {
        result += (message[i] === key[i]) ? '0' : '1';
    }

    return result;
}

console.log(xorOperator('0011001100110011','0101'));
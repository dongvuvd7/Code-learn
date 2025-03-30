/**
 * Cho một chuỗi str. 
 * Hãy tính số chuỗi khác nhau bởi cách xáo trộn vị trí các kí tự trong str. 
 * Vì số các chuỗi tạo ra có thể là rất lớn nên kết quả lấy dư cho 109 + 7
 */
function countStrings(str){
    let mod = 1000000007; // Số dư
    let n = str.length; // Độ dài chuỗi
    let freq = {}; // Đối tượng lưu tần suất các kí tự trong str

    // Tính tần suất các kí tự trong str
    for (let i = 0; i < n; i++) {
        freq[str[i]] = (freq[str[i]] || 0) + 1;
    }

    // Tính giai thừa của n
    let numerator = factorial(n, mod);

    // Tính giai thừa của tần suất các kí tự
    let denominator = 1;
    for (let key in freq) {
        denominator = (denominator * factorial(freq[key], mod)) % mod;
    }

    // Tính kết quả cuối cùng
    return (numerator * modInverse(denominator, mod)) % mod;
}

/**
 * Tính giai thừa của n mod mod
 * @param {*} n 
 * @param {*} mod 
 */
function factorial(n, mod) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result = (result * i) % mod;
    }
    return result;
}

/**
 * Tính nghịch đảo modulo của a mod mod
 * @param {*} a 
 * @param {*} mod 
 */
function modInverse(a, mod) {
    let m0 = mod, t, q;
    let x0 = 0, x1 = 1;

    if (mod === 1) return 0;

    while (a > 1) {
        // q là thương
        q = Math.floor(a / mod);
        t = mod;

        // mod là phần dư, cập nhật a và mod
        mod = a % mod, a = t;
        t = x0;

        // Cập nhật x0 và x1
        x0 = x1 - q * x0;
        x1 = t;
    }

    // Đảm bảo x1 là dương
    if (x1 < 0) x1 += m0;

    return x1;
}


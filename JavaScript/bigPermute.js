/**
 * BÀI TOÁN: BIG PERMUTE - TÍNH N! % (10^9 + 7) BẰNG XỬ LÝ CHUỖI
 *
 * Thách thức: Tính n! với n lên đến 30000 mà không dùng BigInt
 * Giải pháp: Sử dụng xử lý chuỗi để biểu diễn số lớn và thực hiện phép nhân
 *
 * Ý tưởng:
 * 1. Biểu diễn số dưới dạng chuỗi (mảng chữ số)
 * 2. Thực hiện phép nhân chuỗi với số nguyên
 * 3. Áp dụng modulo ở mỗi bước để tránh số quá lớn
 *
 * Ví dụ:
 * - n = 2: 2! = 2
 * - n = 4: 4! = 24
 */
function bigPermute(n) {
    const MOD = 1000000007;

    if (n === 0 || n === 1) return 1;

    // Hàm nhân một số lớn (dạng chuỗi) với một số nguyên
    function multiplyString(numStr, multiplier) {
        let result = [];
        let carry = 0;

        // Nhân từ phải sang trái
        for (let i = numStr.length - 1; i >= 0; i--) {
            let digit = parseInt(numStr[i]);
            let product = digit * multiplier + carry;

            result.unshift(product % 10);
            carry = Math.floor(product / 10);
        }

        // Xử lý carry còn lại
        while (carry > 0) {
            result.unshift(carry % 10);
            carry = Math.floor(carry / 10);
        }

        return result.join("");
    }

    // Hàm tính modulo của số lớn (dạng chuỗi)
    function modString(numStr, mod) {
        let remainder = 0;

        for (let i = 0; i < numStr.length; i++) {
            remainder = (remainder * 10 + parseInt(numStr[i])) % mod;
        }

        return remainder;
    }

    // PHIÊN BAN XỬ LÝ CHUỖI (theo yêu cầu đề bài)
    let factorial = "1";

    for (let i = 2; i <= n; i++) {
        factorial = multiplyString(factorial, i);

        // Tối ưu: áp dụng modulo khi chuỗi quá dài để tránh overflow
        if (factorial.length > 100) {
            let remainder = modString(factorial, MOD);
            factorial = remainder.toString();
        }
    }

    return modString(factorial, MOD);

    /* 
    // PHIÊN BẢN TỐI ƯU (không dùng xử lý chuỗi):
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result = (result * i) % MOD;
    }
    return result;
    */
}

module.exports = bigPermute;

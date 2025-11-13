/**
 * BÀI TOÁN: LAST NON-ZERO DIGIT - CHỮ SỐ CUỐI KHÁC 0 CỦA N!
 *
 * THUẬT TOÁN:
 * - Sử dụng công thức toán học
 * - Tham khảo: https://oeis.org/A008904
 */
function lastNonZeroDigit(n) {
    if (n < 2) return 1;

    // Bảng tra cứu cho factorial mod 10
    const table = [1, 1, 2, 6, 4, 2, 2, 4, 2, 8];

    if (n < 10) {
        return table[n];
    }

    // Bảng cho 2^k mod 10 (chu kỳ 4)
    const pow2 = [6, 2, 4, 8];

    // Bảng tích 1*2*3*4*6*7*8*9 = 144 mod 10 = 4
    const factMod = [1, 1, 2, 6, 4, 2, 2, 4, 2, 8, 4];

    function solve(num) {
        if (num < 10) {
            return table[num];
        }

        const q = Math.floor(num / 5);
        const r = num % 5;

        let res = table[r];

        // Nhân với 4^q (vì 1*2*3*4*6*7*8*9 mod 10 = 4)
        let temp = 1;
        let base = 4;
        let exp = q;
        while (exp > 0) {
            if (exp & 1) temp = (temp * base) % 10;
            base = (base * base) % 10;
            exp >>= 1;
        }
        res = (res * temp) % 10;

        // Đệ quy
        res = (res * solve(q)) % 10;

        // Hiệu chỉnh với 2^x
        const qMod4 = q % 4;
        if (qMod4 === 1) res = (res * 4) % 10;
        else if (qMod4 === 2) res = (res * 4) % 10;
        else if (qMod4 === 3) res = (res * 4) % 10;

        return res;
    }

    return solve(n);
}

module.exports = lastNonZeroDigit;

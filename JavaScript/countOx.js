/**
 * BÀI TOÁN: COUNT OX - ĐẾM SỐ CON BÒ ĐƯỢC CHO ĂN
 *
 * Điều kiện để con bò được cho ăn:
 * - Với số a[i], tính số đảo ngược reverse(a[i])
 * - Hiệu |a[i] - reverse(a[i])| phải chia hết cho k
 *
 * Solution được tối ưu cho test case lớn (10^5 phần tử)
 */
function countOx(a, k) {
    if (a.length === 0) return 0;

    // Trường hợp k = 0: chỉ đếm palindrome
    if (k === 0) {
        let count = 0;
        for (let i = 0; i < a.length; i++) {
            const str = a[i].toString();
            const len = str.length;
            let isPalin = true;
            for (let j = 0; j < len >> 1; j++) {
                if (str[j] !== str[len - 1 - j]) {
                    isPalin = false;
                    break;
                }
            }
            if (isPalin) count++;
        }
        return count;
    }

    let count = 0;
    const cache = new Map();

    for (let i = 0; i < a.length; i++) {
        const num = a[i];

        // Kiểm tra cache trước
        if (cache.has(num)) {
            if (cache.get(num)) count++;
            continue;
        }

        // Trường hợp đặc biệt: số 0
        if (num === 0) {
            cache.set(0, true);
            count++;
            continue;
        }

        // Tính reverse với tối ưu hóa
        let temp = num;
        let rev = 0;
        while (temp > 0) {
            rev = rev * 10 + (temp % 10);
            temp = (temp / 10) | 0;
        }

        // Tính hiệu không dùng Math.abs
        const diff = num > rev ? num - rev : rev - num;
        const valid = diff % k === 0;

        cache.set(num, valid);
        if (valid) count++;
    }

    return count;
}

module.exports = countOx;

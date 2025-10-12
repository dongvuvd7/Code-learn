/**
 * BÀI TOÁN: POW TWO EASY - TÌM SỐ MŨ CỦA 2 TRONG N!
 *
 * Mục tiêu: Tìm k lớn nhất sao cho n! = A × 2^k (A là số lẻ)
 *
 * Công thức Legendre: k = ⌊n/2⌋ + ⌊n/4⌋ + ⌊n/8⌋ + ⌊n/16⌋ + ...
 *
 * Ví dụ:
 * - n = 3: k = ⌊3/2⌋ = 1 → 3! = 6 = 3 × 2¹
 * - n = 4: k = ⌊4/2⌋ + ⌊4/4⌋ = 2 + 1 = 3 → 4! = 24 = 3 × 2³
 *
 * CÁCH GIẢI:
 * Áp dụng công thức Legendre để đếm số lượng thừa số 2 trong n!
 */
function powTwoEasy(n) {
    let k = 0;
    let powerOfTwo = 2;

    // Áp dụng công thức Legendre: k = ⌊n/2⌋ + ⌊n/4⌋ + ⌊n/8⌋ + ...
    while (powerOfTwo <= n) {
        k += Math.floor(n / powerOfTwo);
        powerOfTwo *= 2;
    }

    return k;
}

module.exports = powTwoEasy;

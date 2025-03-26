/**
 * Tìm số tự nhiên k lớn nhất <= n sao cho k = x^y + y^x (x, y là số tự nhiên > 1)
 * Trả về k, nếu không tồn tại trả về -1
 * @param {*} n 
 */
function maxSatisfyNumber(n) {
    let max = -1;
    const limit = Math.floor(Math.log(n) / Math.log(2));

    for (let x = 2; x <= limit; x++) {
        for (let y = 2; y <= limit; y++) {
            let xPowY = BigInt(x) ** BigInt(y);
            let yPowX = BigInt(y) ** BigInt(x);
            let temp = xPowY + yPowX;

            if (temp > BigInt(n)) break;

            if (temp <= BigInt(n) && temp > BigInt(max)) {
                max = Number(temp);
            }
        }
    }

    return max;
}
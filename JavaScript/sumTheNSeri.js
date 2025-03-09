/**
 * Tn = n^2 - (n-1)^2
 * Sn = T1 + T2 + T3 + ... + Tn
 * Caculate Sn mod 10^9 + 7
 * @param {*} n 
 */
function sumTheNSeri(n) {
    const MOD = 1000000007; // 10^9 + 7
    // Chuyển sang BigInt để đảm bảo chính xác với số lớn
    const bigN = BigInt(n);
    // Tính n^2 rồi lấy modulo một lần
    return Number((bigN * bigN) % BigInt(MOD));
}
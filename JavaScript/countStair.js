/**
 * BÀI TOÁN: CONQUERING OLYMPUS - XÁC ĐỊNH SỐ BẬC THANG
 *
 * Mô tả: Tìm n duy nhất trong [a, b] thỏa mãn tất cả n % x_i == y_i.
 *        Nếu có đúng 1 n thỏa mãn, trả n; không thì -1.
 *
 * Ví dụ:
 * - a=1, b=100, query=[[3,0],[2,1],[9,3],[7,5]] → 75 (duy nhất)
 * - a=100, b=1000, query=[[2,1],[3,0]] → -1 (nhiều)
 *
 * HƯỚNG GIẢI:
 * - Sử dụng Chinese Remainder Theorem tăng dần (BigInt cho M lớn).
 * - Bắt đầu n ≡ 0 mod 1.
 * - Với mỗi query, hợp nhất congruence, nếu conflict → -1.
 * - Cuối cùng, tìm số lượng n ≡ R mod M trong [a,b]: nếu đúng 1 → trả n, else -1.
 * - Thời gian: O(k log max_x) cho CRT + O(1) check range (n<=1e6).
 */
function countStair(query, a, b) {
    let A = BigInt(a);
    let B = BigInt(b);
    let R = 0n;
    let M = 1n;

    // Helper: GCD
    function gcd(u, v) {
        u = u < 0n ? -u : u;
        v = v < 0n ? -v : v;
        while (v !== 0n) {
            let t = v;
            v = u % v;
            u = t;
        }
        return u;
    }

    // Helper: Modular inverse (extended Euclidean)
    function modInverse(aa, mm) {
        let a = aa % mm;
        if (a < 0n) a += mm;
        let m0 = mm;
        let y = 0n,
            x = 1n;
        if (mm === 1n) return 0n;
        while (a > 1n) {
            let q = a / mm;
            let t = mm;
            mm = a % mm;
            a = t;
            t = y;
            y = x - q * y;
            x = t;
        }
        if (x < 0n) x += m0;
        return x;
    }

    // Merge two congruences: n ≡ r1 mod m1, n ≡ r2 mod m2
    function merge(r1, m1, r2, m2) {
        let g = gcd(m1, m2);
        let diff = r2 - r1;
        if (diff % g !== 0n) return null;
        let diff_mod = ((diff % m2) + m2) % m2;
        let lcm_val = (m1 / g) * m2;
        let mg = m1 / g;
        let ng = m2 / g;
        let diffg = diff_mod / g;
        let inv = modInverse(mg % ng, ng);
        let t = (((inv * diffg) % ng) + ng) % ng;
        let n0 = r1 + m1 * t;
        let new_r = ((n0 % lcm_val) + lcm_val) % lcm_val;
        return { r: new_r, m: lcm_val };
    }

    // Apply all queries
    for (let q of query) {
        let XX = BigInt(q[0]);
        let YY = BigInt(q[1]);
        let res = merge(R, M, YY, XX);
        if (res === null) return -1;
        R = res.r;
        M = res.m;
    }

    // Normalize R
    R = ((R % M) + M) % M;

    // Find first n >= A, n ≡ R mod M
    let amod = A % M;
    let adjust = (R - amod + M) % M;
    let first = A + adjust;

    if (first > B) return -1;

    // Compute number of solutions: floor((B - first)/M) + 1
    let dist = B - first;
    let q = dist / M;
    let num = Number(q) + 1;

    if (num === 1) {
        return Number(first);
    } else {
        return -1;
    }
}

/**
 * BÀI TOÁN: PATIENT REACH - VỊ TRÍ BIỆT THỰ TỐI ƯU
 *
 * Mô tả:
 * - Tìm vị trí x trên đường để tổng bình phương khoảng cách đến n nhà nhỏ nhất
 * - Công sức từ x đến y là (x - y)²
 * - Tối thiểu hóa: f(x) = (1/n) × Σ(x - aᵢ)²
 *
 * Phân tích toán học:
 * - Lấy đạo hàm: f'(x) = (1/n) × Σ 2(x - aᵢ) = 0
 * - Giải: 2nx - 2Σaᵢ = 0
 * - Kết quả: x = Σaᵢ / n (trung bình cộng)
 *
 * Ví dụ:
 * - a = [4, 6, 8]
 * - x = (4+6+8)/3 = 18/3 = 6/1
 * - Trả về: [6, 1]
 *
 * CÁCH GIẢI:
 * 1. Tính tổng các vị trí: sum = Σaᵢ
 * 2. Vị trí tối ưu: x = sum/n
 * 3. Rút gọn phân số sum/n về p/q với gcd(p,q) = 1
 */
function patientReach(a) {
    const n = a.length;

    // Tính tổng các vị trí
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += a[i];
    }

    // Hàm tính GCD (Ước chung lớn nhất)
    function gcd(x, y) {
        while (y !== 0) {
            const temp = y;
            y = x % y;
            x = temp;
        }
        return x;
    }

    // Vị trí tối ưu là sum/n
    let p = sum;
    let q = n;

    // Rút gọn phân số
    const g = gcd(p, q);
    p = p / g;
    q = q / g;

    return [p, q];
}

module.exports = patientReach;

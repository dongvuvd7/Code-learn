/**
 * Tìm vị trí gặp nhau của hai con ếch nhảy trên trục Ox
 * 
 * Bài toán: Hai con ếch xuất phát từ vị trí x1, x2 với vận tốc v1, v2.
 * Tìm vị trí đầu tiên mà cả hai con ếch cùng dừng lại.
 * 
 * Phân tích toán học:
 * - Sau t bước: ếch 1 ở x1 + v1*t, ếch 2 ở x2 + v2*t  
 * - Gặp nhau khi: x1 + v1*t = x2 + v2*t
 * - Giải phương trình: t = (x2 - x1) / (v1 - v2)
 * - t phải là số nguyên không âm
 * 
 * Các trường hợp đặc biệt:
 * - x1 = x2: đã gặp nhau từ đầu
 * - v1 = v2: không bao giờ gặp nhau (trừ khi x1 = x2)
 * - t < 0: không gặp nhau trong tương lai
 * - t không nguyên: không gặp nhau tại bước nào
 * 
 * Ví dụ:
 * - [0,6,4,2]: t=(6-0)/(4-2)=3, gặp tại 0+4*3=12
 * - [2,9,2,4]: t=(9-2)/(2-4)=-3.5<0 → "NO"
 * 
 * @param {number[]} a - Mảng [x1, x2, v1, v2] với |a[i]| ≤ 10^9
 * @returns {string} - Vị trí gặp nhau hoặc "NO" nếu không gặp
 */
function jumpingFrog(a){
    const [x1, x2, v1, v2] = a.map(x => BigInt(x));
    
    // Trường hợp đặc biệt: đã ở cùng vị trí
    if (x1 === x2) {
        return x1.toString();
    }
    
    // Trường hợp cùng vận tốc: không bao giờ gặp nhau
    if (v1 === v2) {
        return "NO";
    }
    
    const deltaX = x2 - x1;
    const deltaV = v1 - v2;
    
    // Kiểm tra t có là số nguyên không âm
    if (deltaX % deltaV !== 0n) {
        return "NO";
    }
    
    const t = deltaX / deltaV;
    
    if (t < 0n) {
        return "NO";
    }
    
    // Tính vị trí gặp nhau
    const meetingPoint = x1 + v1 * t;
    return meetingPoint.toString();
}
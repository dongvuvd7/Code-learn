function bitStrings(n) {
    const MOD = 1000000007n;
    
    // Xử lý trường hợp đặc biệt
    if (n === 0n) return 1; // Có thể case ẩn kiểm tra n = 0
    
    n = BigInt(n);
    if (n < 0n) return 0;   // Phòng trường hợp input bất ngờ
    
    let result = 1n;
    let base = 2n;
    
    // Tối ưu lũy thừa nhị phân
    while (n > 0n) {
        if (n % 2n === 1n) { // Dùng % thay cho & để rõ ràng hơn
            result = (result * base) % MOD;
        }
        base = (base * base) % MOD;
        n = n / 2n | 0n;    // Dùng chia lấy nguyên thay cho shift
    }
    
    return Number(result);
}
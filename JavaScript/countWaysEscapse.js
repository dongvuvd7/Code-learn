function countWaysEscapse(n){
    // Base cases
    if (n === 0) return 1n;
    if (n === 1) return 1n;
    
    // Sử dụng BigInt để xử lý số lớn khi n lớn (tới 70)
    let a = 1n; // số cách nhảy khi n=0
    let b = 1n; // số cách nhảy khi n=1
    let c;
    
    // Tính toán F(n) sử dụng vòng lặp để tối ưu bộ nhớ
    for (let i = 2; i <= n; i++) {
        c = a + b; // F(n) = F(n-1) + F(n-2)
        a = b;     // Chuẩn bị cho bước tiếp theo
        b = c;     // Chuẩn bị cho bước tiếp theo
    }
    
    return b;
}

console.log(countWaysEscapse(9))
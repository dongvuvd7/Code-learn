/**
 * Bài thứ nhất khai xuân Ất Tỵ
 * Vũ Đức Đông 2025
 */
function donnerMoney(n) {
    if(n < 0) return -1;
    if(n >= 0 && n < 50) return n*0.5;
    else return n*0.5 + parseInt(n/50)*5;
}

/**
 * Bài thứ hai khai xuân Ất Tỵ
 * Vũ Đức Đông 2025
 */
function appleBox(k){
    let totalRed = 0, totalYellow = 0;
    for(let i=1; i<=k; i++){
        if(i%2 == 0) totalRed += i*i;
        else totalYellow += i*i;
    }
    return totalRed - totalYellow;
}

/**
 * Bài thứ ba khai xuân Ất Tỵ
 * Hàm chuyển chuỗi ký tự camelCase thành chuỗi ký tự cách nhau bởi dấu cách vaf vẫn giữ ký tự viết hoa
 * Vũ Đức Đông 2025 
 */
function camelCase(s){
    return s.replace(/([A-Z])/g, ' $1');
}

console.log(camelCase('AnKhangThịnhVượng')); // An Khang Thịnh Vượng
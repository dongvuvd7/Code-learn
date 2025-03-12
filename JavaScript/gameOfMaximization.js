/**
 * Gọi x[i] là số giá trị có thể lấy ra từ arr[i]
 * Tìm tổng mảng x lớn nhất sao cho x0 + x3 + x6 + ... = x1 + x4 + x7 + ... = x2 + x5 + x8 + ...
 * @param {Array} arr - Mảng các số nguyên dương
 */
function gameOfMaximization(arr){
    let kq = [0, 0, 0];
    for(let i = 0; i < arr.length; i++){
        kq[i % 3] += arr[i];
    }
    return 3 * Math.min(kq[0], kq[1], kq[2]);
}


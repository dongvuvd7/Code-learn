function convertNumberMax(n){
    let nString = n.toString();
    //lấy chữ số lớn nhất trong n
    let maxDigit = 0;
    for(let i = 0; i < nString.length; i++) {
        let digit = parseInt(nString[i]);
        if(digit > maxDigit) {
            maxDigit = digit;
        }
    }
    //duyệt từ trái sang phải từng ký tự trong n
    for(let i = 0; i < nString.length; i++) {
        let digit = parseInt(nString[i]);
        //nếu ký tự nhỏ hơn chữ số lớn nhất thì thay thế bằng chữ số lớn nhất
        if(digit < maxDigit) {
            nString = nString.slice(0, i) + maxDigit + nString.slice(i + 1);
            break; // chỉ thay thế một ký tự đầu tiên
        }
    }
    //trả về kết quả
    return parseInt(nString);
}
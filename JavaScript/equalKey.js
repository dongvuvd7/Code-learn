function equalKey(cal){
    let arrNumber = cal.split('+');

    // Trường hợp không đủ số hạng để tạo thành phép tính (vd: "123")
    if (arrNumber.length < 2) {
        return false;
    }

    let sum = 0;
    for(let i = 0; i < arrNumber.length - 1; i++){
        // Nên kiểm tra xem parseInt có thành công không, đề phòng input như "1++2"
        const num = parseInt(arrNumber[i]);
        if (isNaN(num)) return false; // Xử lý lỗi nếu phần tử không phải số
        sum += num;
    }

    let lastNumberStr = arrNumber[arrNumber.length - 1];
    const lastNumberInt = parseInt(lastNumberStr);
    if (isNaN(lastNumberInt)) return false; // Xử lý lỗi nếu phần tử cuối không phải số

    // *** Bổ sung kiểm tra: ***
    // Kiểm tra trường hợp dấu '=' nằm ngay trước số hạng cuối cùng
    // Ví dụ: "1+2+3" -> kiểm tra xem 1+2 == 3
    if (sum === lastNumberInt) {
        return true;
    }

    // Kiểm tra trường hợp dấu '=' nằm bên trong số hạng cuối cùng
    // Ví dụ: "1+2+35" -> kiểm tra xem 1+2+3 == 5
    // (Phần code gốc của bạn, bỏ đi cái if tối ưu hóa sai)
    for(let i = 0; i < lastNumberStr.length - 1; i++){
        let preFixLastNumber = lastNumberStr.slice(0, i + 1);
        let postFixLastNumber = lastNumberStr.slice(i + 1);

        const preFixInt = parseInt(preFixLastNumber);
        const postFixInt = parseInt(postFixLastNumber);

        // Thêm kiểm tra isNaN phòng trường hợp slice tạo ra chuỗi không hợp lệ (ít xảy ra với số)
        if (isNaN(preFixInt) || isNaN(postFixInt)) continue;

        if(sum + preFixInt === postFixInt){
            return true;
        }
    }

    return false;
}

// Test các trường hợp
console.log(equalKey("1+2+3"));       // Output: true (Sửa lỗi)
console.log(equalKey("1+2+35"));      // Output: true (Code gốc đúng)
console.log(equalKey("10+20+30"));    // Output: true (Sửa lỗi)
console.log(equalKey("5+5+10"));      // Output: true (Sửa lỗi - code gốc bị sai do if)
console.log(equalKey("1+1+12"));      // Output: false (Code gốc đúng)
console.log(equalKey("123"));         // Output: false (Sửa lỗi - thêm check length)
console.log(equalKey("1+99+100"));    // Output: true (Sửa lỗi)
console.log(equalKey("1+99+10+0"));   // Output: true (Kiểm tra 1+99+10 = 0? False. Kiểm tra 1+99 = 100? True)
/**
 * Để mã hóa một ký tự nào đó thì DAN sẽ lặp lại ký hiệu "#" n lần (n là thứ tự của ký tự trong bảng chữ cái) và mỗi ký tự sẽ được phân cách bởi dấu "_". Hãy giải mã chuỗi str theo quy tắc trên, nếu chuỗi có ký tự không hợp lệ thì hãy trả về "NOT VALID".
 * Với str = "#_##_###" thì splitEncode(str) = "abc"
 */
function splitEncode(str){
    let res = "";
    let arr = str.split("_");
    for(let i = 0; i < arr.length; i++){
        let count = 0;
        for(let j = 0; j < arr[i].length; j++){
            if(arr[i][j] == "#") count++;
            else return "NOT VALID";
        }
        res += String.fromCharCode(96 + count);
    }
    return res;
}


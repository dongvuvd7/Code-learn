/**
 * Đảo ngược chuỗi s nếu ký tự nằm trong bảng chữ cái, nếu không thì giữ nguyên
 * Ví dụ: s = 'a-1bc' -> 'c-1ba'
 */
function reverseString(s){
    let arr = s.split('');
    let left = 0, right = arr.length - 1;
    while(left < right){
        if(!isLetter(arr[left])) left++;
        else if(!isLetter(arr[right])) right--;
        else{
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }
    }
    return arr.join('');
}

function isLetter(c){
    return c.toLowerCase() != c.toUpperCase();
}

console.log(reverseString('abc123'));
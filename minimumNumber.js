function minimumNumber(num){
    //Nếu tất cả các chữ số của num là 2 thì trả về num
    if(num.toString().split('').every(el => el === '2')) return num;
    //nếu không thì tìm số 5 đầu tiên xuất hiện trong num từ trái qua phải và thay thế nó bằng 2 rồi trả về kết quả
    let numArr = num.toString().split('');
    let index = numArr.indexOf('5');
    numArr[index] = '2';
    return parseInt(numArr.join(''));
}


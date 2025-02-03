function sumOfA(a) {
    return a + parseInt(a.toString() + a) + parseInt(a.toString() + a + a);
}

function countNumber(arr, k) {
    let newArr = [...new Set(arr)];
    let result = newArr.filter((i) => i % k == 0).length;
    return result;
}

function rightZodiac(n) {
    let arr = ["Thân", "Dậu", "Tuất", "Hợi", "Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ", "Ngọ", "Mùi"];
    return arr[n % 12];
}

function findMissingLetter(array) {
    for (var i = 0; i < array.length; i++) {
        var a = array[i + 1].charCodeAt() - array[i].charCodeAt();
        if (a > 1) {
            return String.fromCharCode(array[i].charCodeAt() + 1);
        }
    }
}

//calculate the sum of all odd numbers from 1 to n
function sumOdd(n){
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 2 != 0) {
            sum += i;
        }
    }
    return sum;
}

//check if arr have any duplicate value
function duplicate(arr){
    return arr.length !== new Set(arr).size;
}

function straightLine(n){
    let a = Math.round(n/2);
    return (a+1)*(n-a+1);
}

function sol(a){
    let resArr = [];
    for(let i=0; i<a.length; i++){
        //tìm vị trí của phần tử xa nhất trong mảng a mà nhỏ hơn a[i]
        let max = -1;
        let index = -1;
        for(let j=i+1; j<a.length; j++){
            if(a[j] < a[i]){
                if(j-i > max){
                    max = j-i;
                    index = j;
                }
            }
        }
        resArr.push(index != -1 ? index - 1 - i : -1);

    }
    return resArr;

}

function initMatrix(n){
    let matrix = [];
    for(let i=1; i<=n; i++){
        let row = [];
        for(let j=i; j<n+i; j++){
            row.push(j);
        }
        matrix.push(row);
    }
    return matrix;

}

//Bạn được cho 2 số nguyên A,B. Bạn hãy đếm số lượng số trong [A,B] sao cho số đó có số lượng lẻ ước nguyên dương
function solve(a,b){
    let count = 0;
    for(let i=a; i<=b; i++){
        let sqrt = Math.sqrt(i);
        if(sqrt == Math.floor(sqrt)){
            count++;
        }
    }
    return count;
    //giải thích: số lượng ước của một số chính phương luôn là số lẻ
}

//Một hình chữ nhật có chiều dài là n và chiều rộng là m, được chia thành những ô vuông nhỏ kích thước 1x1.
//Hãy đếm xem trong hình chữ nhật đó có tổng cộng bao nhiêu ô vuông và in kết quả ra màn hình
//Ví dụ: n=1, m=1 => kết quả là 1; n=2, m=2 => kết quả là 5
function countsquares(m,n){
    //m*n là số ô vuông 1x1, (m-1)*(n-1) là số ô vuông 2x2, lần lươt (m-2)*(n-2) là số ô vuông 3x3, ...
    let sum = 0;
    for(let i=1; i<=Math.min(m,n); i++){
        sum += (m-i+1)*(n-i+1);
    }
    return sum;

}

//Cho 2 số nguyên l và r, tìm giá trị lớn nhất của a xor b, trong đó a và b thoả mãn các điều kiện sau: l <= a <= b <= r 
//Ví dụ: l=10, r=15 => kết quả là 7

function maxXOR(l,r){
    let max = 0;
    for(let i=l; i<=r; i++){
        for(let j=i; j<=r; j++){
            max = Math.max(max, i^j);
        }
    }
    return max;
}

function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) return false;
    }
    return true;
}

//hàm đếm số bit 1 trong số nhị phân
function countBit1(n){
    return n.toString(2).split('').filter((i) => i == 1).length;
}

function countBitsPrime(L,R){
    let count = 0;
    for(let i=L; i<=R; i++){
        if(isPrime(countBit1(i))){
            count++;
        }
    }
    return count;
}

//hàm chuyển một số sang dạng nhị phân, sau đó chuyển các bit ở vị trí lẻ thành 1
//Chỉ số bit được tính từ bên phải (đánh số bắt đầu từ 1 từ bit đầu tiên)
//ví dụ: 20 => 10100 => 10101 => 21; 70 => 1000110 => 1010111 => 87; 2 => 10 => 11 => 3
function setOddBits(n){
    let binary = n.toString(2).split('');
    //Chỉ số bit được tính từ bên phải (đánh số bắt đầu từ 1 từ bit đầu tiên), duyệt từ phải qua trái
    for(let i=binary.length-1; i>=0; i--){
        if((binary.length - i) % 2 != 0){
            binary[i] = 1;
        }
    }

    return parseInt(binary.join(''), 2);
}

//Cho một mảng arr chứa các bit 0 và 1. Hãy tìm độ dài mảng con liên tiếp dài nhất mà có số lượng bit 0 bằng số lượng bit 1.
//Ví dụ: arr = [0,1,1,0,1,1,1,0] => kết quả là 4, arr = [0] => kết quả là 0
function maxLengthOfBits(arr){
    let max = 0;
    let count = 0;
    let map = new Map();
    map.set(0, -1);
    for(let i=0; i<arr.length; i++){
        count += arr[i] == 0 ? -1 : 1;
        if(map.has(count)){
            max = Math.max(max, i - map.get(count));
        }else{
            map.set(count, i);
        }
    }
    return max;
}

//Cho một hình đa giác lồi n đỉnh. Hãy tính số đường chéo trong hình đa giác lồi đó.
function countDiagionals(n){
    return n*(n-3)/2;
}


function smashStone(arr){
    if(arr.length == 0) return 0;
    while(arr.length > 1){
        arr = arr.sort((a,b) => a-b);
        let a = arr.pop();
        let b = arr.pop();
        if(a != b){
            arr.push(a-b);
        }
    }
    return arr.length > 0 ? arr[0] : 0;
}

function total(arr,brr){
    let marArr  = Math.max(...arr);
    let minBrr = Math.min(...brr);
    let count = 0;
    //duyệt từ max của arr đến min của brr, đếm xem có bao nhiêu số là bội chung của arr và ước chung của brr
    for(let i=marArr; i<=minBrr; i++){
        if(isCommonMultiple(i,arr) && isCommonDivisor(i,brr)){
            count++;
        }
    }
    return count;
}

//hàm kiểm tra một số có phải ước chung của một mảng số không
function isCommonDivisor(n,arr){
    return arr.every((i) => i % n == 0);
}

//hàm kiểm tra một số có phải là bội chung của một mảng số không
function isCommonMultiple(n,arr){
    return arr.every((i) => n % i == 0);
}

function cheating(arr,k){
    for(let i=0; i<=arr[0] && i <= k/20; i++) {
        for(let j=0; j<=arr[1] && j <= k/50; j++) {
            for(let m=0; m<=arr[2] && m <= k/100; m++) {
                for(let n=0; n<=arr[3] && n <= k/200; n++) {
                    if(i*20 + j*50 + m*100 + n*200 == k) {
                        return 0;
                    }
                }
            }
        }
    }
    return 3*k;
}

function squareAllNumbers(n){
    let res = "";
    //convert n to string
    let str = n.toString();
    if(str[0] == '-'){
        res += '-';
        str = str.substr(1);
    }
    for(let i=0; i<str.length; i++){
        res += parseInt(str[i]) * parseInt(str[i]);
    }
    return parseFloat(res);
}

function lastDigit(a,b){
    //cách xử lý số lớn
    let res = 1;
    for(let i=0; i<b; i++){
        res = (res * a) % 10;
    }
    return res;
}

//cho 1 mảng gồm 3 mảng con có 2 phần từ là tọa độ của 3 điểm của hình vuông. Hãy tìm tọa độ của tâm của đường tròn nội tiếp hình vuông đó
//ví dụ [[-22, 16], [-14,6],[-4,14]] => [-13, 15]
function findCenterOfCircle(points){
    let x1 = points[0][0];
    let y1 = points[0][1];
    let x2 = points[1][0];
    let y2 = points[1][1];
    let x3 = points[2][0];
    let y3 = points[2][1];
    let A = x1 - x2;
    let B = y1 - y2;
    let C = x1 - x3;
    let D = y1 - y3;
    let E = ((x1*x1 - x2*x2) + (y1*y1 - y2*y2))/2;
    let F = ((x1*x1 - x3*x3) + (y1*y1 - y3*y3))/2;
    let x = (E*D - B*F)/(A*D - B*C);
    let y = (A*F - E*C)/(A*D - B*C);
    return [x,y];
}

/**
 * Hàm tìm ước chung lớn nhất của 2 số a, b
 */
function gcd(a, b) {
    if (b == 0) return a;
    return gcd(b, a % b);
}

/**
 * Hàm kiểm tra một số có phải số nguyên tố không
 */
function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) return false;
    }
    return true;
}

/**
 * Hàm kiểm tra 2 số a và b có ước chung lớn nhất có phải số nguyên tố không
 */
function isGCDPrime(a, b) {
    return isPrime(gcd(a, b));
}

/**
 * convert string camelCase to normal string with space
 */
function camelCaseConvert(s) {
    return s.replace(/([A-Z])/g, ' $1').trim();
}


console.log(camelCaseConvert('khaiXuanGiapThin'));

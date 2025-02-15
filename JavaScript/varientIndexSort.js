/**
 * Sắp xếp mảng arr sao cho các số ở vị trí có chỉ số là số nguyên tố tăng dần, 
 * các số ở vị trí có chỉ số không phải là số nguyên tố giảm dần
 */
function varientIndexSort(arr){
    let isPrime = (n) => {
        if(n < 2) return false;
        for(let i = 2; i <= Math.sqrt(n); i++) {
            if(n % i === 0) return false;
        }
        return true;
    }
    //Lấy các index là số nguyên tố
    let primeIndex = arr.map((el, index) => isPrime(index) ? index : -1).filter(el => el !== -1);
    //Lấy các index không phải là số nguyên tố
    let notPrimeIndex = arr.map((el, index) => !isPrime(index) ? index : -1).filter(el => el !== -1);
    //Lấy giá trị tại các index là số nguyên tố và sắp xếp tăng dần
    let primeValue = primeIndex.map(el => arr[el]).sort((a, b) => a - b);
    //Lấy giá trị tại các index không phải là số nguyên tố và sắp xếp giảm dần
    let notPrimeValue = notPrimeIndex.map(el => arr[el]).sort((a, b) => b - a);
    //Mảng kết quả là mảng các số tăng dần nếu ở vị trí là số nguyên tố, giảm dần nếu không phải
    let resultArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(primeIndex.includes(i)) {
            resultArr.push(primeValue.shift());
        } else {
            resultArr.push(notPrimeValue.shift());
        }
    }
    return resultArr;
}

console.log(varientIndexSort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0])); 
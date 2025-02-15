function countSquares(m, n) {
    var result = 0;
    if (m == 0 || n == 0) return 0;
    if (m == 1 || n == 1) return m * n;
    else {
        for (let i = 1; i <= m; i++) {
            result += (m - i) * (n - i);
        }
        return result + m * n;
    }
}

// cho một số nguyên a, viết chương trình tính tổng a + aa + aaa
//ví dụ a = 56 kết quả là 56 + 5656 + 565656
function sum(a) {
    return a + parseInt(a.toString() + a) + parseInt(a.toString() + a + a);
}

function countNumbers(arr, k) {
    let newArr = [...new Set(arr)];
    return newArr.filter((item) => item % k == 0).length;
}

//viết hàm kiểm tra một số có là số nguyên tố không, sử dụng cách veiét tối ưu hiệu ănng nhất
function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) return false;
    }
    return true;
}

//viết hàm kiểm tra một mảng có chứa các phần tử đều là số nguyên tố hay không, nếu đều là số nguyên tố hoặc đều không phải số nguyên tố thì trả về true
function isPrimeArray(arr) {
    return arr.every((item) => isPrime(item)) || arr.every((item) => !isPrime(item));
}

console.log(countNumbers([78,53,28,12,67,36,71,39,87,71], 3));

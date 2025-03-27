/**
 * Chuyển mảng arr thành mảng mới theo quy tắc
 * arr[i] thành phần tử lớn nhất từ vị trí i đến cuối mảng
 * @param {*} arr 
 */
function replaceArray(arr) {
    let n = arr.length;
    if (n === 0) return [];

    let result = new Array(n);
    result[n - 1] = arr[n - 1];

    for (let i = n - 2; i >= 0; i--) {
        result[i] = Math.max(arr[i], result[i + 1]);
    }

    return result;
}
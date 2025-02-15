/**
 * @param {*} arr: số các số nguyên lần lượt của các số 2, 3, 5, 6
 * @returns: tổng lớn nhất của 2 số 256 và 32 được tạo ra từ các số nguyên trong mảng
 */
function maximumSum(arr){
    //find the min of 2, 5, 6
    let min256 = Math.min(arr[0], arr[2], arr[3]);
    arr[0] -= min256;
    //find the min of 2, 3
    let min32 = Math.min(arr[0], arr[1]);
    return min256*256 + min32*32;
}

console.log(maximumSum([5, 1, 3, 4])); 
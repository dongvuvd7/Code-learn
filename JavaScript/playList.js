/**
 * Tìm chuỗi con dài nhất có các phẩn tử khác nhau trong mảng
 * @param {*} arr 
 */
function playList(arr){
    let maxLength = 0; // Độ dài tối đa của chuỗi con khác nhau
    let currentLength = 0; // Độ dài hiện tại của chuỗi con khác nhau
    let start = 0; // Vị trí bắt đầu của chuỗi con khác nhau

    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i], start) !== i) {
            // Nếu phần tử đã xuất hiện trước đó, cập nhật vị trí bắt đầu
            start = arr.indexOf(arr[i], start) + 1;
        }
        currentLength = i - start + 1;
        maxLength = Math.max(maxLength, currentLength);
    }

    return maxLength;
}
/**
 * Tìm số thao tác tối thiểu để sắp xếp mảng hoán vị
 * 
 * Bài toán: Cho một mảng arr là hoán vị của các số từ 1 đến n.
 * Thao tác cho phép: Chọn một phần tử bất kỳ, xóa khỏi vị trí hiện tại 
 * và chèn vào vị trí đầu tiên (bên trái nhất) của mảng.
 * 
 * Mục tiêu: Tìm số thao tác ít nhất để biến mảng thành [1, 2, 3, ..., n]
 * 
 * Ý tưởng: Các phần tử đã ở đúng thứ tự tương đối từ cuối mảng không cần di chuyển.
 * Chỉ cần di chuyển các phần tử còn lại.
 * 
 * @param {number[]} arr - Mảng hoán vị các số từ 1 đến n
 * @returns {number} - Số thao tác tối thiểu cần thực hiện
 */
function makeSortedArray(arr){
    const n = arr.length;
    
    // Tìm dãy con tăng dần dài nhất từ cuối mảng
    // Dãy này sẽ có dạng: ..., k, k+1, k+2, ..., n
    let longestIncreasingFromEnd = 0;
    let expectedValue = n;
    
    // Duyệt từ cuối mảng về đầu
    for (let i = n - 1; i >= 0; i--) {
        if (arr[i] === expectedValue) {
            longestIncreasingFromEnd++;
            expectedValue--;
        }
    }
    
    // Số thao tác cần thiết = tổng số phần tử - độ dài dãy con đã đúng vị trí
    return n - longestIncreasingFromEnd;
}
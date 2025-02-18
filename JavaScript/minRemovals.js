/**
 * Tìm số lượng phần tử nhỏ nhất trong mảng cần xóa đi sao cho max(arr) - min(arr) <= k
 * Nếu không xóa số nào return 1
 */
function minRemovals(arr,k){
    let n = arr.length;
    arr.sort((a,b) => a - b);
    let res = n;
    for (let i = 0; i < n; i++) {
        let j = i + 1;
        while (j < n && arr[j] - arr[i] <= k) {
            j++;
        }
        res = Math.min(res, n - (j - i));
    }
    return res;
}
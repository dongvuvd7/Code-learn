/**
 * Find index of arr which sum from 0 to index is maximum and less than n
 */
function calGift(arr,n){
    let sum = 0;
    let maxIndex = -1;
    for(let i = 0; i<arr.length; i++) {
        sum += arr[i];
        if(sum > n) {
            break;
        }
        maxIndex = i;
    }
    return maxIndex;
}
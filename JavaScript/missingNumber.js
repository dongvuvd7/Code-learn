function missingNumber(arr,k){
    //max of array arr
    let max = Math.max(...arr);
    //for each number from 1 to max
    for(let i = 1; i <= max; i++){
        //if i is not in arr
        if(!arr.includes(i)){
            //if k is 1, return i
            if(k == 1) return i;
            //decrement k
            k--;
        }
    }
    //if all numbers from 1 to max are in arr, return max + k
    return max + k;
}

console.log(missingNumber([1,2,3,4], 2));
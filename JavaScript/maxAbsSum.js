function maxAbsSum(arr){
    //new array sorted in ascending order
    let sorted = [...arr.sort((a,b) => a - b)];
    // console.log(sorted);
    //new array sorted in descending order
    let sortedDesc = [...arr.sort((a,b) => b - a)];
    // console.log(sortedDesc);
    //make new array by odd index from sorted and even index from sortedDesc
    let newArr = [];
    let a = 0, b = 0;
    for(let i = 0; i < arr.length; i++){
        if(i % 2 == 0) {
            newArr.push(sorted[a]);
            a++;
        }
        else {
            newArr.push(sortedDesc[b]);
            b++;
        }
        // console.log(newArr);
    }
    // console.log(newArr);
    //initialize sum
    let sum = 0;
    for(let i = 0; i < newArr.length - 1; i++){
        sum += Math.abs(newArr[i] - newArr[i + 1]);
    }
    //add the difference between the first and last element
    sum += Math.abs(newArr[0] - newArr[newArr.length - 1]);
    return sum;
}

console.log(maxAbsSum([1,2,4,8]));

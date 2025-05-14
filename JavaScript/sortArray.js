function sortArray(arr,other){
    //result array 
    let result = [];
    // Sort the arr array in ascending order
    let cloneArr = arr.slice(0);
    cloneArr.sort((a, b) => a - b);
    //
    let j = 0;
    for(let i = 0; i < arr.length; i++){
        //Check if other contains the element of arr
        if(other.includes(arr[i])){
            //If it contains, push the element to the result array
            result.push(arr[i]);
        }
        //If it doesn't contain
        else{
            //Get value of cloneArr[j] which not equal to arr[i]
            while(other.includes(cloneArr[j])){
                j++;
            }
            //Push the value of cloneArr[j] to the result array
            result.push(cloneArr[j]);
            //Increase j by 1
            j++;
        }
    }
    //Return the result array
    return result;
}

// Test the function
console.log(sortArray([2,3,1,43,5,3,5,2,1,1,1], [1, 2]));
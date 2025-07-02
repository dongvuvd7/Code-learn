function smashStone(arr){
    while(arr.length > 1) {
        //sort the array in descending order
        arr.sort((a, b) => b - a);
        //take the first two elements
        let first = arr.shift();
        let second = arr.shift();
        //if the first element is greater than the second element, subtract the second from the first
        if(first > second) {
            arr.push(first - second);
        }
    }
    //if the array is empty, return 0
    if(arr.length === 0) {
        return 0;
    }
    //return the only element in the array
    return arr[0];
}
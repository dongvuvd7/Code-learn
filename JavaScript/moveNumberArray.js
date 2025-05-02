function moveNumberArray(a){
    let oddArr = [], evenArr = [];
    for(let i = 0; i < a.length; i++){
        if(a[i] % 2 === 0){
            evenArr.push(a[i]);
        }else{
            oddArr.push(a[i]);
        }
    }
    let result = evenArr.concat(oddArr);
    return result;
}
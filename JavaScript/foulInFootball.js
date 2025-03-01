function foulInFootball(a){
    let arrCount = [0,0,0,0,0,0,0,0,0,0,0,0];
    let resArr = [];
    for(let i = 0; i < a.length; i++){
        arrCount[a[i]]++;
        if(arrCount[a[i]] == 3) {
            resArr.push(a[i]);
            arrCount[a[i]] = 0;
        }
    }
    return resArr;
}

console.log(foulInFootball([2,4,3,2,3,7,3,2]));
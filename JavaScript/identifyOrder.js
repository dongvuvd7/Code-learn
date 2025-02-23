function identifyOrder(a){
    let resultArr = [];
    //Tạo mảng sortArr là mảng a được sắp xếp giảm dần, mảng a không bị thay đổi
    let sortArr = a.slice().sort((a,b) => b - a);
    //Mảng resultArr[i] là index của a[i] trong mảng sortArr
    for(let i = 0; i < a.length; i++){
        resultArr.push(sortArr.indexOf(a[i]) + 1);
    }
    return resultArr;
}
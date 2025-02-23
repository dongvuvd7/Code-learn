function cooperate(t,m,n){
    //concat arr t and m
    let arr = t.concat(m);
    let setArr = new Set(arr);
    //return true if arr contain value element form 1 to t
    for(let i = 1; i <= n; i++){
        if(!setArr.has(i)){
            return false;
        }
    }
    return true;
}
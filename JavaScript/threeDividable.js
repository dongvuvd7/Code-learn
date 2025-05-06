function threeDividable(a,b){
    let sumOdd = 0;
    for(let i=a+1; i<=b-1; i++) {
        if(i % 2 == 1) {
            sumOdd += i;
        }
    }
    return sumOdd % 3;
}
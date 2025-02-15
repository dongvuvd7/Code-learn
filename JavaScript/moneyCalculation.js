function moneyCalculation(t,l,n){
    let count = 0;
    while(t < n) {
        count++;
        t += t*(l/100);
        // console.log(t);
    }
    return count;
}

console.log(moneyCalculation(100, 20, 170));
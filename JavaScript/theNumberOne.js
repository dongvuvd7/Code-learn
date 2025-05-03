function theNumberOne(n){
    if(n == 0) return true;
    if(n <= 2) return false;
    let oddDivide = 0, evenDivide = 0;
    for(let i = 2; i <= n/2; i++){
        if(n % i === 0){
            if(i % 2 === 0){
                evenDivide++;
            }else{
                oddDivide++;
            }
        }
    }

    return oddDivide == evenDivide;
}
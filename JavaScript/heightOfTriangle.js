function heightOfTriangle(n){
    if(n <= 1) return 1;
    let x = Math.floor(Math.sqrt(2 * n));
    for(let i = x; i >= 1; i--){
        let sum = i * (i + 1) / 2;
        if(sum <= n){
            return i;
        }
    }
    return 1;
}
function salePrices(sale){
    let maxDiff = 0;
    for(let i = 0; i<sale.length - 1; i++) {
        for(let j=i+1; j<=sale.length; j++) {
            let diff = sale[j] - sale[i];
            if(diff > maxDiff) {
                maxDiff = diff;
            }
        }
    }
    return maxDiff;
}
function plusMinus(arr){
    let positiveCount = 0;
    let negativeCount = 0;
    let zeroCount = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > 0) {
            positiveCount++;
        } else if(arr[i] < 0) {
            negativeCount++;
        } else {
            zeroCount++;
        }
    }
    let totalCount = arr.length;
    let positiveRatio = (positiveCount / totalCount).toFixed(6);
    let negativeRatio = (negativeCount / totalCount).toFixed(6);
    let zeroRatio = (zeroCount / totalCount).toFixed(6);
    return [
        +positiveRatio,
        +negativeRatio,
        +zeroRatio
    ];
}
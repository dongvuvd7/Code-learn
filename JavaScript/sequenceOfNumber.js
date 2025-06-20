function sequenceOfNumber(a1, n) {
    let arr = [a1];
    n--;
    
    let value = 0;
    while (n !== 0) {
        value = (arr[arr.length - 1] * arr[arr.length - 1]) % 10000;
        if (arr.includes(value)) {
            break;
        }
        arr.push(value);
        n--;
    }
    
    return arr[arr.indexOf(value) + (n - 1) % (arr.length - arr.indexOf(value))];
}
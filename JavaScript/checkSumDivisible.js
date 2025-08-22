function checkSumDivisible(n) {
    let sumOfN = 0;
    for (let i = 0; i < n.length; i++) {
        sumOfN += +n[i];
    }
    for (let i = 0; i < n.length; i++) {
        if (sumOfN % +n[i] !== 0) {
            return false;
        }
    }
    return true;
}

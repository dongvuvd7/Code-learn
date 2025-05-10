function beautifulNumber(n) {
    n = BigInt(n);
    const maxN = 2n * (10n ** 18n);
    const powers = [];
    let pow = 1n;
    while (pow <= maxN) {
        powers.push(pow);
        pow *= 3n;
    }
    
    function sumOfPowers(k) {
        let sum = 0n;
        for (let i = 0; i < powers.length; i++) {
            if (k & (1n << BigInt(i))) {
                sum += powers[i];
            }
        }
        return sum;
    }
    
    let low = 0n;
    let high = (1n << BigInt(powers.length)) - 1n;
    while (low < high) {
        let mid = low + (high - low) / 2n;
        let sum = sumOfPowers(mid);
        if (sum >= n) {
            high = mid;
        } else {
            low = mid + 1n;
        }
    }
    return sumOfPowers(low).toString();
}
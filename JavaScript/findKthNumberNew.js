function findKthNumber(n) {
    let currentMax = 0;
    let k = 1;
    let pos = 0;
    while (true) {
        let a = currentMax + 1;
        let m = Math.floor((a + k - 1) / k);
        let needed = n - pos;
        if (needed <= k) {
            return k * (m + needed - 1);
        }
        pos += k;
        currentMax = k * (m + k - 1);
        k++;
    }
}

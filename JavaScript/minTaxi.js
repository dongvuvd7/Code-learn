function minTaxi(n, a) {
    let count = 0;
    
    // Create frequency array
    let freq = new Array(5).fill(0);
    for (let num of a) {
        freq[num]++;
    }
    
    // 1. Handle groups of 4
    count += freq[4];
    
    // 2. Handle groups of 3
    count += freq[3];
    let remaining1 = freq[1] - Math.min(freq[3], freq[1]); // Subtract 1s used with 3s
    freq[1] = Math.max(0, remaining1);
    
    // 3. Handle groups of 2
    count += Math.floor(freq[2] / 2);
    freq[2] %= 2;
    
    // 4. Handle remaining groups
    let remaining = freq[1] + (freq[2] * 2); // Convert remaining 2s to equivalent 1s
    
    if (freq[2] === 1) {
        if (freq[1] <= 2) {
            count += 1;
            remaining = 0;
        } else {
            count += 1;
            remaining -= 2; // Use up to 2 ones with the remaining 2
        }
    }
    
    // 5. Handle remaining 1s
    if (remaining > 0) {
        count += Math.ceil(remaining / 4);
    }
    
    return count;
}
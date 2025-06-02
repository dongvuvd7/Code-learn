function gcdCompression(n){
    // Trường hợp đặc biệt khi n <= 3
    if (n <= 3) {
        return 1;
    }
    
    // Ước chung lớn nhất có thể của hai số trong dãy [1...n] là ⌊n/2⌋
    return Math.floor(n / 2);
}
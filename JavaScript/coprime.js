function coprime(a, b){
    // Tính GCD inline
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    
    return a === 1 ? 1 : -1;
}
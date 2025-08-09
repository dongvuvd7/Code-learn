function checkTwoPiles(n,m){
    if(n < m / 2 || m < n / 2){
        return false;
    }
    return (n + m) % 3 == 0;
}
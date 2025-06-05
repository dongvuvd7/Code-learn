function equilateralTriangle(a,b,c){
    //check if a == b > c or a == c > b or b == c > a
    if(a == b && a > c || a == c && a > b || b == c && b > a){
        return a + b + c;
    }
    return -1;
}
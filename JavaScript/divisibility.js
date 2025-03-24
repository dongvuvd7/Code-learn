function divisibility(a,b){
    //Tìm bội số nhỏ nhất của b sao cho >= a
    let result = Math.ceil(a/b)*b;
    return result - a;
}
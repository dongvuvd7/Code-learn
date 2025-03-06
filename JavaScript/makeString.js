function makeString(str){
    if(str.length === 0) return 0;
    if(str.length === 1) return 1;
    let count = 1, tempChar = str[0];
    for (let i = 0; i < str.length; i++){
        if (str[i] != tempChar) {
            count++;
            tempChar = str[i];
        }
    }
    return count;
}
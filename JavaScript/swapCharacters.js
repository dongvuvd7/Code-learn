function swapCharacters(str1,str2){
    if(str1.length !== str2.length || str1.length < 2 || str2.length < 2) {
        return false;
    }
    if(str1 === str2 && str1.length == 2 && str1[0] != str1[1]) {
        return false;
    }
    let sortedStr1 = str1.toLowerCase().split('').sort().join('');
    let sortedStr2 = str2.toLowerCase().split('').sort().join('');
    if(sortedStr1 !== sortedStr2) {
        return false;
    }
    return true
}
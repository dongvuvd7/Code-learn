function countNumbersLucky(n,m){
    //result
    let count = 0;
    //convert n to string
    let nStr = n.toString();
    //length of nStr
    let nLength = nStr.length;
    if(nLength > m) {
        return 0;
    }
    //count lucky numbers
    for(let i=1; i<m; i++) {
        //i is lucky number if postfix of i is equal to nStr
        let iStr = i.toString();
        let iLength = iStr.length;
        //check if i is lucky number
        if(iLength >= nLength) {
            let postfix = iStr.substring(iLength - nLength, iLength);
            if(postfix === nStr) {
                count++;
            }
        }
    }
    //return result
    return count;
}
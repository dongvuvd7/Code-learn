function longestUncommonSubsequence(s1,s2){
    if(s1 === s2){
        return -1;
    }
    return Math.max(s1.length, s2.length);
}
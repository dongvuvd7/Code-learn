function choosingMembers(n){
    if(n < 3) return 0;
    return n*(n-1)*(n-2);
}
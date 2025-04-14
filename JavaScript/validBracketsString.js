function validBracketsString(s){
    if(s.length === 0) return true;
    if(s[0] == ')') return false;
    let countLeft = 0, countRight = 0;
    for(let i = 0; i < s.length; i++){
        if(s[i] == '(') countLeft++;
        if(s[i] == ')') countRight++;
        if(s[i] != '(' && s[i] != ')') return false;
    }
    if(countLeft == countRight) return true;
    return false;
}

function stoneCutting(l,b){
    if(l < 3 && b < 3) return "NO" + " " + l*b;
    else if(l < 3 && b > 3 && b%3 != 0) return "NO" + " " + (b%3)*l;
    else if(l > 3 && b < 3 && l%3 != 0) return "NO" + " " + (l%3)*b;
    else if ((l*b)%3 == 0) return "YES";
    else return "NO" + " " + (l*b)%3;
}


console.log(stoneCutting(2, 2));

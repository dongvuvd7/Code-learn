/**
 * return 1 if x^y > y^x, -1 if x^y < y^x, and 0 if x^y = y^x
 */
function petsGame(x,y){
    let val1 = y * Math.log(x);
    let val2 = x * Math.log(y);
    if(val1 > val2){
        return 1;
    } else if(val1 < val2){
        return -1;
    } else {
        return 0;
    }
}
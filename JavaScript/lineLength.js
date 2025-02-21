/**
 * A line is defined by two points (x1, y1) and (x2, y2)
 * arr = [x1, y1, x2, y2]
 * return the length of the line AB, rounded to two decimal places
 */
function lineLength(arr){
    let x1 = arr[0];
    let y1 = arr[1];
    let x2 = arr[2];
    let y2 = arr[3];
    return +Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)).toFixed(2);
}
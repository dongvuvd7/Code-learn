function plusFraction(arr){
    let a = arr[0] * arr[3] + arr[2] * arr[1];
    let b = arr[1] * arr[3];
    return [a/uocChungLonNhat(a, b), b/uocChungLonNhat(a, b)];
}

function uocChungLonNhat(a, b){
    if (b === 0) return a;
    return uocChungLonNhat(b, a % b);
}

console.log(plusFraction([1, 2, 3, 4]));

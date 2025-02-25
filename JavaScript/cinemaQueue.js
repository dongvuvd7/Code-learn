function cinemaQueue(arr){
    let d = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 25) {
            d += 25;
        } else if (arr[i] == 50) {
            d -= 25;
            if (d < 0) return false;
        } else {
            d -= 75;
            if (d < 0) return false;
        }
    }
    return true;
}
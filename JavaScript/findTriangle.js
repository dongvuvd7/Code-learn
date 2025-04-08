function findTriangle(arr){
    //Nếu có số 0 trong mảng trả về -1
    if(arr.includes(0)){
        return -1;
    }
    // Sắp xếp mảng theo thứ tự tăng dần
    arr.sort((a, b) => a - b);
    if(arr[0] * arr[0] + arr[1] * arr[1] != arr[2] * arr[2]){
        return -1;
    }
    return arr[2];
}
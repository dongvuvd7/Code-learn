function perpendicularLine(arr){
    let x1 = arr[0][0] - arr[1][0]; // Tọa độ x1
    let y1 = arr[0][1] - arr[1][1]; // Tọa độ y1
    let x2 = arr[2][0] - arr[3][0]; // Tọa độ x2
    let y2 = arr[2][1] - arr[3][1]; // Tọa độ y2
    return x1 * y2 + x2 * y1 == 0; // Kiểm tra điều kiện vuông góc
}

console.log(perpendicularLine([[1,-1], [2, -2], [-1, -1], [-2, -2]]));
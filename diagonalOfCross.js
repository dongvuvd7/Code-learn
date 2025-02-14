function diagonalOfCross(S){
    //trả về căn bậc 2 của 2*S, kết quả làm tròn đến một chữ số thập phân
    return Math.sqrt(2*S).toFixed(1);
}

console.log(diagonalOfCross(5));
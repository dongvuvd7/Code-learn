
/**
 * Cho n số a1, a2, a3, ..., an. Tìm ra k số trong n với k số đó là b1, b2, b3, ..., bk sao cho SumOR = b1 OR b2 OR b3 OR ... OR bk là lớn nhất
 * Trả về giá trị lớn nhất của SumOR
 */
function solve(n,k,a){
    let res = 0;
    a.slice(0, k);
    a.forEach((i) => res = res|i);
    return res;
}

console.log(solve(5,3,[1,2,3,4,5])); // 7
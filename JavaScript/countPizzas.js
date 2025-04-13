function countPizzas(n){
    let res = Math.floor(n / 5);
    let vo = res;
    while(vo >= 3) {
        let more = Math.floor(vo / 3);
        res += more;
        vo = more + (vo % 3);
    }
    return res;
}

console.log(countPizzas(45));
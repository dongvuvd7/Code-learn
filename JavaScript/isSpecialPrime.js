function isSpecialPrime(n){
    //Kiểm tra lần lượt xem số n, số n bỏ 1 số cuối, số n bỏ 2 số cuối, số n bỏ 3 số cuối,... có phải số nguyên tố không
    for(let i = 0; i < n.toString().length; i++){
        if(!isPrime(parseInt(n.toString().slice(0, n.toString().length - i)))) return false;
    }
    return true;
}

function isPrime(num){
    if(num < 2) return false;
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0) return false;
    }
    return true;
}
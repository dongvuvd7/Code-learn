function jumpOverTheObstacles(s,n,max,arr){
    for(let i = 0; i < arr.length; i++) {
        if(max < arr[i]) return false;
        else {
            while(n < arr[i] && s > 3) {
                s -= 3;
                n += 6;
            }
            if(n < arr[i]) return false;
            else {
                n -= arr[i];
                s -= 1;
            }
            if(s < 0) return false;
        }
    }
    return true;
}

console.log(jumpOverTheObstacles(10,3,10,[1,2,3,4]));
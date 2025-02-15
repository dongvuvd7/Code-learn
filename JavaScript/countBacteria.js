function countBacteria(x){
    let count = 0, initVirus = 0;
    while(x > 0) {
        count++;
        initVirus = 1;
        while(x >= initVirus) {
            initVirus *= 2;
        }
        x -= initVirus / 2;
    }
    return count;
}


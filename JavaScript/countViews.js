function countViews(views){
    let count = 0;
    for (let i = 0; i < views.length; i++){
        if (views[i] >= 11){
            count++;
        }
    }
    return count;
}
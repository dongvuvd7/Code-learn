function differentChar(s1, s2) {
    let setS1 = new Set(s1);
    let setS2 = new Set(s2);
    //đếm số lượng ký tự có ở s1 nhưng không có ở s2
    let count1 = 0;
    for (let char of setS1) {
        if (!setS2.has(char)) {
            count1++;
        }
    }
    return count1;
}

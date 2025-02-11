
function groupsIn(n) {
    if (n == 0) return 2;
    let m = 0;
    if (n > 0) m += 1;
    if (n < 0) m++;
    if (-500 <= n && n <= 500) m++;
    if (n < 0) return m;
    return ++m;
}


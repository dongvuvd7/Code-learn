function compareVirus(s1, s2) {
    if (s1.length !== s2.length) return false;
    //set chars of s1 to a set
    const set1 = new Set(s1);
    const set2 = new Set(s2);
    //check if set1 and set2 are equal
    if (set1.size !== set2.size) return false;
    return true;
}

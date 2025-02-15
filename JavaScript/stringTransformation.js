/**
 * Given two strings s and t, both consisting of lowercase English letters and digits, your task is to calculate how many ways exactly one digit could be removed from one of the strings so that s is lexicographically smaller than t after the removal. Note that we are removing only a single instance of a single digit, rather than all instances (eg: removing 1 from the string a11b1c could result in a1b1c or a11bc, but not abc).
 * @param {*} s 
 * @param {*} t 
 */
function stringTransformation(s,t){
    let vowels = ['a','e','i','o','u'];
    if(s.length != t.length) return false;
    for(let i=0; i<s.length; i++){
        if(vowels.includes(s[i]) && !vowels.includes(t[i])) return false;
        if(!vowels.includes(s[i]) && vowels.includes(t[i])) return false;
    }
    return true;
}
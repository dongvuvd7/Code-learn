/**
 * Đếm số lần chuỗi s2 xuất hiện trong chuỗi s1, sau mỗi một lần thì xóa chuỗi s2 ở vị trí đó và tiếp tục đếm
 */
function countSubstring(s1,s2){
    var count = s1.split(s2);
    return count;
}

console.log(countSubstring("abccdbcdacd","cd"));
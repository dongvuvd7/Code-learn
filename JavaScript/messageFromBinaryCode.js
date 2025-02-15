/**
 * convert binary code string to a ascii string
 */
function messageFromBinaryCode(code){
    return code.match(/.{8}/g).map((x) => String.fromCharCode(parseInt(x, 2))).join('');
}

console.log(messageFromBinaryCode("010010000110010101101100011011000110111100100001")); // "Hello!"
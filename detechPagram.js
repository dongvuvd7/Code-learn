
/**
 * A pangram is a sentence that contains every single letter from a to z at least once.
 */
function isPangram(string){
    return new Set(string.toLowerCase().replace(/[^a-z]/g, '')).size === 26;
}

console.log(isPangram('The quick brown fox jumps over the lazy dog.')); // true
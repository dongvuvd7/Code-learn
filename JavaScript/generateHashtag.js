function generateHashtag(str){
    if(str === '') return "wrong";
    //first letter of each word is capitalized and other letters are in lowercase
    let hashtag = str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join('');
    return hashtag.length > 139 || hashtag === '' ? "wrong" : '#' + hashtag;
}
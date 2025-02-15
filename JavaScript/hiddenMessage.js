function hiddenMessage(s){
    //Tách chuỗi s thành mảng các chuỗi con
    let arr = s.split(" ");
    //Với mỗi chuỗi con trong mảng, thực hiện đảo ngược chuỗi con đó, nếu chuỗi chứa các ký tự in hoa thì thực hiện lần lượt đưa các ký tự in hoa lên đầu chuỗi
    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i].split("").reverse().join("");
        if(arr[i].match(/[A-Z]/g)){
            let upper = arr[i].match(/[A-Z]/g);
            for(let j = upper.length - 1; j >= 0; j--){
                arr[i] = arr[i].replace(upper[j], "");
                arr[i] = upper[j] + arr[i];
            }
        }
    }
    //trả về chuỗi đã được xử lý và nối các chuỗi con lại với nhau cách nhau bởi dấu cách
    return arr.join(" ");
}

console.log(hiddenMessage("BaC")); //CBADGFIEHC
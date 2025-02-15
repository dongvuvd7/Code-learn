function id(url){
    //Nếu chuỗi có /watch?v= thì lấy id sau nó
    if(url.indexOf("/watch?v=") > -1){
        return url.split("/watch?v=")[1];
    }
    //Nếu chuỗi có .be/ thì lấy id sau nó
    if(url.indexOf(".be/") > -1){
        return url.split(".be/")[1];
    }
}
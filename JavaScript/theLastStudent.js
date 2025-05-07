function theLastStudent(paragraph,listStudent){
    let i = paragraph % listStudent.length;
    if(i == 0){
        i = listStudent.length;
    }
    return listStudent[i - 1];
}
function possibleName(name, typed) {
    // Nếu name và typed giống nhau, trả về true
    if (name === typed) {
        return true;
    }

    // Nếu ký tự cuối của name khác ký tự cuối của typed, trả về false
    if (name[name.length - 1] !== typed[typed.length - 1]) {
        return false;
    }

    // Tạo set từ name và typed
    let nameSet = [...new Set(name)];
    let typedSet = [...new Set(typed)];

    // So sánh 2 set, nếu giống nhau thì trả về true, ngược lại trả về false
    if(nameSet.join('') === typedSet.join('')) return true;
    else return false
}

console.log(possibleName('aba', 'abb'));
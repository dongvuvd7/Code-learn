function numberNeed(a, b) {
    //Lấy các phần tử xuất hiện trong mảng a mà không có trong mảng b
    //Phần tử trùng bao nhiêu lần lấy bấy nhiêu lần
    let aClone = a.slice(); // sao chép mảng a
    let bClone = b.slice(); // sao chép mảng b
    let result = [];
    for (let i = 0; i < aClone.length; i++) {
        let index = bClone.indexOf(aClone[i]);
        if (index === -1) {
            // Nếu không tìm thấy phần tử trong b, thêm vào kết quả
            result.push(aClone[i]);
        } else {
            // Nếu tìm thấy, xóa phần tử khỏi bClone để tránh trùng lặp
            bClone.splice(index, 1);
        }
    }
    aClone = a.slice(); // sao chép mảng a
    bClone = b.slice(); // sao chép mảng b
    //Lấy các phần tử xuất hiện trong mảng b mà không có trong mảng a
    //Phần tử trùng bao nhiêu lần lấy bấy nhiêu lần
    for (let i = 0; i < bClone.length; i++) {
        let index = aClone.indexOf(bClone[i]);
        if (index === -1) {
            // Nếu không tìm thấy phần tử trong a, thêm vào kết quả
            result.push(bClone[i]);
        } else {
            // Nếu tìm thấy, xóa phần tử khỏi aClone để tránh trùng lặp
            aClone.splice(index, 1);
        }
    }
    //Trả về mảng kết quả, sắp xếp theo thứ tự tăng dần
    return result.sort((x, y) => x - y);
}

console.log(numberNeed([7, 2, 5, 6, 9], [7, 2, 2, 4, 5, 6, 8, 9]));

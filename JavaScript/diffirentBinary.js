function diffirentBinary(a, b) {
    // Chuyển hai số thập phân sang nhị phân
    let binaryA = a.toString(2);
    let binaryB = b.toString(2);

    // Đảm bảo hai chuỗi nhị phân có cùng độ dài bằng cách thêm các số 0 vào đầu chuỗi ngắn hơn
    while (binaryA.length < binaryB.length) {
        binaryA = '0' + binaryA;
    }
    while (binaryB.length < binaryA.length) {
        binaryB = '0' + binaryB;
    }

    // Đếm số vị trí mà các bit tương ứng khác nhau
    let diffCount = 0;
    for (let i = 0; i < binaryA.length; i++) {
        if (binaryA[i] !== binaryB[i]) {
            diffCount++;
        }
    }

    return diffCount;
}
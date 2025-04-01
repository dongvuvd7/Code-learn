function minimumTowers(arr) {
    let towersCount = 0; // Biến đếm số tháp
    let n = arr.length; // Độ dài mảng
    let towersArr = []; // Mảng chứa các mảng con (các tháp)

    for (let i = 0; i < arr.length; i++) {
        if (i === 0) {
            // Thêm arr[i] vào mảng con đầu tiên trong towersArr
            towersArr.push([arr[i]]);
            towersCount++; // Tăng biến đếm số tháp lên 1
        } else {
            // Lấy phần tử cuối cùng của mỗi mảng con trong towersArr
            let lastElements = towersArr.map(tower => tower[tower.length - 1]);

            // Tính minDiff cho mỗi phần tử cuối cùng trong towersArr - arr[i]
            let minDiffs = lastElements.map(last => last - arr[i]);

            // Kiểm tra nếu tất cả các phần tử minDiff đều <= 0
            if (minDiffs.every(diff => diff <= 0)) {
                // Tạo một mảng con mới trong towersArr và thêm arr[i] vào
                towersArr.push([arr[i]]);
                towersCount++; // Tăng biến đếm số tháp lên 1
            } else {
                // Mảng con nào có minDiff nhỏ nhất thì thêm arr[i] vào mảng con đó
                let minTowerIndex = minDiffs.indexOf(Math.min(...minDiffs.filter(diff => diff > 0)));
                towersArr[minTowerIndex].push(arr[i]);
            }
        }
    }

    return towersCount;
}
/**
 * Sắp xếp mảng File theo giá trị của mảng Memory tương ứng từng vị trí
 * Nếu n lẻ sắp xếp giảm dần, nếu n chẵn sắp xếp tăng dần
 * @param {*} File 
 * @param {*} Memory 
 * @param {*} n 
 */
function desktopSorted(File, Memory, n) {
    // Kiểm tra nếu Memory chứa số âm
    if (Memory.some(value => value <= 0) || n <= 0 || File.length !== Memory.length || File.length === 0 || Memory.length === 0) {
        return [];
    }

    // Tạo mảng các cặp [Memory, File]
    let pairedArray = File.map((file, index) => [Memory[index], file]);

    // Sắp xếp mảng các cặp theo giá trị của Memory
    pairedArray.sort((a, b) => {
        if (a[0] === b[0]) {
            // Nếu giá trị Memory bằng nhau, so sánh giá trị File theo thứ tự bảng mã ASCII
            if (n % 2 === 0) {
                return a[1].localeCompare(b[1]);
            } else {
                return b[1].localeCompare(a[1]);
            }
        } else {
            if (n % 2 === 0) {
                // Sắp xếp tăng dần nếu n chẵn
                return a[0] - b[0];
            } else {
                // Sắp xếp giảm dần nếu n lẻ
                return b[0] - a[0];
            }
        }
    });

    // Trích xuất lại mảng File đã sắp xếp
    let sortedFiles = pairedArray.map(pair => pair[1]);

    return sortedFiles;
}
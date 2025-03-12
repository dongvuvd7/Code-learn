/**
 * Tìm số trong ma trận sao cho số đó nhỏ nhất trong hàng và lớn nhất trong cột
 * Nếu không có số nào thì trả về -1
 * @param {*} arr: ma trận n*m 
 */
function luckyNumber(arr){
    let minInRow = new Array(arr.length).fill(Infinity);
    let maxInCol = new Array(arr[0].length).fill(-Infinity);
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            minInRow[i] = Math.min(minInRow[i], arr[i][j]);
            maxInCol[j] = Math.max(maxInCol[j], arr[i][j]);
        }
    }
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            if(arr[i][j] == minInRow[i] && arr[i][j] == maxInCol[j]) return arr[i][j];
        }
    }
    return -1;
}
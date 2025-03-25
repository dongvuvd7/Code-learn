/**
 * Từ mảng arr tạo ra các mảng mới mà độ chênh lệch tuyệt đối giữa 2 phần tử bất kỳ của mảng <= 1
 * @param {*} arr 
 */
function findDigits(arr){
    let listArr = []; //mảng chứa các mảng con
    function handler(arr, listArr) {
        let temp = []; //mảng tạm
        //Thêm phần tử đầu tiên vào mảng
        temp.push(arr[0]);
        //Loại bỏ phần tử đầu tiên trong mảng arr
        arr.shift();
        console.log(temp, 'temp');
        console.log(arr, 'arr');
        //Duyệt qua từng phần tử trong mảng arr xem phần tử nào thỏa mãn điều kiện thì thêm vào mảng tạm và loại bỏ phần tử đó khỏi mảng arr
        for(let i = 0; i < arr.length; i++){
            //Lấy min và max trong mảng tạm
            let min = Math.min(...temp);
            let max = Math.max(...temp);
            if(Math.abs(min - arr[i]) <= 1 && Math.abs(max - arr[i]) <= 1){
                temp.push(arr[i]);
                arr.splice(i, 1);
                i--;
            }
        }
        console.log(temp, 'temp');
        //Thêm mảng tạm vào mảng chứa các mảng con
        listArr.push(temp);
        //Trả ra listArr và arr
        return [listArr, arr];
    }
    console.log(listArr, 'listArr');
    console.log(arr, 'arr');
    //Nếu mảng arr còn phần tử thì gọi đệ quy
    while(arr.length > 0){
        console.log('gọi đệ quy');
        //Gọi hàm handler và truyền vào mảng arr và listArr và cập nhật lại giá trị của listArr và arr
        [listArr, arr] = handler(arr, listArr);
    }
    //Trả ra độ dài lớn nhất trong các mảng con của listArr
    console.log(listArr, 'mảng kết quả');
    return Math.max(...listArr.map(item => item.length));
}

console.log(findDigits([84,43,11,41,2,99,31,32,56,53,42,14,98,27,64,57,16,33,48,21,46,61,87,90,28,12,62,49,29,77,82,70,80,89,95,52,13,19,9,79,35,67,51,39,7,1,66,8,17,85,71,97,34,73,75,6,91,40,96,65,37,74,20,68,23,47,76,55,24,3,30,22,55,5,69,86,54,50,10,59,15,4,36,38,83,60,72,63,78,58,88,93,45,18,94,44,92,81,25,26]));
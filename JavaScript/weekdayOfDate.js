/**
 * Cho biết ngày 01/08/2020 là thứ 7
 * Tính xem ngày day/08/year là thứ mấy
 * Kết quả trả về từ 2 -> 8 tương ứng với thứ 2 -> chủ nhật
 */
function weekdayOfDate(day,year){
    let month = 8;
    let date = new Date(`${year}-${month}-${day}`);
    let weekday = date.getDay();
    return weekday === 0 ? 8 : weekday + 1;
}
function dayOfTheWeek(day, month, year){
    // Tạo đối tượng Date từ tham số đầu vào
    // Lưu ý: tháng trong JavaScript bắt đầu từ 0 (0 là tháng 1)
    const date = new Date(year, month - 1, day);
    
    // Lấy ra thứ trong tuần (0: Chủ nhật, 1: Thứ hai, ..., 6: Thứ bảy)
    const dayNumber = date.getDay();
    
    // Mảng tên các thứ trong tuần theo định dạng đầu ra yêu cầu
    const daysOfWeek = [
        "Sunday", 
        "Monday", 
        "Tuesday", 
        "Wednesday", 
        "Thursday", 
        "Friday", 
        "Saturday"
    ];
    
    // Trả về tên thứ tương ứng
    return daysOfWeek[dayNumber];
}
function clockTime(time) {
    // Tách giờ và phút
    const [hourStr, minuteStr] = time.split(':');
    let h = parseInt(hourStr);
    let m = parseInt(minuteStr);
    
    // Chuyển giờ 0 thành 12
    h = h === 0 ? 12 : h;
    
    // Vị trí ban đầu
    let hourPos = h;         // Vị trí kim giờ
    let minutePos = m / 5;   // Vị trí kim phút
    
    // Tính số phút để kim phút đến hourPos
    let minuteTarget = hourPos * 5;  // Vị trí kim phút cần đến (tính bằng phút)
    let minutesToMinuteTarget = (minuteTarget - m + 60) % 60;  // Số phút cần để kim phút đến đích
    
    // Tính số lần kim giờ tăng thêm
    let totalMinutes = 60 * h + m + minutesToMinuteTarget;
    let extraHours = Math.floor((m + minutesToMinuteTarget) / 60);
    let newHourPos = (h + extraHours) % 12;
    
    // Nếu kim giờ chưa đến vị trí mong muốn (minutePos), cần thêm chu kỳ
    let t = minutesToMinuteTarget;
    while (newHourPos !== minutePos) {
        t += 60;  // Thêm 1 giờ (chu kỳ của kim phút)
        totalMinutes = 60 * h + m + t;
        extraHours = Math.floor((m + t) / 60);
        newHourPos = (h + extraHours) % 12;
    }
    
    // Chuyển thành định dạng hh:mm
    let resultHour = Math.floor(t / 60);
    let resultMinute = t % 60;
    
    return `${resultHour.toString().padStart(2, '0')}:${resultMinute.toString().padStart(2, '0')}`;
}

// Test cases
console.log(clockTime("04:25")); // "00:55"
console.log(clockTime("01:00")); // "11:05"
console.log(clockTime("12:00")); // "11:00"
console.log(clockTime("00:00")); // "00:00"
console.log(clockTime("11:55")); // "00:55"
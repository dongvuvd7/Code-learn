/**
 * BÀI TOÁN: MAX NUMBER KTH - TÌM SỐ LỚN THỨ K TRONG CHUỖI
 *
 * Mô tả: Tìm tất cả số trong chuỗi, sắp xếp giảm dần, trả về số thứ k
 *
 * Ví dụ: n = "100klh564abc365bg", k = 2
 * - Các số: 100, 564, 365
 * - Sắp xếp giảm: 564, 365, 100
 * - Số thứ 2: 365
 *
 * CÁCH GIẢI:
 * 1. Trích xuất tất cả số từ chuỗi
 * 2. Sắp xếp theo giá trị giảm dần
 * 3. Trả về số thứ k (index k-1)
 */
function maxNumberKth(n, k) {
    // Trích xuất tất cả số từ chuỗi
    const numbers = [];
    let currentNumber = "";

    for (let i = 0; i < n.length; i++) {
        const char = n[i];

        if (char >= "0" && char <= "9") {
            // Là chữ số, thêm vào số hiện tại
            currentNumber += char;
        } else {
            // Không phải chữ số, kết thúc số hiện tại
            if (currentNumber !== "") {
                numbers.push(currentNumber);
                currentNumber = "";
            }
        }
    }

    // Xử lý số cuối cùng (nếu chuỗi kết thúc bằng số)
    if (currentNumber !== "") {
        numbers.push(currentNumber);
    }

    // Nếu không có số nào hoặc k lớn hơn số lượng số
    if (numbers.length === 0 || k > numbers.length || k < 1) {
        return "-1";
    }

    // Sắp xếp theo giá trị số giảm dần
    numbers.sort((a, b) => {
        // So sánh độ dài trước
        if (a.length !== b.length) {
            return b.length - a.length;
        }
        // Nếu cùng độ dài, so sánh từng ký tự
        return b.localeCompare(a);
    });

    // Trả về số thứ k (index k-1)
    return numbers[k - 1];
}

module.exports = maxNumberKth;

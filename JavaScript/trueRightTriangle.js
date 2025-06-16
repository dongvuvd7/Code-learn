function trueRightTriangle(a, b, c) {
    // Kiểm tra các số có hợp lệ không (phải là số dương)
    if (a <= 0 || b <= 0 || c <= 0) {
        return false;
    }
    
    // Sắp xếp ba số theo thứ tự tăng dần để xác định cạnh huyền
    const sides = [a, b, c].sort((x, y) => x - y);
    const [side1, side2, hypotenuse] = sides;
    
    // Áp dụng định lý Pythagoras: a² + b² = c²
    // Sử dụng độ chính xác để tránh lỗi do phép tính số thực
    const sumOfSquares = side1 * side1 + side2 * side2;
    const hypotenuseSquared = hypotenuse * hypotenuse;
    
    // Kiểm tra với độ chính xác nhỏ để xử lý lỗi làm tròn
    return Math.abs(sumOfSquares - hypotenuseSquared) < 1e-10;
}
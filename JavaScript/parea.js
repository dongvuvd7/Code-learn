function parea(n, x) {
    // Diện tích đa giác đều n cạnh, độ dài cạnh x
    // Công thức: (n × x² × cot(π/n)) / 4
    
    // Tính cot(π/n) = 1/tan(π/n)
    const cotPiOverN = 1 / Math.tan(Math.PI / n);
    
    // Tính diện tích
    const area = (n * x * x * cotPiOverN) / 4;
    
    // Làm tròn đến số thập phân thứ 3
    return Math.round(area * 1000) / 1000;
}
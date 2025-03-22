function breakChocolate(n, m) {
    // Sử dụng BigInt để xử lý tràn số
    let product = BigInt(n) * BigInt(m);

    // Kiểm tra tính chẵn lẻ của n * m
    return product % 2n === 0n;
}

console.log(breakChocolate(1,1));
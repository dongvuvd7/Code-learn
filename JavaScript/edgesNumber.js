/**
 * Một hình lăng trụ có n cạnh đáy
 * Tính tổng số mặt, số đỉnh và số cạnh của hình lăng trụ
 * @param {*} n 
 */
function edgesNumber(n){
    if (n <= 2) return -1;
    // Tính số mặt của hình lăng trụ
    let faces = n + 2;
    // Tính số đỉnh của hình lăng trụ
    let vertices = 2 * n;
    // Tính số cạnh của hình lăng trụ
    let edges = 3 * n;
    return faces + vertices + edges;
}
function escapeTheMaze(maze){
    // Vị trí bắt đầu (1,1) và đích đến (3,3)
    // Chú ý: mảng 2D dùng [row][column], nên vị trí (1,1) là maze[1][1]
    const start = { row: 1, col: 1, path: "" };
    const end = { row: 3, col: 3 };
    
    // Mảng các bước di chuyển có thể: phải, trái, lên, xuống
    const moves = [
        { dr: 0, dc: 1, dir: "R" },  // Sang phải
        { dr: 0, dc: -1, dir: "L" }, // Sang trái
        { dr: -1, dc: 0, dir: "U" }, // Lên trên
        { dr: 1, dc: 0, dir: "D" }   // Xuống dưới
    ];
    
    // Hàng đợi cho BFS
    const queue = [start];
    
    // Mảng đánh dấu các ô đã thăm
    const visited = Array(5).fill().map(() => Array(5).fill(false));
    visited[start.row][start.col] = true;
    
    // BFS để tìm đường đi ngắn nhất
    while (queue.length > 0) {
        const current = queue.shift();
        
        // Nếu đã đến đích
        if (current.row === end.row && current.col === end.col) {
            return current.path;
        }
        
        // Thử từng bước di chuyển
        for (const move of moves) {
            const newRow = current.row + move.dr;
            const newCol = current.col + move.dc;
            
            // Kiểm tra xem ô mới có hợp lệ không
            if (
                newRow >= 0 && newRow < 5 && 
                newCol >= 0 && newCol < 5 && 
                maze[newRow][newCol] === '.' && 
                !visited[newRow][newCol]
            ) {
                visited[newRow][newCol] = true;
                queue.push({
                    row: newRow,
                    col: newCol,
                    path: current.path + move.dir
                });
            }
        }
    }
    
    // Nếu không tìm được đường đi
    return "DIE";
}
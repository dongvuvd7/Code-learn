/**
 * BÀI TOÁN: FIND TEAM - TÌM CÁC ĐỘI CÓ K THÀNH VIÊN
 * 
 * Mô tả: Cho mảng arr, arr[i] là số đội của thành viên thứ i
 *        Tìm tất cả các đội có đúng k thành viên, sắp xếp tăng dần
 * 
 * Ví dụ: arr = [1,2,3,4,3,2,1,3,4,4,1], k = 3
 * - Đội 1: 3 thành viên (vị trí 0, 6, 10)
 * - Đội 2: 2 thành viên (vị trí 1, 5)
 * - Đội 3: 3 thành viên (vị trí 2, 4, 7)
 * - Đội 4: 3 thành viên (vị trí 3, 8, 9)
 * → Kết quả: [1, 3, 4]
 * 
 * CÁCH GIẢI:
 * 1. Đếm số thành viên của mỗi đội (sử dụng Map hoặc Object)
 * 2. Lọc các đội có số thành viên = k
 * 3. Sắp xếp tăng dần
 */
function findTeam(arr, k) {
    // Đếm số thành viên của mỗi đội
    const teamCount = new Map();
    
    for (let teamId of arr) {
        teamCount.set(teamId, (teamCount.get(teamId) || 0) + 1);
    }
    
    // Tìm các đội có đúng k thành viên
    const result = [];
    
    for (let [teamId, count] of teamCount) {
        if (count === k) {
            result.push(teamId);
        }
    }
    
    // Sắp xếp tăng dần
    result.sort((a, b) => a - b);
    
    return result;
}

// Test cases
console.log('Test 1:', findTeam([1,2,3,4,3,2,1,3,4,4,1], 3));
// Expected: [1, 3, 4]

console.log('Test 2:', findTeam([1,1,1,2,2,3], 3));
// Expected: [1]

console.log('Test 3:', findTeam([5,5,5,5,5], 5));
// Expected: [5]

console.log('Test 4:', findTeam([1,2,3,4,5], 1));
// Expected: [1, 2, 3, 4, 5]

console.log('Test 5:', findTeam([1,1,2,2,3,3], 2));
// Expected: [1, 2, 3]

console.log('Test 6:', findTeam([10,20,30,10,20,10], 3));
// Expected: [10]

console.log('Test 7:', findTeam([7,7,7,8,8,9], 10));
// Expected: [] (không đội nào có 10 thành viên)

console.log('Test 8:', findTeam([0,0,1,1,2,2], 2));
// Expected: [0, 1, 2]

module.exports = findTeam;
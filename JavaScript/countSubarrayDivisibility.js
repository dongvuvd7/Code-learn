/**
 * Tính số mảng con liên tiếp có tổng chia hết cho độ dài mảng arr.
 * @param {number[]} arr Mảng các số nguyên.
 * @returns {number} Số lượng mảng con thỏa mãn.
 */
function countSubarrayDivisibility(arr) {
    const n = arr.length;
    if (n === 0) {
        return 0;
    }

    let count = 0;
    let currentSum = 0; // Sử dụng số thường vì modulo n giữ cho nó không quá lớn
    const remainderCounts = new Map();
    remainderCounts.set(0, 1); // Khởi tạo cho tổng tiền tố rỗng (prefixSum[-1])

    for (let i = 0; i < n; i++) {
        // Thêm phần tử hiện tại vào tổng và lấy modulo n
        // (a + b) % n = ((a % n) + (b % n)) % n
        // Để tránh tràn số với arr[i] lớn, có thể lấy modulo arr[i] trước,
        // nhưng cộng trực tiếp rồi modulo cuối cùng thường nhanh hơn và an toàn trong JS
        // nếu tổng không vượt quá Number.MAX_SAFE_INTEGER quá nhiều bước.
        // Với modulo ở mỗi bước thì hoàn toàn an toàn.
        currentSum = (currentSum + arr[i]) % n;

        // Đảm bảo remainder luôn không âm (JS % có thể trả về âm)
        let remainder = (currentSum % n + n) % n;

        // Nếu remainder này đã xuất hiện trước đó, nghĩa là có các tiền tố cũ hơn
        // mà khi trừ đi sẽ cho tổng chia hết cho n.
        if (remainderCounts.has(remainder)) {
            count += remainderCounts.get(remainder);
        }

        // Cập nhật tần suất của remainder này
        remainderCounts.set(remainder, (remainderCounts.get(remainder) || 0) + 1);
    }

    return count;
}

// Ví dụ sử dụng:
console.log(countSubarrayDivisibility([4, 5, 0, -2, -3, 1])); // n = 6. Mong đợi kết quả là 2 ([0] và [5, 0, -2, -3])
console.log(countSubarrayDivisibility([5]));                  // n = 1. Mong đợi 1 ([5], vì 5 % 1 == 0)
console.log(countSubarrayDivisibility([3, 3, 3]));           // n = 3. Mong đợi 6 ([3],[3],[3],[3,3],[3,3],[3,3,3]) vì các tổng là 3, 3, 3, 6, 6, 9 đều chia hết cho 3
console.log(countSubarrayDivisibility([1, 2, 3, 4, 5]));     // n = 5. Tổng 15. [5], [1,2,3,4], [2,3,4,5], [1,2,3,4,5]. Mong đợi 4?
                                                               // Psums: 1, 3, 6=1, 10=0, 15=0 (mod 5)
                                                               // Remainder: 1->{0:1,1:1}
                                                               // Remainder: 3->{0:1,1:1,3:1}
                                                               // Remainder: 1->count+=map(1)=1. {0:1,1:2,3:1}. count=1 ([2,3,4])
                                                               // Remainder: 0->count+=map(0)=1. {0:2,1:2,3:1}. count=2 ([1,2,3,4], [5]) ???
                                                               // Remainder: 0->count+=map(0)=2. {0:3,1:2,3:1}. count=4 ([1,2,3,4,5], [?], [?])
                                                               // Let's trace again [1, 2, 3, 4, 5], n=5
                                                               // map = {0: 1}, count = 0, sum = 0
                                                               // i=0, num=1: sum=(0+1)%5=1. rem=1. map has 1? No. map={0:1, 1:1}
                                                               // i=1, num=2: sum=(1+2)%5=3. rem=3. map has 3? No. map={0:1, 1:1, 3:1}
                                                               // i=2, num=3: sum=(3+3)%5=1. rem=1. map has 1? Yes(1). count=0+1=1. map={0:1, 1:2, 3:1}  -> corresponds to P[2]%5 == P[0]%5. Subarray arr[1..2] = [2,3]. Sum 5. Yes.
                                                               // i=3, num=4: sum=(1+4)%5=0. rem=0. map has 0? Yes(1). count=1+1=2. map={0:2, 1:2, 3:1}  -> corresponds to P[3]%5 == P[-1]%5. Subarray arr[0..3] = [1,2,3,4]. Sum 10. Yes.
                                                               // i=4, num=5: sum=(0+5)%5=0. rem=0. map has 0? Yes(2). count=2+2=4. map={0:3, 1:2, 3:1}  -> corresponds to P[4]%5 == P[-1]%5 (arr[0..4], sum 15) AND P[4]%5 == P[3]%5 (arr[4..4], sum 5). Yes.
                                                               // Final count = 4. Subarrays: [2,3], [1,2,3,4], [1,2,3,4,5], [5].

console.log(countSubarrayDivisibility([]));                   // n = 0. Mong đợi 0
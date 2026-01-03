/**
 * Khái quát bài toán:
 * Cho mảng food đại diện cho số kilogram đồ ăn hiện có của các tỉnh (mảng 1 chiều, các tỉnh được sắp xếp theo thứ tự liền kề).
 * Chúng ta cần phân phát thêm đồ ăn sao cho:
 * - Mỗi lần phân phát a kilogram cho một tỉnh, thì một tỉnh kề nó (trái hoặc phải) cũng phải nhận a kilogram.
 * - Sau khi phân phát, tất cả các tỉnh phải có số kilogram đồ ăn là số chẵn không âm.
 * - Tìm số kilogram đồ ăn phân phát ít nhất để đạt được điều này, hoặc -1 nếu không thể.
 *
 * Mô tả cách giải:
 * - Chúng ta chỉ quan tâm đến tính chẵn lẻ của mỗi food[i], vì chỉ cần làm cho tất cả chẵn.
 * - Tạo mảng t[i] = food[i] % 2 (0 nếu chẵn, 1 nếu lẻ).
 * - Đối với n=1: Nếu đã chẵn thì 0, else -1 (không có tỉnh kề để phân phát đôi).
 * - Đối với n>1: Chúng ta cần "sửa" các vị trí lẻ bằng cách phân phát 1 cho cặp tỉnh liền kề (tăng 1 modulo 2 cho cả hai).
 * - Sử dụng prefix-like để tính toán: p[j] là số lần phân phát giữa tỉnh j và j+1 (mod 2).
 * - Bắt đầu từ p[0] = t[0] (nếu t[0]=1, cần phân phát giữa 0 và 1).
 * - Sau đó, cho mỗi j tiếp theo, p[j] = (t[j] + p[j-1]) % 2 để làm cho tỉnh j chẵn sau các phân phát trước.
 * - Kiểm tra xem p[n-2] có làm cho tỉnh cuối cùng chẵn không: nếu p[n-2] != t[n-1], thì không thể.
 * - Nếu có thể, tổng số phân phát thực tế là 2 * sum(p) vì mỗi p[j]=1 nghĩa là phân phát 1 cho mỗi tỉnh trong cặp, nhưng để giữ chẵn lẻ, và tối thiểu, nhưng thực tế mỗi lần phân phát là 1 cho cặp, nhưng để tối thiểu tổng, wait, trong code là 2*sum_p vì mỗi p[j]=1 nghĩa là phân phát 1 cho tỉnh j và j+1, tổng +2.
 * - Nhưng thực tế, để làm chẵn, và tối thiểu, cách này đảm bảo tổng là chẵn và tối thiểu (vì mỗi "sửa" thêm 2).
 *
 * Ví dụ:
 * food = [1, 2, 3, 6]
 * t = [1, 0, 1, 0]
 * p[0] = 1 (vì t[0]=1)
 * p[1] = (t[1] + p[0]) % 2 = (0 + 1) % 2 = 1
 * p[2] = (t[2] + p[1]) % 2 = (1 + 1) % 2 = 0
 * Kiểm tra p[2] == t[3]? 0 == 0, yes.
 * sum_p = 1+1+0=2, return 2*2=4.
 *
 * Giải thích: Phân phát giữa 0-1: +1 cho 0 và 1 → [2,3,3,6]
 * Phân phát giữa 1-2: +1 cho 1 và 2 → [2,4,4,6] tất cả chẵn, tổng phân phát 4.
 *
 * Ví dụ không thể: [1,2,3,7] t=[1,0,1,1]
 * p[0]=1
 * p[1]=(0+1)%2=1
 * p[2]=(1+1)%2=0
 * 0 != 1 (t[3]=1), return -1.
 */
function distributeFood2(food) {
    const n = food.length;
    if (n === 0) return 0; // Though constraints say 1 <= n
    const t = new Array(n);
    for (let i = 0; i < n; i++) {
        t[i] = food[i] % 2; // Lấy tính chẵn lẻ
    }
    if (n === 1) {
        return t[0] === 0 ? 0 : -1; // Trường hợp đặc biệt chỉ một tỉnh
    }
    const p = new Array(n - 1).fill(0); // Mảng lưu số lần phân phát giữa các cặp (mod 2)
    p[0] = t[0]; // Bắt đầu từ tỉnh đầu
    for (let j = 1; j < n - 1; j++) {
        p[j] = (t[j] + p[j - 1]) % 2; // Tính để làm chẵn tỉnh j
    }
    if (p[n - 2] !== t[n - 1]) {
        return -1; // Không thể làm chẵn tỉnh cuối
    }
    let sum_p = 0;
    for (let j = 0; j < n - 1; j++) {
        sum_p += p[j]; // Tổng số cặp cần phân phát
    }
    return 2 * sum_p; // Mỗi cặp thêm 2 (1 cho mỗi tỉnh)
}

const data = require("./data");

// Test với logic mới: không tăng currentTime mỗi lần
console.log("=== THỰC NGHIỆM LOGIC MỚI ===");
const a = [5, 10, 5, 10, 5, 10];
const b = [1, 2, 3, 4, 3, 2];
const k = 25;

console.log(`a = [${a}]`);
console.log(`b = [${b}]`);
console.log(`k = ${k}\n`);

const processing = [];
let nextFileIndex = 0;

// Thử không dùng loop thời gian, mà dùng event-driven
let events = []; // [time, type, fileIndex, ram]

// Thêm tất cả file theo thứ tự
let currentTime = 0;
for (let i = 0; i < a.length; i++) {
    // Tìm thời điểm sớm nhất có đủ RAM
    while (true) {
        // Xử lý các events đã xong đến currentTime
        events = events.filter((e) => e[0] > currentTime);

        const usedRam = events.reduce((sum, e) => sum + e[3], 0);

        console.log(`t=${currentTime}: RAM=${usedRam}, thử file ${i} (${a[i]}MB, dur=${b[i]})`);

        if (usedRam + a[i] <= k) {
            // Đủ RAM, thêm file
            const endTime = currentTime + b[i];
            events.push([endTime, "end", i, a[i]]);
            console.log(`  → OK! Thêm file ${i}, end=${endTime}\n`);
            break;
        } else {
            // Không đủ RAM, tăng thời gian lên giây tiếp theo
            console.log(`  → RAM không đủ (${usedRam}+${a[i]}=${usedRam + a[i]} > ${k})`);
            console.log(`  → Quá tải tại giây ${currentTime}\n`);
            console.log(`ĐÁP ÁN: ${currentTime}`);
            process.exit(0);
        }
    }

    currentTime++;
}

console.log("Xử lý hết → -1");

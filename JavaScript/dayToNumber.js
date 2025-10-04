function dayToNumber(d, m, y) {
    // Function to check if a year is a leap year
    function isLeapYear(year) {
        return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
    }

    // Days in each month for non-leap year
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    let totalDays = 0;

    // Add days for complete years (from year 1 to year y-1)
    for (let year = 1; year < y; year++) {
        if (isLeapYear(year)) {
            totalDays += 366;
        } else {
            totalDays += 365;
        }
    }

    // Add days for complete months in the current year
    for (let month = 1; month < m; month++) {
        if (month === 2 && isLeapYear(y)) {
            totalDays += 29; // February in leap year
        } else {
            totalDays += daysInMonth[month - 1];
        }
    }

    // Add the current day
    totalDays += d;

    return totalDays;
}

// Test with the example
// dayToNumber(2, 1, 2) should return 367
console.log("Test case: dayToNumber(2, 1, 2) =", dayToNumber(2, 1, 2));

// Additional test cases
console.log("Test case: dayToNumber(1, 1, 1) =", dayToNumber(1, 1, 1)); // Should be 1
console.log("Test case: dayToNumber(31, 12, 1) =", dayToNumber(31, 12, 1)); // Should be 365
console.log("Test case: dayToNumber(1, 1, 2) =", dayToNumber(1, 1, 2)); // Should be 366

// Export the function for use in other files
module.exports = dayToNumber;

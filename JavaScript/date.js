let date = "2023 08 20 11:41:20";
console.log(date);

let dateObj = new Date(date);

console.log("Month", dateObj.getMonth());
console.log("Year", dateObj.getFullYear());
console.log("Date", dateObj.getDate());

dateObj.setMonth(8);
console.log(dateObj)
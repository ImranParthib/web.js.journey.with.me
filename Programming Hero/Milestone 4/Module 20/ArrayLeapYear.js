function LeapYear(year) {
  let leapyear = [];
  for (let i = 0; i < year.length; i++) {
    if ((year[i] % 4 == 0 && year[i] % 100 != 0) || year[i] % 400 == 0) {
      leapyear.push(year[i]);
    }
  }
  return leapyear;
}

let years = [2000,2004,2008,2012,2016, 2023, 2024, 2025,2026,2027,2028, 2030];
let finalLeapYear = LeapYear(years);
console.log(finalLeapYear);

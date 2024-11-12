// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Get the calculate button and attach an event listener to it
  const calculateBtn = document.getElementById("calculateBtn");
  calculateBtn.addEventListener("click", function (event) {
    myFunction(event);
  });

  // Get the input fields for day, month, and year
  const dayInput = document.getElementById("day");
  const monthInput = document.getElementById("month");
  const yearInput = document.getElementById("year");

  // Add event listeners to input fields to clear validation messages when they change
  dayInput.addEventListener("input", clearValidationMessage);
  monthInput.addEventListener("input", clearValidationMessage);
  yearInput.addEventListener("input", clearValidationMessage);

  // Function to check if a year is a leap year
  function isLeapYear(year) {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
  }

  // Function to calculate age based on birth date
  function ageCalculator(birthDate) {
    const currentDate = new Date();

    // Months with 30 or 31 days
    const daysInMonth = [
      31,
      28 + (isLeapYear(currentDate.getFullYear()) ? 1 : 0),
      31,
      30,
      31,
      30,
      31,
      31,
      30,
      31,
      30,
      31,
    ];

    let years = currentDate.getFullYear() - birthDate.getFullYear();
    let months = currentDate.getMonth() - birthDate.getMonth() + 1; // Adjust to 1-based
    let days = currentDate.getDate() - birthDate.getDate();

    // Adjust negative days
    if (days < 0) {
      months--;
      days += daysInMonth[birthDate.getMonth()];
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    // Update the HTML elements with the calculated age
    document.getElementById("calculated_year").textContent = years;
    document.getElementById("calculated_month").textContent = months;
    document.getElementById("calculated_day").textContent = days;
  }

  // Function to handle form submission
  function myFunction(event) {
    let day = dayInput.value.trim();
    let month = monthInput.value.trim();
    let year = yearInput.value.trim();

    let isValid = true;

    // Regular expression to match only numeric characters
    const numericRegex = /^[0-9]+$/;

    // Validate day input
    if (!dayInput.value) {
      document.getElementById("day_alert").innerHTML = "This field is required";
      document.querySelector(".l_day").classList.add("text-gray-500");
      document.querySelector("#day").classList.add("border-gray-500");
      isValid = false;
    } else if (
      parseInt(day) < 1 ||
      parseInt(day) > 31 ||
      !numericRegex.test(day)
    ) {
      document.getElementById("day_alert").innerHTML = "Must be a valid day";
      document.querySelector(".l_day").classList.add("text-gray-500");
      document.querySelector("#day").classList.add("border-gray-500");
      isValid = false;
    }

    // Validate month input
    if (!monthInput.value) {
      document.getElementById("month_alert").innerHTML =
        "This field is required";
      document.querySelector(".l_month").classList.add("text-gray-500");
      document.querySelector("#month").classList.add("border-gray-500");
      isValid = false;
    } else if (
      parseInt(month) < 1 ||
      parseInt(month) > 12 ||
      !numericRegex.test(month)
    ) {
      document.getElementById("month_alert").innerHTML =
        "Must be a valid month";
      document.querySelector(".l_month").classList.add("text-gray-500");
      document.querySelector("#month").classList.add("border-gray-500");
      isValid = false;
    }

    // Validate year input
    if (!yearInput.value) {
      document.getElementById("year_alert").innerHTML =
        "This field is required";
      document.querySelector(".l_year").classList.add("text-gray-500");
      document.querySelector("#year").classList.add("border-gray-500");
      isValid = false;
    } else if (parseInt(year) < 1753 || !numericRegex.test(year)) {
      document.getElementById("year_alert").innerHTML = "Must be a valid year";
      document.querySelector(".l_year").classList.add("text-gray-500");
      document.querySelector("#year").classList.add("border-gray-500");
      isValid = false;
    } else if (parseInt(year) > new Date().getFullYear()) {
      document.getElementById("year_alert").innerHTML = "Must be in the past";
      document.querySelector(".l_year").classList.add("text-gray-500");
      document.querySelector("#year").classList.add("border-gray-500");
      isValid = false;
    }

    // If all inputs are valid, calculate the age
    if (isValid) {
      ageCalculator(
        new Date(parseInt(year), parseInt(month) - 1, parseInt(day))
      );
      event.preventDefault();
      return false;
    } else {
      event.preventDefault();
      return false;
    }
  }

  // Function to clear validation messages
  function clearValidationMessage() {
    document.getElementById("day_alert").innerHTML = "";
    document.getElementById("month_alert").innerHTML = "";
    document.getElementById("year_alert").innerHTML = "";
    document.querySelector(".l_day").classList.remove("text-gray-500");
    document.querySelector(".l_month").classList.remove("text-gray-500");
    document.querySelector(".l_year").classList.remove("text-gray-500");
    document.querySelector("#day").classList.remove("border-gray-500");
    document.querySelector("#month").classList.remove("border-gray-500");
    document.querySelector("#year").classList.remove("border-gray-500");
  }
});

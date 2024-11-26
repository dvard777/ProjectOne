const monthYearElement = document.getElementById("month-year");
const previousButton = document.getElementById("prev-month");
const nextButton = document.getElementById("next-month");
const container = document.querySelector('.container');

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// Initialize current date
let currentDate = new Date();

// Function to update the month and year display
function updateMonthYear() {
    const month = months[currentDate.getMonth()];
    const year = currentDate.getFullYear();
    monthYearElement.textContent = `${month} ${year}`;
    
    // Generate the calendar days dynamically
    generateCalendarDays(currentDate);
}

// Function to generate the calendar days for the given month/year
function generateCalendarDays(date) {
    container.innerHTML = ''; // Clear the container first
    
    const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1); // First day of the month
    const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0); // Last day of the month
    
    const daysInMonth = lastDayOfMonth.getDate(); // Number of days in the month
    const firstDay = firstDayOfMonth.getDay(); // Day of the week for the first day of the month
    
    // Add empty boxes for days before the 1st day of the month
    for (let i = 0; i < firstDay; i++) {
        const emptyBox = document.createElement('div');
        emptyBox.classList.add('box', 'disabled');
        container.appendChild(emptyBox);
    }
    
    // Add the actual days of the month
    for (let i = 1; i <= daysInMonth; i++) {
        const dayBox = document.createElement('div');
        dayBox.classList.add('box');
        dayBox.textContent = i;
        container.appendChild(dayBox);
    }
    
    // Add empty boxes for days after the last day of the month
    const remainingDays = (7 - (daysInMonth + firstDay) % 7) % 7;
    for (let i = 0; i < remainingDays; i++) {
        const emptyBox = document.createElement('div');
        emptyBox.classList.add('box', 'disabled');
        container.appendChild(emptyBox);
    }
}

// Event listeners for navigation
previousButton.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() - 1); // Go to the previous month
    updateMonthYear();
});

nextButton.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() + 1); // Go to the next month
    updateMonthYear();
});

// Initialize the display on page load
updateMonthYear();

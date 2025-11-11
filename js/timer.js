const daysBlock = document.querySelector(".timer__days");
const hoursBlock = document.querySelector(".timer__hours");
const minutesBlock = document.querySelector(".timer__minutes");
const secondsBlock = document.querySelector(".timer__seconds");

// Declension arrays for time units
const daysWords = ['день', 'дня', 'дней']; // [1, 2–4, 5–20+]
const hoursWords = ['час', 'часа', 'часов'];
const minutesWords = ['минута', 'минуты', 'минут'];
const secondsWords = ['секунда', 'секунды', 'секунд'];

let interval;

// Helper function to choose correct word form based on number
const numWord = (value, words) => {
    value = Math.abs(value) % 100;
    const lastNum = value % 10;

    if (value > 10 && value < 20) return words[2];
    if (lastNum > 1 && lastNum < 5) return words[1];
    if (lastNum === 1) return words[0];

    return words[2];
};

// Update timer display every tick
const updateTimer = () => {
    const date = new Date();
    const dateDeadline = new Date('11 November 2025').getTime();
    const timeRemaining = (dateDeadline - date) / 1000;

    const days = Math.floor(timeRemaining / 60 / 60 / 24);
    const hours = Math.floor((timeRemaining / 60 / 60) % 24);
    const minutes = Math.floor((timeRemaining / 60) % 60);
    const seconds = Math.floor(timeRemaining % 60);

    // Format numbers to always show two digits
    const fDays = days < 10 ? '0' + days : days;
    const fHours = hours < 10 ? '0' + hours : hours;
    const fMinutes = minutes < 10 ? '0' + minutes : minutes;
    const fSeconds = seconds < 10 ? '0' + seconds : seconds;

    // Update digit displays
    daysBlock.textContent = fDays;
    hoursBlock.textContent = fHours;
    minutesBlock.textContent = fMinutes;
    secondsBlock.textContent = fSeconds;

    // Update labels with correct plural forms
    daysBlock.nextElementSibling.textContent = numWord(days, daysWords);
    hoursBlock.nextElementSibling.textContent = numWord(hours, hoursWords);
    minutesBlock.nextElementSibling.textContent = numWord(minutes, minutesWords);
    secondsBlock.nextElementSibling.textContent = numWord(seconds, secondsWords);

    // Timer finished
    if (timeRemaining <= 0) {
        clearInterval(interval);
        daysBlock.textContent = '00';
        hoursBlock.textContent = '00';
        minutesBlock.textContent = '00';
        secondsBlock.textContent = '00';

        // Highlight all timer digits in red
        daysBlock.style.color = 'red';
        hoursBlock.style.color = 'red';
        minutesBlock.style.color = 'red';
        secondsBlock.style.color = 'red';
    }
};

// Initial call and setup interval
updateTimer();
interval = setInterval(updateTimer, 500);
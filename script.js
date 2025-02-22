// Set the date we're counting down to
const countdownDate = new Date("March 15, 2025 00:00:00").getTime();

// Update the countdown every second
const timer = setInterval(() => {
    // Get today's date and time
    const now = new Date().getTime();

    // Calculate the time remaining
    const timeRemaining = countdownDate - now;

    // If the countdown is over, stop the timer
    if (timeRemaining < 0) {
        clearInterval(timer);
        document.getElementById("countdown").innerHTML = "Safsufy is Home!";
        return;
    }

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000;

    // Display the results
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
}, 1000);
// Set the date we're counting down to
const countdownDate = new Date("March 15, 2025 00:00:00").getTime();

// Get the audio element
const backgroundMusic = document.getElementById("background-music");

// Play music when the user interacts with the page
document.body.addEventListener("click", () => {
    backgroundMusic.play();
});

// Function to update the countdown
function updateCountdown() {
    // Get today's date and time
    const now = new Date().getTime();

    // Calculate the time remaining
    let timeRemaining = countdownDate - now;

    // If the countdown is over, stop the timer
    if (timeRemaining < 0) {
        clearInterval(timer);
        document.getElementById("countdown").innerHTML = "Safsufy is Home!";
        localStorage.removeItem("timeRemaining"); // Clear storage when countdown is over
        return;
    }

    // Save the remaining time to localStorage
    localStorage.setItem("timeRemaining", timeRemaining);

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Display the results
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
}

// Check if there's a saved remaining time in localStorage
const savedTimeRemaining = localStorage.getItem("timeRemaining");

if (savedTimeRemaining) {
    // Use the saved time remaining
    const now = new Date().getTime();
    const newCountdownDate = now + parseInt(savedTimeRemaining);
    countdownDate = newCountdownDate;
}

// Update the countdown every second
const timer = setInterval(updateCountdown, 1000);

// Initial call to display the countdown immediately
updateCountdown();

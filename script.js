let hr = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let likeCountValue = 0;
let dislikeCountValue = 0;

function init() {
  setInterval(displayTime, 1000);
  setInterval(updateDateTime, 1000);
}

// Displaying current time on the clock
function displayTime() {
  let date = new Date();
  hr.style.transform = `rotate(${
    30 * date.getHours() + date.getMinutes() / 2
  }deg)`;
  min.style.transform = `rotate(${6 * date.getMinutes()}deg)`;
  sec.style.transform = `rotate(${6 * date.getSeconds()}deg)`;
}

// Like and Dislike button functionality
function likeCount() {
  updateCount("like");
}

function dislikeCount() {
  updateCount("dislike");
}

function updateCount(type) {
  if (type === "like") likeCountValue++;
  if (type === "dislike") dislikeCountValue++;
  document.getElementById(type).textContent =
    type === "like" ? likeCountValue : dislikeCountValue;
  updateTotalRatings();
}

// Updating total ratings
function updateTotalRatings() {
  document.getElementById("total_ratings").textContent =
    likeCountValue + dislikeCountValue;
}

// Updating current date and time
function updateDateTime() {
  const now = new Date();
  document.getElementById(
    "currentDateTime"
  ).textContent = `Date: ${now.toLocaleDateString()} & Time: ${now.toLocaleTimeString()}.`;
}

init(); // Initializing the clock and date-time display

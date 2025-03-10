// Existing DOM elements for score and buttons
const homeScoreElement = document.querySelector(".homeScore .scoreArea");
const guestScoreElement = document.querySelector(".guestScore .scoreArea");

const scoreButtons = document.querySelectorAll(".scoreAdd");

const replayButton = document.querySelector(".newGame");

let homeScore = 0;
let guestScore = 0;

// Function to update the score display
function updateScores() {
  homeScoreElement.textContent = homeScore;
  guestScoreElement.textContent = guestScore;

  homeScoreElement.classList.remove("leadTeam");
  guestScoreElement.classList.remove("leadTeam");

  if (homeScore > guestScore) {
    homeScoreElement.classList.add("leadTeam");
  } else if (guestScore > homeScore) {
    guestScoreElement.classList.add("leadTeam");
  }
   triggerVisualEffect(homeScore, guestScore);
}

// Event listener for score buttons
scoreButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const points = parseInt(button.textContent);
    if (button.parentElement.closest(".homeTitle")) {
      homeScore += points;
    } else {
      guestScore += points;
    }

    updateScores();
  });
});

// Event listener for replay button
replayButton.addEventListener("click", () => {
  homeScore = 0;
  guestScore = 0;

  updateScores();
});

// Initialize the score display
updateScores();

// Function to trigger visual effect based on score difference
function triggerVisualEffect(homeScore, guestScore) {
  if (homeScore > guestScore) {
    document.body.style.backgroundColor = "#f0f8ff"; // Light blue for Home lead
  } else if (guestScore > homeScore) {
    document.body.style.backgroundColor = "#ffebcd"; // Light beige for Guest lead
  } else {
    document.body.style.backgroundColor = "#ffffff"; // White background for tie
  }
}


// === Speech Recognition Code ===

// Set up the speech recognition API
// const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
// recognition.continuous = true;

// recognition.onresult = (event) => {
//   const command = event.results[event.results.length - 1][0].transcript.trim().toLowerCase();
//   const homeCommand = /home.*\d+/i;
//   const guestCommand = /guest.*\d+/i;

//   if (homeCommand.test(command)) {
//     const points = parseInt(command.match(/\d+/)[0]);
//     homeScore += points;
//     updateScores();
//   } else if (guestCommand.test(command)) {
//     const points = parseInt(command.match(/\d+/)[0]);
//     guestScore += points;
//     updateScores();
//   }
// };

// Start speech recognition
// recognition.start();

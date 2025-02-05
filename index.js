const homeScoreElement = document.querySelector(".homeScore .scoreArea");
const guestScoreElement = document.querySelector(".guestScore .scoreArea");

const scoreButtons = document.querySelectorAll(".scoreAdd");

const replayButton = document.querySelector(".newGame");

let homeScore = 0;
let guestScore = 0;

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
}

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

replayButton.addEventListener("click", () => {
  homeScore = 0;
  guestScore = 0;

  updateScores();
});

updateScores();

const homeScoreElement = document.querySelector(".homeScore .scoreArea");
const guestScoreElement = document.querySelector(".guestScore .scoreArea");

const scoreButtons = document.querySelectorAll(".scoreAdd");

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

updateScores();

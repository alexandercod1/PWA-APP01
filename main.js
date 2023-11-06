const hinder = document.getElementById("hinder");
const hal = document.getElementById("hal");
const Bird = document.getElementById("Bird");

let score = 0;
let isJumping = false;
let gameOver = false; // Ny flagga för Game Over-läge

// Referens till Game Over-skärmen
const gameOverScreen = document.getElementById("gameOverScreen");

hal.addEventListener("animationiteration", () => {
  if (!gameOver) { // Kontrollera om spelet är i Game Over-läge
    let rand = Math.random() * (500 - 150);
    hal.style.top = rand + "px";
    score++;
  }
});

setInterval(function () {
  if (!gameOver) { // Kontrollera om spelet är i Game Over-läge
    let BirdTop = parseInt(getComputedStyle(Bird).getPropertyValue("top"));

    if (!isJumping) {
      Bird.style.top = BirdTop + 3 + "px";
    }

    let hinderLeft = parseInt(getComputedStyle(hinder).getPropertyValue("left"));
    let halTop = parseInt(getComputedStyle(hal).getPropertyValue("top"));

    if (BirdTop > 500 || (hinderLeft < 10 && (BirdTop > halTop + 180 || BirdTop < halTop))) {
      // Visa Game Over-skärmen
      showGameOverScreen();
    }
  }
}, 10);

document.addEventListener("click", () => {
  if (!gameOver) { // Kontrollera om spelet är i Game Over-läge
    isJumping = true;
    let jumpTimer = 0;

    let jumpInterval = setInterval(function () {
      jumpTimer++;
      let BirdTop = parseInt(getComputedStyle(Bird).getPropertyValue("top"));
      if (BirdTop > 0 && jumpTimer < 15) {
        Bird.style.top = BirdTop - 5 + "px";
      }

      if (jumpTimer > 20) {
        clearInterval(jumpInterval);
        isJumping = false;
        jumpTimer = 0;
      }
    }, 10);
  }
});

// Funktion för att visa Game Over-skärmen
function showGameOverScreen() {
  // Uppdatera poäng på Game Over-skärmen
  document.getElementById('gameOverScore').textContent = score;
  // Visa Game Over-skärmen
  gameOverScreen.style.display = 'block';
  // Sätt Game Over-flaggan till true
  gameOver = true;

  // Återställ spelet
  Bird.style.top = 100 + "px";
  hinder.style.left = "100%";
  hal.style.left = "100%";

  // Återställ poängen
  score = 0;
}

// Funktion för att starta om spelet från Game Over-skärmen
function startGame() {
  // Dölj Game Over-skärmen
  gameOverScreen.style.display = 'none';
  // Sätt Game Over-flaggan till false för att starta om spelet
  gameOver = false;
  // Kör din resetGame-funktion eller annan logik för att starta om spelet
  // resetGame();
}

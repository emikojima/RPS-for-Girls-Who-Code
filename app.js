let userScore = 0;
let compScore = 0;

const userScore_span = document.getElementById(`user-score`)
const computerScore_span = document.getElementById('computer-score')
const scoreBoard_div = document.querySelector('.score-board')
const result_div = document.querySelector('.result')
const rock_div = document.getElementById("r")
const paper_div = document.getElementById("p")
const scissor_div = document.getElementById("s")

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  let numb = (Math.floor(Math.random() * 3))
  return choices[numb]
}

function win(user, comp) {
  userScore++;
  userScore_span.innerHTML = "";
  userScore_span.innerHTML = userScore+" ";

  result_div.append(`${convertToword(user)} beats ${convertToword(comp)}! You Win!!!`);
}

function convertToword(letter) {
  if (letter === "r") return "Rock";

  if (letter === "s") return "Scissors";

  if (letter === "p") return "Paper";
}

const lose = (user, comp) => {
  compScore++;
  computerScore_span.innerHTML = " "+compScore
  result_div.append(`${convertToword(user)} defeated by  ${convertToword(comp)}! You Lose!`);
}

const draw = () => {
  result_div.append("It's a Tie")
}

function game(userChoice) {
  alert(userChoice)
  const computer = getComputerChoice()
  alert(computer)
  result_div.innerHTML = ""
  switch (userChoice + computer) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computer)
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computer)
      break;
    case "rr":
    case "pp":
    case "ss":
      draw()
      break;
  }
}

function main() {
  rock_div.addEventListener('click', function() {
    game("r")
  })

  paper_div.addEventListener('click', function() {
    game("p")
  })

  scissor_div.addEventListener('click', function() {
    game("s")
  })
}

main()

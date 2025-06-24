
let userScore = 0;
let compScore = 0;
let drawScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const uS = document.querySelector("#user-score")
const cS = document.querySelector("#comp-score")
const DS = document.querySelector("#draw-score")


const genCompChoice = () => {
    //rock paper scissors       // math.random() genrate random values from 0 to 1 
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3)
    return options[randIdx];
}


// check the draw condition
const draw = () => {
    msg.innerText = "Game Was Draw.Play again"
    drawScore++
    msg.style.backgroundColor = "#081b31"
    DS.innerText=drawScore


}

// show the winner user or computer
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        msg.innerText = `You win  ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green"
        userScore++;
        uS.innerText = userScore;
    }
    else {
        msg.innerText = `You lose  ${compChoice} beats  ${userChoice}`;
        msg.style.backgroundColor = "red"
        compScore++
        cS.innerText = compScore;

    }
}

// check the conditions who is winning or draw

const playGame = (userChoice) => {
    let compChoice = genCompChoice()
    console.log("User Choice =", userChoice)
    console.log("Comp Choice =", compChoice)


    //draw Game

    if (userChoice === compChoice) {
        draw()
    }

    else {
        let userWin = true;

        if (userChoice === "rock") {
            // compChoice will be paper or scissors
            userWin = compChoice === "paper" ? false : true
        }

        else if (userChoice === "paper") {
            // compChoice will be rock or scissors
            userWin = compChoice === "scissors" ? false : true
        }
        else {
            // compChoice will be rock or paper
            userWin = compChoice === "rock" ? false : true
        }

        showWinner(userWin, userChoice, compChoice);
    }
}

// click event to get user choice

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id")
        // console.log("choice was clicked ", userChoice)
        playGame(userChoice);
    })
})

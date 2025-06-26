let userScore = 0;
let compScore = 0;
let drawScore = 0;

let choices = document.querySelectorAll(".choice")
let msg = document.querySelector("#msg");
let uS=document.querySelector("#user-score")
let cS=document.querySelector("#comp-score")
let dS=document.querySelector("#draw-score")
let userChoiceImg=document.querySelector("#user-c")
let compChoiceImg=document.querySelector("#comp-c")


const gencompChoice = () => {
    const array = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random() * 3)
    console.log(randomIdx)

    return array[randomIdx];
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        msg.innerText = `You win ! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        userScore++
        uS.innerText=userScore;
    }
    else {
        msg.innerText = `You lose ! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red"
        compScore++
        cS.innerText=compScore;


    }
}

const draw = () => {
    msg.innerText = "Game is draw Play Again";
    drawScore++;
    msg.style.backgroundColor = "#081b31";
    dS.innerText=drawScore;

}

const playGame = (userChoice) => {
    let compChoice = gencompChoice()
    let userWin = true;
    updateChoiceImages(userChoice,compChoice)
    if (userChoice === compChoice) {
        draw()
    }

    else {
        
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true

        }
        else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true
        }

        else {
            userWin = compChoice === "rock" ? false : true
        }
    }

    showWinner(userWin, userChoice, compChoice)
}


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id")
        playGame(userChoice);
    })
})

const updateChoiceImages=(userChoice,compChoice)=>{
    userChoiceImg.src=`./images/${userChoice}.png `;
    compChoiceImg.src=`./images/${compChoice}.png`;
}
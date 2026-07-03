let myscore = 0;
let botscore = 0;

const choices = document.querySelectorAll("button");

const result = document.querySelector("#result-msg");
const myscoreEl = document.querySelector("#myscore");
const botscoreEl = document.querySelector("#botscore");

// Generate Bot Choice
const getBotChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
};

// Draw
const draw = (mychoice, botchoice) => {
     result.innerText =
     `You chose: ${mychoice}
     Bot chose: ${botchoice}
     Ooops!!
     It's a Draw!`; 
    result.className = "draw";
};
// Win
const win = (mychoice, botchoice) => {
     result.innerText =
     `You chose: ${mychoice}
     Bot chose: ${botchoice}
     Hurray!!!!
     You Win!`;
     result.className = "win";
};
// Lose
const lose = (mychoice, botchoice) => {
     result.innerText =
      `You chose: ${mychoice}
     Bot chose: ${botchoice}
     Oh No!!!!
     You Lose!`;
     result.className = "lose";
};

// Play One Round
const playGame = (mychoice) => {
    const botchoice = getBotChoice();
    console.log("Your Choice:", mychoice);
    console.log("Bot Choice:", botchoice);

    if (mychoice === botchoice) {
       draw(mychoice, botchoice);
        return;
    }

    let iwin = true;

    if (mychoice === "rock") {
        if (botchoice === "paper") {
            iwin = false;
        }
    }

    else if (mychoice === "paper") {
        if (botchoice === "scissors") {
            iwin = false;
        }
    }

    else if (mychoice === "scissors") {
        if (botchoice === "rock") {
            iwin = false;
        }
    }

    if (iwin) {
        myscore++;
        myscoreEl.innerText = myscore;
        win(mychoice, botchoice);
    } else {
        botscore++;
        botscoreEl.innerText = botscore;
        lose(mychoice, botchoice);
    }
};
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const mychoice = choice.id;   // Fixed Bug
        playGame(mychoice);
    });

});
result.innerText =
`You chose: ${player}
Bot chose: ${bot}
You Win! `;
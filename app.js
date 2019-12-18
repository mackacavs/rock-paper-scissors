const cachedDOM = {
    userScore_span: document.getElementById('user-score'),
    computerScore_span: document.getElementById('computer-score'),
    rock_div: document.getElementById('rock'),
    paper_div: document.getElementById('paper'),
    scissors_div: document.getElementById('scissors'),
    message: document.querySelector('.result'),
}

let userScore = 0;
let computerScore = 0;
let gamePlaying = true;

document.getElementById('button').addEventListener('click', function (e) {
    const playUntil = document.getElementById('number').value;
    init(playUntil);
    document.getElementById('number').value = '';
    e.preventDefault();
});

const computerChoice = () => {
    number = Math.floor(Math.random() * 3)
    if (number === 0) {
        return 'rock'
    } else if (number === 1) {
        return 'paper'
    } else {
        return 'scissors'
    }
};

const init = (finalScore) => {
    cachedDOM.rock_div.addEventListener('click', function () {
        if (gamePlaying === true) {
            whoWins('rock', finalScore);
        }
    });
    cachedDOM.paper_div.addEventListener('click', function () {
        if (gamePlaying === true) {
            whoWins('paper', finalScore);
        }
    });
    cachedDOM.scissors_div.addEventListener('click', function () {
        if (gamePlaying === true) {
            whoWins('scissors', finalScore);
        }
    });
}

const whoWins = (userChoice, finalScore) => {

    compChoice = computerChoice();

    switch (`${userChoice} ${compChoice}`) {
        case 'rock scissors':
        case 'paper rock':
        case 'scissors paper':
            win(userChoice, compChoice, finalScore);
            break;
        case 'rock paper':
        case 'paper scissors':
        case 'scissors rock':
            lose(userChoice, compChoice, finalScore);
            break;
        default:
            cachedDOM.message.innerHTML = 'Draw!'
            document.getElementById(userChoice).parentNode.classList.add('gray-glow');
            setTimeout(function () {
                document.getElementById(userChoice).parentNode.classList.remove('gray-glow');
            }, 300)
    }
};

const win = (userChoice, compChoice, finalScore) => {

    userScore++;
    if (finalScore > userScore) {
        cachedDOM.message.innerHTML = `${userChoice} beats ${compChoice}, you win!`;
        cachedDOM.userScore_span.textContent = userScore;
        document.getElementById(userChoice).parentNode.classList.add('green-glow');
        setTimeout(function () {
            document.getElementById(userChoice).parentNode.classList.remove('green-glow');
        }, 300)
    } else {
        cachedDOM.userScore_span.textContent = userScore;
        cachedDOM.message.innerHTML = 'Well done - you win!'
        gamePlaying = false;
    }
}

const lose = (userChoice, compChoice, finalScore) => {

    computerScore++;
    if (finalScore > computerScore) {
        cachedDOM.message.innerHTML = `${compChoice} beats ${userChoice}, computer wins!`;
        cachedDOM.computerScore_span.textContent = computerScore;
        document.getElementById(userChoice).parentNode.classList.add('red-glow');
        setTimeout(function () {
            document.getElementById(userChoice).parentNode.classList.remove('red-glow');
        }, 300)

    } else {
        cachedDOM.computerScore_span.textContent = computerScore;
        cachedDOM.message.innerHTML = 'Sorry - better luck next time!'
        gamePlaying = false;
    }
};


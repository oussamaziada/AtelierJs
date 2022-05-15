class Game {
    constructor() {
        this.number = Math.floor(Math.random() * 10) + 1;
        this.attempts = 0;
        this.maxAttempts = null;
    }
    selectDifficulty() {
        let answer;
        do {
            answer = parseInt(
                prompt(
                    "Select difficulty\n\nPlease enter the number associated with each level of difficulty\n1. Easy\n2. Medium\n3. Hard"
                )
            );
        } while (![1, 2, 3].includes(answer));
        this.maxAttempts = (4 - answer) * 2;
    }
    guessNumber() {
        let answer;
        do {
            answer = parseInt(
                prompt(
                    "Select a number between 1 and 10\n\nAttempts left: " +
                        (this.maxAttempts - this.attempts)
                )
            );
        } while (answer != Math.floor(answer) || answer < 1 || answer > 10);
        this.attempts++;
        return answer;
    }
    play() {
        while (true) {
            const number = this.guessNumber();
            if (number == this.number) {
                return confirm("You won! Do you want to play again?");
            } else if (this.attempts < this.maxAttempts) {
                alert(
                    `Wrong guess! You have ${
                        this.maxAttempts - this.attempts
                    } attempts left.`
                );
            } else {
                return confirm("You lost! Do you want to play again?");
            }
        }
    }
}

function startGameLoop() {
    let replay;
    do {
        const game = new Game();
        game.selectDifficulty();
        replay = game.play();
    } while (replay);
}

window.addEventListener("load", startGameLoop);

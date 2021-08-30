class TicTacToe {
    // currentSymbol = 'x';
    // turnsQty = 0;
    // winnerSymbol = null;
    #turnsQty = 0;
    static WINNING_COMBINATIONS = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7]
    ]
    constructor() {
        this.matrix = new Array(3);
        this.matrix[0] = new Array(3);
        this.matrix[1] = new Array(3);
        this.matrix[2] = new Array(3);
        this.#fillTheMatrix(this.matrix);
        this.currentSymbol = 'x';
        this.turnsQty = 0;
        this.winnerSymbol = null;
        //this.finished = false;
        //this.#winnerSymbol = null;
        //console.log(this.matrix);
    }

    getCurrentPlayerSymbol() {
        return this.currentSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        //if (this.#turnsQty < 9 && !this.isFinished()) {
            let currentTurn = this.getFieldValue(rowIndex, columnIndex);
            if (currentTurn === null) {
                this.matrix[rowIndex][columnIndex] = this.currentSymbol;
                this.#changeCurrentSymbol();
                this.turnsQty++;
            }

            // if (this.turnsQty >= 5 && this.#isWinningCombination()) {
            //     this.finished = true;
            //     this.#changeCurrentSymbol();
            //     //break;
            // }
            // else if (this.turnsQty >= 9) {
            //     this.finished = true;
            //     this.winnerSymbol = null;
            //     //break;
            // }
        //}
    }

    isFinished() {
        if (this.getWinner() || this.isDraw()) return true;

        return false;
    }

    getWinner() {
        let inlineMatrix = [];
        inlineMatrix = inlineMatrix.concat(...this.matrix);

        for (let i = 0; i < TicTacToe.WINNING_COMBINATIONS.length; i++) {
            let currentComb = TicTacToe.WINNING_COMBINATIONS[i];
            let firstElement = inlineMatrix[currentComb[0]];
            let secondElement = inlineMatrix[currentComb[1]];
            let thirdElement = inlineMatrix[currentComb[2]];

            if (firstElement === null || secondElement === null || thirdElement === null) {
                continue;
            }

            if (firstElement === secondElement && secondElement === thirdElement) {
                return firstElement;
            }
            else {
                return null;
            }
        }
    }

    noMoreTurns() {
        if (this.turnsQty >= 9) return true;

        return false;
    }

    isDraw() {
        if (this.noMoreTurns() && this.getWinner() === null) return true;

        return false;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.matrix[rowIndex][colIndex];
    }

    #fillTheMatrix(arr) {
        for (let i = 0; i < arr.length; i++) {
            arr[i].fill(null);
        }
    }

    #changeCurrentSymbol() {
        if (this.currentSymbol == 'x') {
            this.currentSymbol = 'o';
        }
        else this.currentSymbol = 'x';
    }

    #isWinningCombination() {
        let inlineMatrix = [];
        inlineMatrix = inlineMatrix.concat(...this.matrix);

        for (let i = 0; i < TicTacToe.WINNING_COMBINATIONS.length; i++) {
            let currentComb = TicTacToe.WINNING_COMBINATIONS[i];
            let firstElement = inlineMatrix[currentComb[0]];
            let secondElement = inlineMatrix[currentComb[1]];
            let thirdElement = inlineMatrix[currentComb[2]];

            if (firstElement === null || secondElement === null || thirdElement === null) {
                continue;
            }

            if (firstElement === secondElement && secondElement === thirdElement) {
                return firstElement;
            }
            else {
                return null;
            }
        }
    }
}

// let game;

// game = new TicTacToe();
// console.log(`game.getCurrentPlayerSymbol() x? : ${game.getCurrentPlayerSymbol()}`);

// game.nextTurn(0, 1);
// console.log('game.nextTurn(0, 1)');
// console.log(`game.getCurrentPlayerSymbol() o?: ${game.getCurrentPlayerSymbol()}`);

// game.nextTurn(1, 2)
// console.log('game.nextTurn(1, 2)');
// console.log(`game.getCurrentPlayerSymbol() x?: ${game.getCurrentPlayerSymbol()}`);

// game.nextTurn(0, 2)
// console.log('game.nextTurn(0, 2)');
// console.log(`game.getCurrentPlayerSymbol() 0?: ${game.getCurrentPlayerSymbol()}`);

// game.nextTurn(0, 0)
// console.log('game.nextTurn(0, 0)');
// console.log(`game.getCurrentPlayerSymbol() x?: ${game.getCurrentPlayerSymbol()}`);

// game.nextTurn(1, 1)
// console.log('game.nextTurn(1, 1)');
// console.log(`game.getCurrentPlayerSymbol() 0?: ${game.getCurrentPlayerSymbol()}`);

// game.nextTurn(0, 0)
// console.log('game.nextTurn(0, 0)');
// console.log(`game.getCurrentPlayerSymbol() o?: ${game.getCurrentPlayerSymbol()}`);

// game.nextTurn(1, 1)
// console.log('game.nextTurn(1, 1)');
// console.log(`game.getCurrentPlayerSymbol() 0?: ${game.getCurrentPlayerSymbol()}`);

// game.nextTurn(2, 1)
// console.log('game.nextTurn(2, 1)');
// console.log(`game.getCurrentPlayerSymbol() x?: ${game.getCurrentPlayerSymbol()}`);

// game.nextTurn(0, 1)
// console.log('game.nextTurn(0, 1)');
// console.log(`game.getCurrentPlayerSymbol() x?: ${game.getCurrentPlayerSymbol()}`);

// game.nextTurn(2, 1)
// console.log('game.nextTurn(2, 1)');
// console.log(`game.getCurrentPlayerSymbol() x?: ${game.getCurrentPlayerSymbol()}`);

// game.nextTurn(0, 1)
// console.log('game.nextTurn(0, 1)');
// console.log(`game.getCurrentPlayerSymbol() x?: ${game.getCurrentPlayerSymbol()}`);

// game.nextTurn(1, 1)
// console.log('game.nextTurn(1, 1)');
// console.log(`game.getCurrentPlayerSymbol() x?: ${game.getCurrentPlayerSymbol()}`);

// game.nextTurn(2, 0)
// console.log('game.nextTurn(2, 0)');
// console.log(`game.getCurrentPlayerSymbol() o?: ${game.getCurrentPlayerSymbol()}`);

// console.log('NEW LINE')
// game = new TicTacToe();
// console.log(game.getCurrentPlayerSymbol());

// game.nextTurn(2, 2)
// console.log(game.getCurrentPlayerSymbol());

// game.nextTurn(2, 1)
// console.log(game.getCurrentPlayerSymbol());

// game.nextTurn(1, 1)
// console.log(game.getCurrentPlayerSymbol());

// game.nextTurn(1, 2)
// console.log(game.getCurrentPlayerSymbol());

// game.nextTurn(2, 1)
// console.log(game.getCurrentPlayerSymbol());

// game.nextTurn(2, 0)
// console.log(game.getCurrentPlayerSymbol());

// game.nextTurn(2, 0)
// console.log(game.getCurrentPlayerSymbol());

// game.nextTurn(0, 0)
// console.log(game.getCurrentPlayerSymbol());

// game.nextTurn(0, 1)
// console.log(game.getCurrentPlayerSymbol());

// game.nextTurn(2, 2)
// console.log(game.getCurrentPlayerSymbol());

// game.nextTurn(2, 2)
// console.log(game.getCurrentPlayerSymbol());

// game.nextTurn(2, 0)
// console.log(game.getCurrentPlayerSymbol());

// game.nextTurn(1, 0)
// console.log(game.getCurrentPlayerSymbol());

// game.nextTurn(1, 1)
// console.log(game.getCurrentPlayerSymbol());

// game.nextTurn(2, 1)
// console.log(game.getCurrentPlayerSymbol());

// game.nextTurn(2, 2)
// console.log(game.getCurrentPlayerSymbol());

// game.nextTurn(2, 1)
// console.log(game.getCurrentPlayerSymbol());

// game.nextTurn(0, 0)
// console.log(game.getCurrentPlayerSymbol());

// game.nextTurn(1, 1)
// console.log(game.getCurrentPlayerSymbol());

// game.nextTurn(1, 0)
// console.log(game.getCurrentPlayerSymbol());

// game.nextTurn(2, 0)
// console.log(game.getCurrentPlayerSymbol());

// game.nextTurn(1, 2)
// console.log(game.getCurrentPlayerSymbol());

// game.nextTurn(1, 2)
// console.log(game.getCurrentPlayerSymbol());

// game.nextTurn(1, 2)
// console.log(game.getCurrentPlayerSymbol());

// game.nextTurn(1, 1)
// console.log(game.getCurrentPlayerSymbol());

// game.nextTurn(2, 2)
// console.log(game.getCurrentPlayerSymbol());

// game.nextTurn(0, 1)
// console.log(game.getCurrentPlayerSymbol());

// game.nextTurn(2, 1)
// console.log(game.getCurrentPlayerSymbol());

// game.nextTurn(2, 2)
// console.log(game.getCurrentPlayerSymbol());

// game.nextTurn(2, 0)
// console.log(game.getCurrentPlayerSymbol());

// game.nextTurn(2, 2)
// console.log(game.getCurrentPlayerSymbol());

// game.nextTurn(2, 0)
// console.log(game.getCurrentPlayerSymbol());

// game.nextTurn(0, 1)
// console.log(game.getCurrentPlayerSymbol());

// game.nextTurn(1, 0)
// console.log(game.getCurrentPlayerSymbol());

// game.nextTurn(1, 1)
// console.log(game.getCurrentPlayerSymbol());

// game.nextTurn(1, 1)
// console.log(game.getCurrentPlayerSymbol());

// game.nextTurn(0, 0)
// console.log(game.getCurrentPlayerSymbol());

// game.nextTurn(2, 2)
// console.log(game.getCurrentPlayerSymbol());

// game.nextTurn(2, 2)
// console.log(game.getCurrentPlayerSymbol());

// game.nextTurn(2, 0)
// console.log(game.getCurrentPlayerSymbol());

// game.nextTurn(2, 0)
// console.log(game.getCurrentPlayerSymbol());

// game.nextTurn(1, 2)
// console.log(game.getCurrentPlayerSymbol());

// game.nextTurn(0, 2)
// console.log(game.getCurrentPlayerSymbol());

module.exports = TicTacToe;

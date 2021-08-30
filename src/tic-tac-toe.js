// class TicTacToe {
//     // currentSymbol = 'x';
//     // turnsQty = 0;
//     // winnerSymbol = null;
//     #turnsQty = 0;
//     static WINNING_COMBINATIONS = [
//         [1, 2, 3],
//         [4, 5, 6],
//         [7, 8, 9],
//         [1, 4, 7],
//         [2, 5, 8],
//         [3, 6, 9],
//         [1, 5, 9],
//         [3, 5, 7]
//     ]
//     constructor() {
//         this.matrix = new Array(3);
//         this.matrix[0] = new Array(3);
//         this.matrix[1] = new Array(3);
//         this.matrix[2] = new Array(3);
//         this.#fillTheMatrix(this.matrix);
//         this.currentSymbol = 'x';
//         this.turnsQty = 0;
//         this.winnerSymbol = null;
//         //this.finished = false;
//         //this.#winnerSymbol = null;
//         //console.log(this.matrix);
//     }

//     getCurrentPlayerSymbol() {
//         return this.currentSymbol;
//     }

//     nextTurn(rowIndex, columnIndex) {
//         //if (this.#turnsQty < 9 && !this.isFinished()) {
//             //let currentTurn = this.getFieldValue(rowIndex, columnIndex);
//             if (this.matrix[rowIndex][columnIndex] === null) {
//                 this.matrix[rowIndex][columnIndex] = this.currentSymbol;
//                 this.#changeCurrentSymbol();
//                 this.turnsQty++;
//             }

//             // if (this.turnsQty >= 5 && this.#isWinningCombination()) {
//             //     this.finished = true;
//             //     this.#changeCurrentSymbol();
//             //     //break;
//             // }
//             // else if (this.turnsQty >= 9) {
//             //     this.finished = true;
//             //     this.winnerSymbol = null;
//             //     //break;
//             // }
//         //}
//     }

//     isFinished() {
//         if (this.getWinner() || this.isDraw()) return true;

//         return false;
//     }

//     getWinner() {
//         let inlineMatrix = [];
//         inlineMatrix = inlineMatrix.concat(...this.matrix);

//         for (let i = 0; i < TicTacToe.WINNING_COMBINATIONS.length; i++) {
//             let currentComb = TicTacToe.WINNING_COMBINATIONS[i];
//             let firstElement = inlineMatrix[currentComb[0]];
//             let secondElement = inlineMatrix[currentComb[1]];
//             let thirdElement = inlineMatrix[currentComb[2]];

//             if (firstElement === null || secondElement === null || thirdElement === null) {
//                 continue;
//             }

//             if (firstElement === secondElement && secondElement === thirdElement) {
//                 return firstElement;
//             }
//             else {
//                 return null;
//             }
//         }
//     }

//     noMoreTurns() {
//         if (this.turnsQty >= 9) return true;

//         return false;
//     }

//     isDraw() {
//         if (this.noMoreTurns() && this.getWinner() === null) return true;

//         return false;
//     }

//     getFieldValue(rowIndex, colIndex) {
//         return this.matrix[rowIndex][colIndex];
//     }

//     #fillTheMatrix(arr) {
//         for (let i = 0; i < arr.length; i++) {
//             arr[i].fill(null);
//         }
//     }

//     #changeCurrentSymbol() {
//         if (this.currentSymbol == 'x') {
//             this.currentSymbol = 'o';
//         }
//         else this.currentSymbol = 'x';
//     }

//     #isWinningCombination() {
//         let inlineMatrix = [];
//         inlineMatrix = inlineMatrix.concat(...this.matrix);

//         for (let i = 0; i < TicTacToe.WINNING_COMBINATIONS.length; i++) {
//             let currentComb = TicTacToe.WINNING_COMBINATIONS[i];
//             let firstElement = inlineMatrix[currentComb[0]];
//             let secondElement = inlineMatrix[currentComb[1]];
//             let thirdElement = inlineMatrix[currentComb[2]];

//             if (firstElement === null || secondElement === null || thirdElement === null) {
//                 continue;
//             }

//             if (firstElement === secondElement && secondElement === thirdElement) {
//                 return firstElement;
//             }
//             else {
//                 return null;
//             }
//         }
//     }
// }

class TicTacToe {
    #turnsQty = 0;
    constructor() {
        this.currentSymbol = 'x';
        this.matrix = new Array(3);
        this.matrix[0] = new Array(3);
        this.matrix[1] = new Array(3);
        this.matrix[2] = new Array(3);
        this.#fillTheMatrix(this.matrix);
    }

    getCurrentPlayerSymbol() {
        return this.currentSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.matrix[rowIndex][columnIndex] === 0){
            this.matrix[rowIndex][columnIndex] = this.currentSymbol;
            this.#changeSymbol();
            this.#turnsQty++;
        }               
    }

    isFinished() {
        if (this.getWinner() || this.isDraw()) return true;
        
        return false;
    }

    getWinner() {
        let xWin = ['x', 'x', 'x'];
        let oWin = ['o', 'o', 'o'];
        let column1 = this.matrix.map(e => e.filter((key, index) => index === 0));
        let column2 = this.matrix.map(e => e.filter((key, index) => index === 1));
        let column3 = this.matrix.map(e => e.filter((key, index) => index === 2));
        let row1 = this.matrix[0];
        let row2 = this.matrix[1];
        let row3 = this.matrix[2];
        let firstDiagonal = [this.matrix[0][0], this.matrix[1][1], this.matrix[2][2]];
        let secondDiagonal = [this.matrix[0][2], this.matrix[1][1], this.matrix[2][0]];
        let resultMatrix = [
            row1,
            row2,
            row3,
            column1,
            column2,
            column3,
            firstDiagonal,
            secondDiagonal
        ];

        let top = this.matrix[0].join('');
        let bottom = this.matrix[2].join('');

        let left = this.matrix.map(item => item.filter((key, i) => i === 0)).join('');
        let right = this.matrix.map(item => item.filter((key, i) => i === 2)).join('');

        let vertical = this.matrix.map(item => item[1]).join('');
        let horizontal = this.matrix[1].join('');

        let leftDiag = this.matrix[0][0] + this.matrix[1][1] + this.matrix[2][2];
        let rightDiag = this.matrix[0][2] + this.matrix[1][1] + this.matrix[2][0];

        let arr = [top, 
                   bottom, 
                   left, 
                   right, 
                   vertical, 
                   horizontal, 
                   leftDiag, 
                   rightDiag
                   ];
        
        let winner = arr.filter(item => /ooo|xxx/.test(item)).join('');

        return winner[0] || null;
    }

    noMoreTurns() {
        if (this.#turnsQty >= 9) return true;

        return false;
    }

    isDraw() {
        return (this.noMoreTurns() && (this.getWinner() === null));
    }

    getFieldValue(rowIndex, colIndex) {
        return this.matrix[rowIndex][colIndex] || null;
    }

    #fillTheMatrix(arr) {
        for (let i = 0; i < arr.length; i++) {
            arr[i].fill(0);
        }
    }

    #changeSymbol() {
        if (this.currentSymbol === 'x') {
            this.currentSymbol = 'o';
        }
        else {
            this.currentSymbol = 'x';
        }
    }
}

module.exports = TicTacToe;

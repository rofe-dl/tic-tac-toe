let current = 'x';

let statesTaken = [];
let statesAvailable = [[0, 1, 2], [3, 4, 5], [6, 7, 8]
                [0, 3, 6], [1, 4, 7], [2, 5, 8]
                [0, 4, 8], [2, 4, 6]];

const winnerDiv = document.querySelector('.winner');
const winnerText = document.createElement('h3');

const blocks = [
    document.getElementById('0'),
    document.getElementById('1'),
    document.getElementById('2'),
    document.getElementById('3'),
    document.getElementById('4'),
    document.getElementById('5'),
    document.getElementById('6'),
    document.getElementById('7'),
    document.getElementById('8'),
]

document.querySelector('#btn-clear').onclick = () => {
    winnerDiv.removeChild(winnerDiv.firstChild);
    for (let i = 0; i < blocks.length; i++) {
        blocks[i].classList.remove('marked');
        blocks[i].classList.remove('x');
        blocks[i].classList.remove('o');
    }
}

document.querySelectorAll('.block').forEach((element) => {
    element.onclick = () => {
        if (!element.classList.contains('marked')){
            element.classList.add('marked');
            element.classList.add(current);
            

            // statesTaken.push()
            current = current == 'x' ? 'o' : 'x';
            
            makeAiMove();
            // checks if there's any winner after every move
            checkIfGameOver();
        }
    }
})

const checkIfGameOver = () => {
    const winner = findWinner();
    if (winner === 'tie'){
        winnerText.textContent = "The game is tied. Clear the board to play again.";
        winnerDiv.appendChild(winnerText);
    }else if (winner) {
        winnerText.textContent = winner.toUpperCase() + " wins! Clear board to play again.";
        winnerDiv.appendChild(winnerText);
    }
}

const isMarkedX = (index) => {
    return blocks[index].classList.contains('x');
}

const isMarkedO = (index) => {
    return blocks[index].classList.contains('o');
}

const isMarked = (index) => {
    return blocks[index].classList.contains('marked');
}

const findWinner = () => {
    // horizontal
    for (let i = 0; i <= 6; i = i + 3){
        if (isMarkedX(i) && isMarkedX(i+1) && isMarkedX(i+2))
            return 'x';
        else if (isMarkedO(i) && isMarkedO(i+1) && isMarkedO(i+2))
            return 'o';
    }

    // vertical
    for (let i = 0; i <= 2; i++){
        if (isMarkedX(i) && isMarkedX(i+3) && isMarkedX(i+6))
            return 'x';
        else if (isMarkedO(i) && isMarkedO(i+3) && isMarkedO(i+6))
            return 'o';
    }

    // diagonal
    for (let i = 0, j = 8; i <= 2; i = i + 2, j = j - 2){
        if (isMarkedX(i) && isMarkedX(4) && isMarkedX(j))
            return 'x';
        else if (isMarkedO(i) && isMarkedO(4) && isMarkedO(j))
            return 'o';
    }

    // if tied
    let tie = true;
    for (let i = 0; i < 9; i++){
        if (!isMarked(i)){
            tie = false;
            break;
        }
    }

    return tie ? 'tie' : false;

}
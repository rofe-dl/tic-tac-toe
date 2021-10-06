let current = 'x';

let winStates = [[0, 1, 2], [3, 4, 5], [6, 7, 8],
                [0, 3, 6], [1, 4, 7], [2, 5, 8],
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

const removeStates = (block) => {
    let newWinStates = [];
    for (let i = 0; i < winStates.length; i++){
        if (! (winStates[i].includes(block)) ){
            newWinStates.push(winStates[i]);
        }
    }

    winStates = newWinStates;
}

document.querySelector('#btn-clear').onclick = () => {
    for (let i = 0; i < blocks.length; i++) {
        blocks[i].classList.remove('marked');
        blocks[i].classList.remove('x');
        blocks[i].classList.remove('o');
    }

    current = 'x';
    winStates = [[0, 1, 2], [3, 4, 5], [6, 7, 8],
                [0, 3, 6], [1, 4, 7], [2, 5, 8],
                [0, 4, 8], [2, 4, 6]];
    winnerDiv.removeChild(winnerDiv.firstChild);
}

document.querySelectorAll('.block').forEach((element) => {
    element.onclick = () => {
        if (!element.classList.contains('marked')){
            element.classList.add('marked');
            element.classList.add(current);
            
            removeStates(parseInt(element.id));
            current = current == 'x' ? 'o' : 'x';
            if (!checkIfGameOver()){
                makeAiMove();
                checkIfGameOver();
            }
        }
    }
})

const checkIfGameOver = () => {
    const winner = findWinner();

    if (winner === 'tie')
        winnerText.textContent = "The game is tied. Clear the board to play again.";
    else if (winner) 
        winnerText.textContent = winner.toUpperCase() + " wins! Clear board to play again.";
    else
        return false;

    winnerDiv.appendChild(winnerText);
    return true;
}
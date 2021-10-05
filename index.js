let current = 'x';

const winnerDiv = document.querySelector('.winner');
const winnerText = document.createElement('h3');

const blocks = {
    "0": document.getElementById('r1_c1'),
    "1": document.getElementById('r1_c2'),
    "2": document.getElementById('r1_c3'),
    "3": document.getElementById('r2_c1'),
    "4": document.getElementById('r2_c2'),
    "5": document.getElementById('r2_c3'),
    "6": document.getElementById('r3_c1'),
    "7": document.getElementById('r3_c2'),
    "8": document.getElementById('r3_c3'),
}

document.querySelector('#btn-clear').onclick = () => {
    winnerDiv.removeChild(winnerDiv.firstChild);
    for (let b in blocks) {
        blocks[b].classList.remove('marked');
        blocks[b].classList.remove('x');
        blocks[b].classList.remove('o');
    }
}

document.querySelectorAll('.block').forEach((element) => {
    element.onclick = () => {
        if (!element.classList.contains('marked')){
            element.classList.add('marked');
            element.classList.add(current);
            current = current == 'x' ? 'o' : 'x';
            
            // checks if there's any winner after every move
            checkIfGameOver();
        }
    }
})

const isMarkedX = (index) => {
    const element = blocks[index.toString()];
    return element.classList.contains('x');
}

const isMarkedO = (index) => {
    const element = blocks[index.toString()];
    return element.classList.contains('o');
}

const isMarked = (index) => {
    const element = blocks[index.toString()];
    return element.classList.contains('marked');
}

const checkIfGameOver = () => {
    const winner = findWinner();
    if (winner === 'tie'){
        winnerText.textContent = "The game is tied. Clear board to play again.";
        winnerDiv.appendChild(winnerText);
    }else if (winner) {
        winnerText.textContent = winner.toUpperCase() + " wins! Clear board to play again.";
        winnerDiv.appendChild(winnerText);
    }
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
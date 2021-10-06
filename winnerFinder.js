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
/**
 * Returns index of the max value in array.
 */
const findMaxIndex = (array) => {
    let max = 0, maxIndex = 0;
    for (let i = 0; i < array.length; i++){
        if (array[i] > max){
            max = array[i];
            maxIndex = i;
        }
    }

    return maxIndex;
}

/**
 * Chooses the most common block among possible win states.
 */
const findBestMove = () => {
    let count = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    for(let i = 0; i < winStates.length; i++){
        for (let j = 0; j < winStates[i].length; j++){

            const element = document.getElementById(winStates[i][j].toString());
            if (element.classList.contains('marked'))
                continue;

            count[winStates[i][j]] += 1;
        }
    }

    return findMaxIndex(count);
}


const makeAiMove = () => {
    const block = findBestMove();
    const element = document.getElementById(block.toString());
    
    element.classList.add('marked');
    element.classList.add(current);
    current = current == 'x' ? 'o' : 'x';

    checkIfGameOver();
}
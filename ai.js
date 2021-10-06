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
    const index = findBestMove();
    const element = document.getElementById(index.toString());
    
    element.classList.add('marked');
    element.classList.add(current);
    current = current == 'x' ? 'o' : 'x';
}
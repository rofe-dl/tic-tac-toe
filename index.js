let current = 'x';

const blocks = {
    r1_c1: document.getElementById('r1_c1'),
    r1_c2: document.getElementById('r1_c2'),
    r1_c3: document.getElementById('r1_c3'),
    r2_c1: document.getElementById('r2_c1'),
    r2_c2: document.getElementById('r2_c2'),
    r2_c3: document.getElementById('r2_c3'),
    r3_c1: document.getElementById('r3_c1'),
    r3_c2: document.getElementById('r3_c2'),
    r3_c3: document.getElementById('r3_c3'),
}

const mark = (element) => {
    if (!element.classList.contains('marked')){
        element.classList.add('marked');
        element.classList.add(current);
        current = current == 'x' ? 'o' : 'x';
    }
}

document.querySelectorAll('.block').forEach((div) => {
    div.onclick = () => {
        mark(div);
    }
})

document.querySelector('#btn-clear').onclick = () => {
    for (let b in blocks) {
        blocks[b].classList.remove('marked');
        blocks[b].classList.remove('x');
        blocks[b].classList.remove('o');
    }
}


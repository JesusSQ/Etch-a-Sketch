function createSquares() {
    let e;
    let cont = document.querySelector('.container');
    for (let i = 0; i < 256; i++) {
        e = document.createElement('div');
        e.classList.add('grid');
        cont.appendChild(e);
    }
}
createSquares();

function paint() {
    let divs = document.querySelectorAll('.grid');
    divs.forEach(div => div.addEventListener('mouseover', () => {
        div.style.background = 'black';
    }));
}

function eraser() {
    let divs = document.querySelectorAll('.grid');
    divs.forEach(div => div.addEventListener('mouseover', () => {
        div.style.background = 'white';
    }));
}

function clean() {
    let divs = document.querySelectorAll('.grid');
    divs.forEach(div => div.style.background = 'white');
}

function waitForButton() {
    let draw = document.querySelector('.draw');
    let del = document.querySelector('.eraser');
    let white = document.querySelector('.clean');
    del.addEventListener('click', () => {
        eraser();
    });
    draw.addEventListener('click', () => {
        paint();
    });
    white.addEventListener('click', () => {
        clean();
    });
}

waitForButton();
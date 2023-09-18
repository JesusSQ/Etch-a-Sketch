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
paint();
var game = document.getElementById("game");
let move = 0;
var result = '';
var content = document.getElementById("content");
var resultWindow = document.getElementById('modal-result')
var overlay = document.getElementById('overlay')
var btnClose = document.getElementById('btn-close')




game.addEventListener('click', e => {
    if (e.target.className = 'block') {
        if (move % 2 === 0) {
            e.target.innerHTML = 'X';
        } else {
            e.target.innerHTML = 'O';
        }
        move += 1;
        check();
    }
})

var check = () => {
    var box = document.getElementsByClassName('block');
    var arr = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    for (var i = 0; i < arr.length; i++) {
        if (box[arr[i][0]].innerHTML == 'X' && box[arr[i][1]].innerHTML == 'X' && box[arr[i][2]].innerHTML == 'X'
        ) {
            result = 'КРЕСТИКИ';
            natija(result);
        } else if (
            box[arr[i][0]].innerHTML == 'O' && box[arr[i][1]].innerHTML == 'O' && box[arr[i][2]].innerHTML == 'O'
        ) {
            result = 'НОЛИКИ';
            natija(result);
        } else if(move == 9) {
            result = 'НИЧЬЯ';
            natija(result);
        }
    }
}
var natija = function (golib) {
    content.innerHTML = `ПОБЕДИЛИ ${golib} !`;
    resultWindow.style.display = 'block';
}
var closeModal = () => {
    resultWindow.style.display = 'none';
    location.reload();
}
overlay.addEventListener('click', closeModal);
btnClose.addEventListener('click', closeModal);

//model
let points = 0;
let answer = ''
let buttons = `<button onclick="doStuff('s')"> <img src="img/start.png"/> </button>`
let number1 = 0;
let number2 = 0;
let sound = document.getElementById('music')

//view
showContent();
function showContent() {
    document.getElementById('game').innerHTML = /*html*/`
    <h1>Poeng: ${points} </h1>
    <div> <img src="img/mHCU1.jpg"/> </div>
    <div class="interzone">
    <div class="num"> ${number1} </div>
    <div class="but">
    ${buttons}
    </div>
    <div class="num">${number2}</div>
    </div>
    <div class="answ"> ${answer} </div>
    `;
}


function playAudio(){
    sound.innerHTML = '<audio loop autoplay src="sound/sharky.wav"></audio>';

}
//controller

function doStuff(playerInput) {
    buttons = `<button onclick="doStuff('v')"><img src="img/lefto.png"/></button>
    <button onclick="doStuff('m')"><img src="img/Untitled.png"/></button>
    <button onclick="doStuff('h')"><img src="img/righto.png"/></button> `;
    if (playerInput == 'v' && number1 > number2) {
        points++;
        answer = 'Riktig!';
    }
    else if (playerInput == 'm' && number1 == number2) {
        points++;
        answer = 'Riktig!';
    }
    else if (playerInput == 'h' && number1 < number2) {
        points++;
        answer = 'Riktig!';
    }
    else if (playerInput == 's') {
        answer = 'Velg munnen som er nærmest det største tallet. <br> Er tallene like, klikk i midten.';
        playAudio();
    }
    else {
        points--;
        answer = 'Feil!';
        buttons = `<button onclick="doStuff('s')"> <img src="img/start.png"/> </button>`
        sound.innerHTML = '<audio autoplay src="sound/feil.wav"></audio>'
    }

    number1 = Math.floor((Math.random() * 10) + 1)
    number2 = Math.floor((Math.random() * 10) + 1)


    showContent();
}
// variavel para a ordem das cores
let order = [];
// variavel para a ordem dos cliques
let clickedorder = [];
// pontos ganhos no jogo
let score = 0;

/*
* 0 - verde; 
* 1 - vermelho; 
* 2 - amarelo; 
* 3 - azull
*/

// constantes para as classes do html
const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const green = document.querySelector('.green');

// função para ordenar as cores que irão aparecer
let shuffleOrder = () =>{
    // variavel para receber um numero aleatorio de 0 a 3
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedorder = [];

    for(let i in order){
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }

}

// acende a próxima cor
let lightColor = (element, number) => {
   number = number * 500;
    setTimeout(() =>{
        element.classList.add('selected');
    }, number - 250);

    setTimeout(()=>{
        element.classList.remove('selected');
    });
}

// checa se os botões clicados são os mesmo da ordem gerada no jogo
let checkOrder = () => {
    for(let i in clickedorder){
        if(clickedorder[i] != order[i]){
            gameOver();
            break;        
        }
    }

    if(clickedorder.length == order.length){
        alert(`Pontuaçao: ${score}\nVocê acertou! Iniciando próximo nível!`);
        nextlevel();
    }
}

//função para o clique do usuário
let click = (color) => {
    clickedorder[clickedorder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();

    }, 250);
   
}

// função que retorna a cor
let createColorElement = (color) => {
    if(color == 0){
        return green;
    } else if(color == 1){
        return red;
    }else if(color == 2){
        return yellow;
    }else if (color == 3){
        return blue;
    }
}

// função para proximo nivel do jogo
let nextlevel = () => {
    score++;
    shuffleOrder();
}

//função para gamer over
let gameOver = () => {
    alert(`Pontuação: ${score}\nVocê perdeu o jogo!\nClique em ok para iniciar um novo jogo!`);
    order = [];
    clickedorder = [];
    playGame();
}
// inicio do jogo
let playGame = () => {
   
    alert('Bem Vindo ao Gênesis! Iniciando novo Jogo!');
    score = 0;

    nextlevel();
}

// eventos de clique
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

// iniciar o game
playGame();
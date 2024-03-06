
let pac_x = parseInt(1 + Math.random() * 9);
let pac_y = parseInt(1 + Math.random() * 9);

let coin1_x, coin1_y, coin2_x, coin2_y;
let bomb1_x, bomb1_y, bomb2_x, bomb2_y;

do {
    coin1_x = parseInt(1 + Math.random() * 9);
    coin1_y = parseInt(1 + Math.random() * 9);
} while (coin1_x === pac_x && coin1_y === pac_y);

do {
    coin2_x = parseInt(1 + Math.random() * 9);
    coin2_y = parseInt(1 + Math.random() * 9);
} while (
    (coin2_x === pac_x && coin2_y === pac_y) || 
    (coin2_x === coin1_x && coin2_y === coin1_y)
    );

do {
    bomb1_x = parseInt(1 + Math.random() * 9);
    bomb1_y = parseInt(1 + Math.random() * 9);
} while (
    bomb1_x === pac_x && bomb1_y === pac_y || 
    bomb1_x === coin1_x && bomb1_y === coin1_y || 
    bomb1_x === coin2_x && bomb1_y === coin2_y
    );

do {
    bomb2_x = parseInt(1 + Math.random() * 9);
    bomb2_y = parseInt(1 + Math.random() * 9);
} while (
    bomb2_x === pac_x && bomb2_y === pac_y || 
    bomb2_x === coin1_x && bomb2_y === coin1_y || 
    bomb2_x === coin2_x && bomb2_y === coin2_y || 
    bomb2_x === bomb1_x && bomb2_y === bomb1_y
    );

let score = 0;
let health_point = 2

let coin1_active = true;
let coin2_active = true;
let bomb1_active = true;
let bomb2_active = true;

function checkGameStatus() {
    if (!coin1_active && !coin2_active) {
        gameMap.innerHTML = `<div class="you_win"></div>`;
        return true;
    }
    if (health_point <= 0 || (!bomb1_active && !bomb2_active)) {
        health_point = 0;
        gameMap.innerHTML = `<div class="you_lose"></div>`;
        gameScore.innerHTML = `Score: ${score}<br>Health points: ${health_point}`;
        return true;
    }
    return false;
}


function action(){
    switch (event.key) {
        case "ArrowDown":
            if (pac_y < 10) pac_y++; 
            break;
        case "ArrowUp":
            if (pac_y > 1) pac_y--; 
            break;
        case "ArrowRight":
            if (pac_x < 10) pac_x++; 
            break;
        case "ArrowLeft":
            if (pac_x > 1) pac_x--; 
            break;
    }
    if (pac_x === coin1_x && pac_y === coin1_y) {
        score += 10;
        coin1_active = false;
    }
    if (pac_x === coin2_x && pac_y === coin2_y) {
        score += 10;
        coin2_active = false;
    }
    if (pac_x === bomb1_x && pac_y === bomb1_y) {
        health_point -= 1;
        bomb1_active = false;
    }
    if (pac_x === bomb2_x && pac_y === bomb2_y) {
        health_point -= 1;
        bomb2_active = false;
    }

    if (!checkGameStatus()) {
        renderMap();
    }
    gameScore.innerHTML = `Score: ${score}<br>Health points: ${health_point}`;
}


function renderMap() {
    gameMap.innerHTML = ``;
    for(let y = 1; y <= 10; y++){
        for(let x = 1; x <= 10; x++){
            if (x === pac_x && y === pac_y){
                gameMap.innerHTML += `<div class="pac"></div>`;
            } else if (x === coin1_x && y === coin1_y && coin1_active){
                gameMap.innerHTML += `<div class="coin"></div>`;
            } else if (x === coin2_x && y === coin2_y && coin2_active){
                gameMap.innerHTML += `<div class="coin"></div>`;
            } else if (x === bomb1_x && y === bomb1_y && bomb1_active){
                gameMap.innerHTML += `<div class="bomb"></div>`;
            } else if (x === bomb2_x && y === bomb2_y && bomb2_active){
                gameMap.innerHTML += `<div class="bomb"></div>`;
            } else {
                gameMap.innerHTML += `<div class=""></div>`;
            }
        }
    }
    gameScore.innerHTML = `Score: ${score}<br>Health points: ${health_point}`;
}
renderMap();



// HW1: add limit for pacman
// HW2: add bomb (health point)
// HW3: for coin and bomb/ state-false/true
// HW4: more coins and bombs
// HW5: add rondom coords
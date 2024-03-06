
const N_FLAKES = 20
// Array of numbers
let flakes_x = []

let flakes_y = []

function generateCoords(){
    for(let i=0; i<N_FLAKES; i++){
        flakes_x[i] = parseInt(Math.random() * 500)
        flakes_y[i] = -parseInt(Math.random() * 500)
    }
}


function drowFlake(i){
    snowContainer.innerHTML += `
        <div 
        class="flake"
        style="
            left: ${flakes_x[i]}px;
            top: ${flakes_y[i]}px;
            "
        >
        &#10052;
        </div>
     `
}


function drawAllFlakes(){
    snowContainer.innerHTML = ``
    for(let i=0; i<N_FLAKES; i++){
        drowFlake(i)
    }
}

function fall(){
    for(let i=0; i<N_FLAKES; i++){
        flakes_y[i] += 3
        if(flakes_y[i] > 500){
            flakes_y[i] = -parseInt(Math.random() * 500)
        }
    }
    drawAllFlakes()
}

generateCoords()

let fallTimer = setInterval(fall, 20)
let snow = true

function letItSnow(){
    if(snow){ 
        clearInterval(fallTimer)
        snow = false
    } else {
        snow = true
        fallTimer = setInterval(fall, 20)
    }
}







//1. functions
//2. events
//3. Array, Number, String...
//4. if/else, for/while

const IMAGES = [
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg",
    "images/4.jpg",
    "images/5.jpg",
    "images/6.jpg",
    "images/7.jpg",
    "images/8.jpg",
    "images/9.jpg",
    "images/10.jpg"

]

const EFECTS = [
    "animate__bounceInLeft",
    "animate__bounceInRight",
    "animate__fadeInLeft",
    "animate__fadeInLeft",
]

const TITLES = [
    "working",
    "mountain view",
    "audio mixer",
    "beach",
    "tree crown",
    "flower vase",
    "city by the sea",
    "forest",
    "sunset",
    "winter photographer"
]

let currentIndex = 0
let slideInterval

function showImage(n){
    let i = Math.round(Math.random()*3)
    carouselSlides.innerHTML = 
        `
        <img src="${IMAGES[n]}" class="animate__animated ${EFECTS[i]}"/>
        `
}
function showTitle(n){
    carouselTitles.innerHTML = 
        `
        <h4>${TITLES[n]}</h4>
        `
}


function next(){
    if (currentIndex < IMAGES.length - 1){
        currentIndex++
    } else {
        currentIndex = 0
    }
    showImage(currentIndex)
    showIndicators(currentIndex)
    showTitle(currentIndex)
}

function prev(){
    if (currentIndex > 0) {
        currentIndex--
    } else {
        currentIndex = IMAGES.length -1
    }
    showImage(currentIndex)
    showIndicators(currentIndex)
    showTitle(currentIndex)
    
}

function showIndicators(n){
    carouselIndicators.innerHTML = ``
    for (let i = 0; i < IMAGES.length; i++){
        if(i == n){
            carouselIndicators.innerHTML += ` <i class="bi bi-record-circle" style="font-size: 15px;"></i> `
        } else{
            carouselIndicators.innerHTML += ` <i class="bi bi-circle" style="font-size: 10px;"></i> `
        }
    }
}

function play() {
    if (!slideInterval) { 
        slideInterval = setInterval(next, 2000);
        document.getElementById("playButton").style.display = "none"
        document.getElementById("stopButton").style.display = "inline-block"
    }
}

function stop() {
    if (slideInterval) { 
        clearInterval(slideInterval); 
        slideInterval = null;
        document.getElementById("playButton").style.display = "inline-block"
        document.getElementById("stopButton").style.display = "none"
    }
}


function action(){
    switch(event.key){
        case "ArrowLeft": 
            prev()
            break;
        case "ArrowRight": 
            next()
            break;
        case " ":
            event.preventDefault()
            if (slideInterval) {
                stop()
            } else {
                play()
            }
            break;
    }
}
 
showImage(currentIndex)
showIndicators(currentIndex)
showTitle(currentIndex)
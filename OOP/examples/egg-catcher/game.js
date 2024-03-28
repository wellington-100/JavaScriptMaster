
let moldLeft = 225
let score = 0
let duration = 5
const mold = document.getElementsByClassName('mold')[0]
const eggs = document.getElementsByClassName('egg')
const scoreDIv = document.getElementsByClassName('score')[0]

const moveMold = (e) => {
    switch (e.code) {
        case 'ArrowRight':
            if(moldLeft < 500 - 50)
            moldLeft+=5
            break;
    
        case 'ArrowLeft':
            if (moldLeft >= 0 + 5)
            moldLeft-=5
            break
    }
    mold.style.left = `${moldLeft}px`

}

const animationEnd = (e) => {
    let egg = e.target
    if (e.animationName == 'move') {
        if (
            125 <= moldLeft && moldLeft <= 150
            &&
            // egg.classList.contains('left')  //HW: use .className
            egg.className.includes('left') 

            ||
            305 <= moldLeft && moldLeft <= 330
            &&
            // egg.classList.contains('right')  //HW: use .className
            egg.className.includes('right') 
        ) {
            score++
            egg.classList.remove('move')
            setTimeout(()=>{
                egg.classList.add('move')
            }, 10)
            duration--
                if(duration <= 0)
                    duration = 1
                egg.style.setProperty('animation-duration', `${duration}s`)
        } else {
            score--
            egg.className = egg.className.replace('move', 'fall')
            egg.style.removeProperty('animation-duration')

        }
        
    }
    if(e.animationName == 'fall'){
        egg.classList.add('egg-broken')
    }
    scoreDIv.innerHTML = `score: ${score}`
} 

document.body.addEventListener('keydown', moveMold)
const eggElement = [...eggs]
eggElement.forEach(egg => {
    egg.addEventListener('animationend', animationEnd)
});


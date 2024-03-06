 
 const items = [
    "BRAND",    
    "Debitis",
    "Nisi",
    "Quisquam",
    "Voluptat",
    "Distinct",
    "Delectus",
    "Tempore",
    "Dolore"
 ]
const TOTAL = 9
const BTN_WIDTH = 30
let dropOpen = false
let eWidth = 0

function adapt(){
    for(let n = TOTAL; n >=1; n--){
        console.log(n)
        estimateWidth(n)
        if (eWidth <= innerWidth){
            showItems(n)
            break
        }
    } 
}


function estimateWidth(n){
    let text = ``
    let pad = 0
    for(let i=0; i < n; i++){
        text += items[i]
        pad += 2 * 10
    }
    eWidth = 12 * text.length + pad + BTN_WIDTH
}



function showItems(n) {
    navbar.innerHTML = ``;
    for (let i = 0; i < n; i++) {
        navbar.innerHTML += `<a href="">${items[i]}</a>`;
    }
    let remaining = TOTAL - n;
    if (remaining > 0) {
        navbar.innerHTML += `<button type="button">
                                <span>${remaining}</span>
                                <i class="bi bi-list"></i>
                            </button>`;
    }

    const navbarButton = document.querySelector('#navbar button');
    if (navbarButton) {
        navbarButton.addEventListener('mouseenter', function () {
            showRemainingItems(remaining);
            dropOpen = true;
        });
    }

    const navbarDrop = document.getElementById('navbarDrop');
    if (navbarDrop) {
        navbarDrop.addEventListener('mouseleave', function () {
            navbarDrop.innerHTML = '';
            dropOpen = false;
        });
        navbarDrop.addEventListener('mouseenter', function () {
            dropOpen = true; 
        });
    }
    console.log("rem", remaining);
}



 function showRemainingItems(n){
    // toggle = checkbox principle
    if(dropOpen){
        navbarDrop.innerHTML = ``
        dropOpen = false
    } else {
        for(let i=TOTAL-n; i < TOTAL; i++){
            navbarDrop.innerHTML += `<a href="">${items[i]}</a>`
        }
        dropOpen = true
    }
 }




 // HW2*: add more styling
// HW2*:  fix the BUG dropOpen + resize
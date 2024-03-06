const images = [
    "images/903-400x400.jpg",
    "images/517-400x400.jpg",
    "images/555-400x400.jpg"
];
let currentIndex = 1; 

function showPreviousImage() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = images.length - 1;
    }
    document.getElementById('image').src = images[currentIndex];
}

function showNextImage() {
    if (currentIndex < images.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    document.getElementById('image').src = images[currentIndex];
}

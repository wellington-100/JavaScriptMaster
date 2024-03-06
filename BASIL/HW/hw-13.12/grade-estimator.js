let grade = parseFloat(prompt("Your grade please: "));

if (grade < 4.5) {
    alert("Very Bad");
} else if (grade < 6.5) {
    alert("Bad");
} else if (grade < 8.5) {
    alert("Ok");
} else if (grade < 9.5) {
    alert("Good");
} else if (grade === 10) {
    alert("Excellent!");
} else {
    alert("It's already fantastic!")
}



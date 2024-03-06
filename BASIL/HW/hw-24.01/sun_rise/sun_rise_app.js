

function adjustSun() {
    let hour = +inputHour.value;
    const K = 100 / 12;
    if (hour >= 6 && hour <= 18) {

        let left = K * (hour - 6);
        sun.style.left = `${left}%`;
        let skyRed, skyGreen, skyBlue;

        if (hour >= 6 && hour <= 12) {
            let sunUp = 60 * (hour - 6);
            sun.style.bottom = `${sunUp}px`;
            
            let progress = (hour - 6) / 6; 
            let centerRed = 255; 
            let centerGreen = 140 + progress * 115;
            if (centerGreen > 255) centerGreen = 255; 
            
            let eRed = 225; 
            let eGreen = 100 + progress * 155; 
            if (eGreen > 255) eGreen = 255; 

            sun.style.background = `
                radial-gradient(rgb(${centerRed}, ${centerGreen}, 0), 
                rgb(${eRed}, ${eGreen}, 0))`;

            skyRed = 10 + progress * 125; 
            skyGreen = 20 + progress * 186;
            skyBlue = 70 + progress * 180;
            if (hour == 12) { 
                skyRed = 135;
                skyGreen = 206;
                skyBlue = 250;
            }
            sky.style.backgroundColor = `rgb(${skyRed}, ${skyGreen}, ${skyBlue})`;

        } else if (hour > 12 && hour <= 18) {
            let sunDown = 60 * (18 - hour);
            sun.style.bottom = `${sunDown}px`;

            let progress = (hour - 12) / 6; 
            let centerRed = 200 + progress * 55; 
            let centerGreen = 255 - progress * 115; 
            if (centerGreen < 140) centerGreen = 140; 

            let eRed = 225 + progress * 25; 
            let eGreen = 255 - progress * 155; 
            if (eGreen < 100) eGreen = 100; 

            sun.style.background = `
                radial-gradient(rgb(${centerRed}, ${centerGreen}, 0), 
                rgb(${eRed}, ${eGreen}, 0))`;

            let skyProgress = (hour - 12) / 6; 
            skyRed = 135 - skyProgress * 60; 
            skyGreen = 206 - skyProgress * 86;
            skyBlue = 250 - skyProgress * 100;

            sky.style.backgroundColor = `rgb(${skyRed}, ${skyGreen}, ${skyBlue})`;
        }

    }
}

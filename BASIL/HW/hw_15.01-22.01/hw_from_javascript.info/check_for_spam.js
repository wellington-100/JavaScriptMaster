/*
Write a function checkSpam(str) that returns true if str contains 
‘viagra’ or ‘XXX’, otherwise false.
*/

function checkSpam(str) {
    let toLowerStr = str.toLowerCase();
    let spam = 'viagra'
    let spam1 = 'xxx'
    if (toLowerStr.includes(spam) || toLowerStr.includes(spam1)) {
        return true
    } else {
        return false
    }
}

checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false
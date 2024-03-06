




function onCodeWrite(){
    let value = inputCode.value.split('{')
    let selector = value[0]
    let styles = value[1]
    let element = screenContainer.querySelector(selector)
    if (element === null){
        console.log('Your selector didnt work')
    } else {
        if(styles !== undefined){
            element.style = styles.replace('}', '')
        }
        console.log('Your selector did work')
    }
}
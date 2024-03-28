






const options = ["Extern Politics", "Economics", "IT", "Science", "Sport"]

const init = () => {
    let btn = document.querySelector('#btn-subscribe')
    btn.setAttribute('disabled', true)

    //##########
    renderOptions(options)
    

    let agreeCheckbox = document.querySelector('[name="terms"]')
    agreeCheckbox.onchange = agreementCheckboxHandler

}

const renderOptions = (options) => {
    let optionsDiv = document.getElementById('options')
    options.forEach(option => {
        let input = document.createElement('input')
        // input.type = "checkbox"
        input.setAttribute('type', 'checkbox')
        input.setAttribute('name', `option_${option.toLowerCase().replace(" ", "_")}`)
        
        let text = document.createTextNode(option)
        let br = document.createElement('br')
        optionsDiv.appendChild(input)
        optionsDiv.appendChild(text)
        optionsDiv.appendChild(br)

    });
}


const agreementCheckboxHandler = () => {
    let agreeCheckbox = document.querySelector('[name="terms"]')
    let btn = document.querySelector('#btn-subscribe')
    
    if (agreeCheckbox.checked){
        btn.removeAttribute('disabled')
        renderAgreementText("You've agreed to the terms and conditions!")
    } else {
        btn.setAttribute('disabled', true)
        renderAgreementText("You must agree with the terms and conditions!")


    }

}

//I agree terms and conditions
const renderAgreementText = (text) => {
    let agreeLabel = document.getElementById('terms')
    let textNode = document.createTextNode(text)
    agreeLabel.removeChild(agreeLabel.lastChild)
    agreeLabel.appendChild(textNode)
}



//#############
window.onload = init


/*
    topics:
        string
        Array
        Literal Object
        functions
        flow control

    USER -> input ---- > math:9, physics: 8.5, english: 10....
    script: -> [
        {
            name: "math",
            grade: 9
        },
        {
            name: "physics",
            grade: 8.5
        },
        ....
    ]

    HW1: make a complet document structure
*/

function readData(){
    // HW2: create a input and a button; execute when button is presed; read the data from the input
    let data = inputData.value
    let grades = processData(data)
    logData(grades)

}

// parses data
function processData(data){
    let values = data.split(",")

    let grades = []

    for(let i=0; i < values.length; i++){
        let cells = values[i].split(":")
        let name = cells[0].trim()
        let grade = parseFloat(cells[1].trim())

        grades.push({
            discipline: name,
            mark: grade
        })
    }
    return grades
}

function logData(grades){
    let table = `<table><tr><th>Discipline</th><th>Grade</th></tr>`;
    for (let i = 0; i < grades.length; i++) {
        table += `<tr><td>${grades[i].discipline}</td><td>${grades[i].mark}</td></tr>`;
    }
    table += `</table>`;
    resultBox.innerHTML = table;
}
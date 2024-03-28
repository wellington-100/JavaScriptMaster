
const render = (parentElement, data) => {
    const table = document.createElement('table');
    let tr;
    let td;

    data.employees.forEach(employee => {
        tr = document.createElement('tr');
        Object.keys(employee).forEach(prop => {
            td = document.createElement('td');
            if (prop !== 'photo' && prop !== 'contacts') {
                td.innerText = employee[prop];
            } else if (prop === 'photo') {
                let img = document.createElement('img');
                img.src = employee[prop];
                td.append(img);
            } else if (prop === 'contacts') {
                let ul = document.createElement('ul');
                Object.entries(employee[prop]).forEach(([key, value]) => {      //Object.entries returns key+value
                // Object.keys(employee[prop]).forEach(key => {                 //Object.keys returns only keys
                //     const value = employee[prop][key];
                
                    let li = document.createElement('li');
                    if (key === 'email' || key === 'whatsapp') {
                        li.innerText = `${key}: ${value}`;
                    } else if (key === 'github') {
                        li.innerHTML = `<a href="https://github.com/${value}">GitHub: ${value}</a>`;
                    } else if (key === 'linkedin') {
                        li.innerHTML = `<a href="${value}">LinkedIn</a>`;
                    } else {
                        li.innerText = `${key}: ${value}`;
                    }
                    ul.append(li);
                });
                td.append(ul);
            }
            tr.append(td);
        });
        table.append(tr);
    });
    parentElement.append(table);
};

    //---------------------

const content = document.getElementById('content')
render(content, data)

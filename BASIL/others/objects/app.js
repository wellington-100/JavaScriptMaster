





// JS: literal object (plain object)


let order = {
    name: "Pizza",
    image: "https://thecozycook.com/wp-content/uploads/2023/03/Homemade-Pizza-1.jpg",
    price: 100,
    available: true,
    quantity: 0,
    cost: 100
}

function increaseQuantity() {
    if(order.quantity < 10) {
        order.quantity++
        order.cost = order.quantity * order.price
        showOrder()
    } else {
        order.quantity = 10
    }
}

function decreaseQuantity() {
    if(order.quantity > 0) {
        order.quantity--
        order.cost = order.cost - order.price
        showOrder()
    } else {
        order.quantity = 0
    }
}

function showOrder() {
    content.innerHTML = `
        <h2>${order.name}</h2>
        <img src="${order.image}" width="200"/>
        <p>Price: ${order.price}</p>
        ${order.quantity > 0 ? `<p>Total cost: ${order.cost}</p>`: ``}
        <p>${order.available ? 'available': 'not available'}</p>
        ${order.available ? `<div><button onclick="decreaseQuantity()">-</button><span> ${order.quantity} </span><button onclick="increaseQuantity()">+</button></div>`: ``}

    `
}


showOrder()

// HW1: take a look at ?:
// HW2: decrement quantity (limit inc/dec 0..10)
// HW3*: update total cost

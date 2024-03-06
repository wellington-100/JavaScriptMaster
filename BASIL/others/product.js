





class Product{

    // structure
    constructor(name, price){
        this.name = name
        this.price = price
    }

    //behavior
    render(){
        return`
                <div>
                    <h2>${this.name}</h2>
                    <p>${this.price}</p>
                </div>
        `
    }

    incPrice(){
        this.price += 5
    }
}
/////
let p1 = new Product('Salad', 20)
let p2 = new Product('Soup', 25)

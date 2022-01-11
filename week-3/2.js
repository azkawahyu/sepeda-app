// Object Oriented Programming

class Product {
    constructor (name, price, stock, demand){
    this.name = name
    this.price = price
    this.stock = stock
    this.demand = demand
    }
    getSummary(){
        return "This product" , this.name , "is" , 
        this.price , "rupiah and now we have" , 
        this.stock , "in stock"
    }
    isAvailable(){
        if(this.stock>this.demand){
            return true
        } else {
        return false
        }
    }
    getTotalPrice(){
        return ("The total is " + this.price * this.demand)
    }
}

class Clothes extends Product{
    constructor (name, price, stock, demand, size){
        super(name, price, stock, demand)
        this.size = size
        }
        getSummary(){
            return ("This " + this.name + 
            " is " + 
            this.price + " rupiah and now we have " + 
            this.stock + " " + this.size + " in stock")
        }
        CheckoutShirt(){
            return ("I want to buy this " + this.name +
            " with size of " + this.size + " and i want " +
            this.demand + " ,so the total is? " + (this.demand*this.price) + " rupiah")
        }
}
const pesan = new Clothes("h&m", 250000, 5, 3, "xl")
console.log(pesan.CheckoutShirt())
const pesan1 = new Clothes("pull&bear", 350000, 8, 4, "m")
console.log(pesan1.CheckoutShirt())

class Food extends Product{
    constructor (name,price,stock,demand,type){
        super (name, price, stock, demand)
        this.type=type
    }
    getSummary(){
        return ("This " + this.name + " is a " + this.type + 
        " and the price is " + this.price + " now we can make " +
        this.stock)
    }
    CheckoutFood(){
        return ("I want to order " + this.name + " with the price of " + this.price + 
        " and i want " + this.demand + " , so the total is? " + (this.demand*this.price))
    }
}
const order = new Food("Soto", 15000, 20, 3, "food")
console.log(order.CheckoutFood())
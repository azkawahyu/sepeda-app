class Product{
    constructor(name, price, stock){
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
        getSummary(){
        console.log(`Product ${this.name} priced ${this.price} is available ${this.stock}`)
    }
        isAvailable(sum){
        console.log((sum > this.stock) ? "Product unavailable" : "Product available")
    }
    getTotalPrice(){
        console.log(this.price * this.stock)
    }
}

class Phone extends Product{
    constructor(name, price, stock, merk){
        super(name, price, stock)
        this.merk = merk
    }
    getSummary(){
        console.log(`Product ${this.name} from ${this.merk} brand priced ${this.price} and only available ${this.stock}.`)
    }
    checkOut(sum){
        console.log((sum > this.stock) ? "Unavailable stock" : 
        `You will purchase ${this.stock} ${this.name}, with total ${sum * this.price}`) 
    }
}

class Accessories extends Product{
    constructor(name, price, stock, merk, chip){
        super(name, price, stock)
        this.merk = merk
        this.chip = chip
    }
    getSummary(){
        console.log(`Product ${this.name} using ${this.chip} from ${this.merk} priced ${this.price} only available ${this.stock} pcs`)
    }
    checkOut(sum){
        console.log((sum > this.stock) ? "Unavailable stock" : 
        `You will purchase ${this.stock} ${this.name}, with total ${sum * this.price}`) 
    }
}

let Apple = new Phone("Iphone 13 Mini", 13000000, 2, "Apple");
Apple.getSummary()
Apple.isAvailable(2)
Apple.isAvailable(10)
Apple.getTotalPrice()
Apple.checkOut(5)
Apple.checkOut(2)

console.log("")

let Airpods = new Accessories("Airpods 3rd Generation", 3000000, 4, "Apple", "H1 Headphone Chip");
Airpods.getSummary()
Airpods.isAvailable(3)
Airpods.isAvailable(10)
Airpods.getTotalPrice()
Airpods.checkOut(20)
Airpods.checkOut(2)

class Product{
    constructor(name, price, stock){
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
    
    getSummary(){
        console.log(`Produk ${this.name} dengan harga ${this.price} memiliki stok sejumlah ${this.stock}`)
    }
    
    isAvailable(sum){
        console.log((sum > this.stock) ? "Barang tidak tersedia" : "Barang tersedia")
    }

    getTotalPrice(){
        console.log(this.price * this.stock)
    }
}

class Phone extends Product{
    constructor(name, price, stock, brand){
        super(name, price, stock)
        this.brand = brand
    }

    getSummary(){
        console.log(`Produk ${this.name} dari brand ${this.brand} dengan harga ${this.price} memiliki stok sejumlah ${this.stock}`)
    }

    checkOut(sum){
        console.log((sum > this.stock) ? "Stok tidak cukup" : 
        `Anda akan membeli ${this.name}, sejumlah ${this.stock}, dengan harga total ${sum * this.price}`) 
    }
}

class Notebook extends Product{
    constructor(name, price, stock, brand, processor){
        super(name, price, stock)
        this.brand = brand
        this.processor = processor
    }

    getSummary(){
        console.log(`Produk ${this.name} prosesor ${this.processor} dari brand ${this.brand} dengan harga ${this.price} memiliki stok sejumlah ${this.stock}`)
    }

    checkOut(sum){
        console.log((sum > this.stock) ? "Stok tidak cukup" : 
        `Anda akan membeli ${this.name}, sejumlah ${this.stock}, dengan harga total ${sum * this.price}`) 
    }
}

let samsung = new Phone("S10", 10000000, 3, "Samsung");
samsung.getSummary()
samsung.isAvailable(3)
samsung.isAvailable(10)
samsung.getTotalPrice()
samsung.checkOut(5)
samsung.checkOut(2)

console.log("==========")

let lenovo = new Notebook("Lenovo Legion 5", 20000000, 5, "Lenovo", "Ryzen 7");
lenovo.getSummary()
lenovo.isAvailable(3)
lenovo.isAvailable(10)
lenovo.getTotalPrice()
lenovo.checkOut(20)
lenovo.checkOut(2)
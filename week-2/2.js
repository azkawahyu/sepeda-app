//Objec-Oriented-Programming

class Product {
    constructor(name,price,stock){
        this.name = name;
        this.price = price;
        this.stock = stock;
    }

    getSummary(){
        return `\nNama: ${this.name}\nHarga: ${this.price}\nStok: ${this.stock}\nTipe: ${this.type}\nWarna: ${this.color}\n`
    }

    isAvailable(sum){
        return sum <= this.stock ? "Status Ketersediaan: " + true : "Status Ketersediaan: " + false;
    }

    getTotalPrice(sum) {
        return `Total Harga: ${sum * this.price}`}
}

class Clothes extends Product {
    constructor(name,price,stock,type,color){
        super(name,price,stock)
        this.type = type;
        this.color = color;
    }

    checkout(sum){
        return `Anda akan membeli ${this.name} ${this.type} ${this.color}, sejumlah ${sum}, dengan total harga Rp.${sum * this.price},-.`
    }
}

class Gadget extends Product {
    constructor(name,price,stock,type,color){
        super(name,price,stock)
        this.type = type;
        this.color = color;
    }
    checkout(sum){
        return `Anda akan membeli ${this.name} ${this.type} ${this.color}, sejumlah ${sum}, dengan total harga Rp.${sum * this.price},-.`
    }
}


//=======================================
//PRODUK PAKAIAN
console.log("=== Pembelian Produk Pakaian ===")
const kemeja = new Clothes("Pull & Bear",99000,5,"T-Shirt Polos", "Hitam")
console.log(kemeja);
console.log(kemeja.getSummary())
console.log(kemeja.getTotalPrice(6))
console.log(kemeja.isAvailable(6))
console.log(`\n==Checkout==`);
console.log(kemeja.checkout(2));


//PRODUK GADGET
console.log("\n \n === Pembelian Produk Gadget ===")
const mouse = new Gadget("Logitech Mouse",100000,10,"G15", "Merah")
console.log(mouse);
console.log(mouse.getSummary())
console.log(mouse.getTotalPrice(2))
console.log(mouse.isAvailable(2))
console.log(`\n==Checkout==`);
console.log(mouse.checkout(2));
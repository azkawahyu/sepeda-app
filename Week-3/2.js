class Product {
    constructor(name, price, stock) {
        this.name = name;
        this.price = price;
        this.stock = stock;
    };

    isAvailable(sum) {
        if (this.stock < sum)
            return false
    }
    getTotalPrice() {
        console.log(this.stock * this.price)
    }
}

class Clothes extends Product {
    constructor(name, price, stock, size) {
        super(name, price, stock);
    } Checkout(sum) {
        return (`Membeli ${this.name} sebanyak ${sum} seharga ${this.stock * this.price}`)
    };
}

class Gadgets extends Product {
    constructor(name, price, stock, color) {
        super(name, price, stock);
    } Checkout(sum) {
        return (`Membeli ${this.name} sebanyak ${sum} seharga ${this.stock * this.price}`)
    };
}


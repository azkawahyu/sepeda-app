class Computer {
    #owner
    constructor(){}
    getOwner(){
       console.log(this.#owner)
    }
    setOwner(owner){
        this.#owner = owner
    }
    #turnOnComputer(){
        console.log(`${this.#owner} turns on PC`)
    }
    ownerTurnOnComputer(){
        this.#turnOnComputer()
    }
}
let pc = new Computer()
pc.setOwner("Tengku")
pc.getOwner()
pc.ownerTurnOnComputer()

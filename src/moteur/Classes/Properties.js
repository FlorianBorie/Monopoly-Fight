const { Cell } = require("./Cell.js");

class Properties extends Cell {
    constructor(name, color, price, options = {}) {
        super(name, color)
        this.price = price

        this.rents = options.rents || []

        this.numberHouse = 0
        this.owner = null
        this.hypotheque = Math.round(this.price / 2)
        this.housePrice = options.housePrice
        this.ishypotheque = false
        this.img = options.img
    }

    get rent() {
        return this.rents[this.numberHouse] || 0;
    }
}

module.exports = { Properties };
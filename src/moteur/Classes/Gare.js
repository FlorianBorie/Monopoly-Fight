const { Cell } = require("./Cell.js");

class Gare extends Cell {
    constructor(name, color, img) {
        super(name, color)
        this.price = 200
        this.rent = 50
        this.owner = null
        this.img = img

    }
}

module.exports = { Gare };
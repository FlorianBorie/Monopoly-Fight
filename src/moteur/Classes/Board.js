const { Properties } = require("./Properties.js");


class Board {
    constructor(properties) {
        this.cells = properties;
    }
}

module.exports = { Board };
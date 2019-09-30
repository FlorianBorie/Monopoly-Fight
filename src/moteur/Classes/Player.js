const { Properties } = require("./Properties.js");
const { Gare } = require("./Gare.js");
//const scanf = require('scanf')

class Player {
    constructor(name, color) {
        this.name = name
        this.color = color
        this.money = 1500
        this.propertiesList = []
        this.actualPosition = 0
        this.nbDoubles = 0
        this.willReplay = false
        this.turnInJail = 0
        this.nbColors = [{ color: "brown", nb: 0 },
            { color: "clairBlue", nb: 0 },
            { color: "purple", nb: 0 },
            { color: "orange", nb: 0 },
            { color: "red", nb: 0 },
            { color: "yellow", nb: 0 },
            { color: "green", nb: 0 },
            { color: "blue", nb: 0 }
        ]
    }

    rollDice() {
        let dice1 = Math.floor(Math.random() * Math.floor(6)) + 1
        return dice1
    }

    onAProperty(property) {
        if (property instanceof Properties) {
            if (property.owner == null) {
                this.buyAProperty(property)
            } else {
                this.payARent(property, property.owner)
            }
        } else {
            if (property instanceof Gare) {
                if (property.owner == null) {
                    this.buyAProperty(property)
                } else {
                    this.payARent(property, property.owner)
                }
            } else {
                alert("Vous etes tombé sur la case " + property.name)
            }
        }
    }

    payARent(property, owner) {
        let rent = null;

        if (property instanceof Gare) {
            let count = 0
            for (let p of owner.propertiesList) {
                if (p instanceof Gare) {
                    count += 1
                }
            }
            rent = property.rent * count
        } else {
            rent = property.rent
        }
        alert("Vous payer le loyer de " + property.name + " à " + owner.name + ". Il s'élève à " + rent)

        this.money -= rent
        owner.money += rent
        alert("Il vous reste " + this.money)
    }

    buyAProperty(property) {
        if (this.money - property.price >= 0) {
            //console.log("Voulez vous acheter " + property.name + " ? Il vous resterai " + (this.money - property.price) + " (y/n)")
            let awnser = prompt("Voulez vous acheter " + property.name + " ? Il vous resterai " + (this.money - property.price) + " (y/n)");
            if (awnser === 'y') {
                this.money -= property.price
                this.propertiesList.push(property)
                property.owner = this
                for (let color of this.nbColors) {
                    if (color.color === property.color) {
                        color.nb += 1
                        alert("Désormais vous avez " + color.nb + " carte(s) de couleur " + color.color)
                    }
                }
                alert("Vous avez acheté " + property.name + "\n Il vous reste " + this.money)
            } else {
                alert("Vous n'avez pas acheté " + property.name)
            }
        } else {
            alert("Vous n'avez pas assez d'argent pour acheter " + property.name)
        }
    }

    playerTurn(board) {
        alert("C'est le tour de " + this.name)
        this.willReplay = false
        let a = this.rollDice()
        let b = this.rollDice()
        let roll = a + b
        alert(this.name + " a fais " + a + " et " + b)
        if (a === b) {
            if (this.turnInJail !== 0) {
                this.turnInJail = 0
            }
            this.nbDoubles += 1
            this.willReplay = true
            if (this.nbDoubles === 3) {
                alert("ALLEZ EN PRISON (Vous etes trop rapide)")
                this.actualPosition = 10
                this.willReplay = false
                this.turnInJail = 3
                return;
            }
            alert("DINGDINGDONG !! Vous avez fait un double, vous pourrez rejouer ! ")
        }

        if (this.turnInJail !== 0) {
            //console.log("Voulez vous payer 50 pour sortir maintenant ? (y/n)")
            let awnser = prompt("Voulez vous payer 50 pour sortir maintenant ? (y/n)");
            if (awnser === 'y') {
                this.turnInJail = 0
                this.money -= 50
                alert("Vous sortez de prison")
            } else {
                this.turnInJail -= 1
                alert("Dommage vous etes enprisonné ! Il vous reste " + (this.turnInJail + 1) + "tours à attendre :)")
                return;
            }
        }

        if ((this.actualPosition + roll) > (board.cells.length - 1)) {
            let tmp = board.cells.length - this.actualPosition
            roll -= tmp
            this.actualPosition = roll
            alert("DINGDINGDING !! C'est jour de paie")
            this.money += 200
        } else {
            this.actualPosition += roll
        }
        if (this.actualPosition === 30) {
            alert("ALLEZ EN PRISON ! NE PASSEZ PAS PAR LA CASE DEPART !! ")
            this.actualPosition = 10
            this.willReplay = false
            this.turnInJail = 3
            return;
        }
        this.onAProperty(board.cells[this.actualPosition])

    }

    canBuild() {
        for (let color of this.nbColors) {
            if (color.nb === 3) {
                alert("Vous pouvez construire une maison sur la couleur " + color.color)
                return (color.color)
            }
        }
        return null
    }

    build(color) {
        for (let properties of this.propertiesList) {
            if (properties.color === color) {
                //console.log("Voulez vous construire une maison sur le terrain " + properties.name + " ?\n La maison est au prix de " + properties.housePrice + " (y/n)")
                let awnser = prompt("Voulez vous construire une maison sur le terrain " + properties.name + " ?\n La maison est au prix de " + properties.housePrice + " (y/n)");
                if (awnser === 'y') {
                    this.money -= properties.housePrice
                    properties.numberHouse += 1
                    alert("Vous avez désormais " + properties.numberHouse + " maisons sur la case " + properties.name)
                }
            }
        }
    }

    endTurn() {
        let color = this.canBuild()
        if (color !== null) {
            this.build(color)
        }
        alert("Le tour de " + this.name + " est terminé !\n")
        this.nbDoubles = 0
    }
}

module.exports = { Player };
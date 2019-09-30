const { Properties } = require("./Properties.js");
const { Player } = require("./Player.js");
const { Board } = require("./Board.js");

class Game {
    constructor(board, players) {
        this.board = board
        this.playerList = players
        this.currentPlayer = null
    }
    nextPlayer() {
        console.log("le joueur actuel est ", this.currentPlayer)
        let futur = null
        switch (this.currentPlayer) {
            case null:
                futur = this.playerList[0]
                break;
            case (this.playerList[0]):
                console.log("ahahah")
                futur = this.playerList[1]
                break;
            case (this.playerList[1]):
                futur = this.playerList[2]
                break;
            case (this.playerList[2]):
                futur = this.playerList[3]
                break;
            case (this.playerList[3]):
                futur = this.playerList[0]
                break;
        }
        this.currentPlayer = futur
        console.log("le joueur actuel est ", this.currentPlayer)
    }

    willPlay() {
        console.log("willplaystart")
        do {
            this.currentPlayer.playerTurn(this.board)
        } while (this.currentPlayer.willReplay === true)
        this.currentPlayer.endTurn()
        console.log("willplayend")

    }


}

module.exports = { Game };
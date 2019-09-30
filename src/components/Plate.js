import React from 'react';
import { Button, Modal, Col, Row } from 'react-bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../assets/plate.css'
import PlateCellProperty from './PlateCellProperty'

const { Properties } = require("../moteur/Classes/Properties.js");
const { Player } = require("../moteur/Classes/Player.js");
const { Board } = require("../moteur/Classes/Board.js");
const { Game } = require("../moteur/Classes/Game.js");
const { Cell } = require("../moteur/Classes/Cell.js");
const { Gare } = require("../moteur/Classes/Gare.js");

export default class Plate extends React.Component {
    cells = [
        new Cell("Départ", "Uncolored"),
        new Properties("AngularJS", "dark-purple", 60, {
            rents: [ 2, 10, 30, 90, 160, 250 ],
            housePrice: 50,
            img: require('../assets/logo_city/angular.png'),
        }),
        new Cell("Duel", "Uncolored"),
        new Properties("ReactJS", "dark-purple", 60, {
            rents: [ 2, 10, 30, 90, 160, 250 ],
            housePrice: 50,
            img: require('../assets/logo_city/reactjs.jpg'),
        }),
        new Properties("VueJS", "dark-purple", 80, {
            rents: [ 4, 20, 60, 180, 320, 450 ],
            housePrice: 50,
            img: require('../assets/logo_city/vue.png'),
        }),
        new Gare("Ynov Campus Nantes","Uncolored", require('../assets/logo_city/ynovNantes.png')),
        new Properties("Express", "light-blue", 100, {
            rents: [ 6, 30, 90, 270, 400, 550 ],
            housePrice: 50,
            img: require('../assets/logo_city/expressJS.png'),
        }),
        new Cell("Duel", "Uncolored"),
        new Properties("Django", "light-blue", 100, {
            rents: [ 6, 30, 90, 270, 400, 550 ],
            housePrice: 50,
            img: require('../assets/logo_city/django.png'),
        }),
        new Properties("Rails", "light-blue", 120, {
            rents: [ 8, 40, 100, 300, 450, 600 ],
            housePrice: 50,
            img: require('../assets/logo_city/rails.png'),
        }),
        new Cell("Visite", "Uncolored"),
        new Properties("Sublime", "purple", 140, {
            rents: [ 10, 50, 150, 450, 625, 750 ],
            housePrice: 100,
            img: require('../assets/logo_city/sublime_texte.png'),
        }),
        new Cell("Duel", "Uncolored"),
        new Properties("Visual Studio Code", "purple", 140, {
            rents: [ 10, 50, 150, 450, 625, 750 ],
            housePrice: 100,
            img: require('../assets/logo_city/vsc.png'),
        }),
        new Properties("VIM", "purple", 160, {
            rents: [ 12, 60, 180, 500, 700, 900 ],
            housePrice: 100,
            img: require('../assets/logo_city/vim.png'),
        }),
        new Gare("Ynov Campus Lyon","Uncolored", require('../assets/logo_city/ynovLyon.png')),
        new Properties("Eclipse", "orange", 180, {
            rents: [ 14, 70, 200, 550, 750, 950 ],
            housePrice: 100,
            img: require('../assets/logo_city/eclipse.png'),
        }),
        new Cell("Duel", "Uncolored"),
        new Properties("NetBeans", "orange", 180, {
            rents: [ 14, 70, 200, 550, 750, 950 ],
            housePrice: 10,
            img: require('../assets/logo_city/netBeans.png'),
        }),
        new Properties("IntelliJ", "orange", 200, {
            rents: [ 16, 80, 220, 600, 800, 1000 ],
            housePrice: 100,
            img: require('../assets/logo_city/intelliJ.png'),
        }),
        new Cell("Boutique", "Uncolored"),
        new Properties("JavaScript", "red", 220, {
            rents: [ 18, 90, 250, 700, 875, 1050 ],
            housePrice: 150,
            img: require('../assets/logo_city/js.jpg'),
        }),
        new Cell("Duel", "Uncolored"),
        new Properties("HTML/CSS", "red", 220, {
            rents: [ 18, 90, 250, 700, 875, 1050],
            housePrice:  150,
            img: require('../assets/logo_city/html_css.jpg'),
        }),
        new Properties("SQL", "red", 240, {
            rents: [ 20, 100, 300, 750, 925, 1100 ],
            housePrice: 150,
            img: require('../assets/logo_city/sql.png'),
        }),
        new Gare("Ynov Campus Paris","Uncolored", require('../assets/logo_city/ynovParis.png')),
        new Properties("Python", "yellow", 260, {
            rents: [ 22, 110, 330, 800, 975, 1150 ],
            housePrice: 150,
            img: require('../assets/logo_city/python.png'),
        }),
        new Properties("Java", "yellow", 260, {
            rents: [ 22, 110, 330, 800, 975, 1150 ],
            housePrice: 150,
            img: require('../assets/logo_city/java.png')
        }),
        new Cell("Duel", "Uncolored"),
        new Properties("Bash", "yellow", 280, {
            rents: [ 24, 120, 360, 850, 1025, 1200 ],
            housePrice: 150,
            img: require('../assets/logo_city/bash.png'),
        }),
        new Cell("Prison", "Uncolored"),
        new Properties("Microsoft", "green", 300, {
            rents: [ 26, 130, 390, 900, 1100, 1275 ],
            housePrice: 200,
            img: require('../assets/logo_city/microsoft.jpg'),
        }),
        new Properties("Samsung", "green", 300, {
            rents: [ 26, 130, 390, 900, 1100, 1275 ],
            housePrice: 200,
            img:'../assets/logo_city/samsung.png',
        }),
        new Cell("Duel", "Uncolored"),
        new Properties("Thales", "green", 320, {
            rents: [ 28, 150, 450, 1000, 1200, 1400 ],
            housePrice: 200,
            img: require('../assets/logo_city/thales.jpg'),
        }),
        new Gare("Ynov Campus Bordeaux","Uncolored", require('../assets/logo_city/ynovBordeaux.png')),
        new Properties("CapGemini", "dark-blue", 350, {
            rents: [ 35, 175, 500, 1100, 1300, 1500 ],
            housePrice: 200,
            img: require('../assets/logo_city/capgemini.jpg'),
        }),
        new Cell("Duel", "Uncolored"),
        new Properties("CodeBuds", "dark-blue", 350, {
            rents: [ 35, 175, 500, 1100, 1300, 1500 ],
            housePrice: 200,
            img: require('../assets/logo_city/code_buds.PNG'),
        }),
        new Properties("Wikodit", "dark-blue", 400, {
            rents: [ 50, 200, 600, 1400, 1700, 2000 ],
            housePrice: 200,
            img:'../assets/logo_city/wikodit.jpg',
        }),
    ];

        player1Name = prompt("Entrez le nom du joueur 1")
        player2Name = prompt("Entrez le nom du joueur 2")
        player3Name = prompt("Entrez le nom du joueur 3")
        player4Name = prompt("Entrez le nom du joueur 4")
        player1 = new Player(this.player1Name, "red")
        player2 = new Player(this.player2Name, "yellow")
        player3 = new Player(this.player3Name, "purple")
        player4 = new Player(this.player4Name, "blue")
        

        board = new Board(this.cells)
        

    constructor(props){
        super(props);
        this.state = {
            game: new Game(this.board, [ this.player1, this.player2, this.player3, this.player4]),
            isJustMounted: true,
            renderBool: false
        }
        this.getPlayers = this.props.getPlayers([ this.player1, this.player2, this.player3, this.player4])
    }

    componentDidMount(){
        setTimeout(() => this.setState({ isJustMounted: false }), 500);
    }

    wherePlayersIs(){
        let playersByCell = {}
        for (let player of this.state.game.playerList){
            if (!playersByCell[player.actualPosition]) {
                playersByCell[player.actualPosition] = []
            }
            playersByCell[player.actualPosition].push(player)
        }
        return playersByCell
    }

   

    //init(){
        

       // this.setState({game: new Game(board, [ player1, player2, player3, player4 ])})
   // }
    
    handleClick(){
        console.log("clic")
        this.state.game.nextPlayer()
        this.state.game.willPlay()
        this.setState(prevState => ({
            renderBool: !prevState.renderBool
        }))
        this.props.getPlayers(this.state.game.playerList)
    }

    //didMount http request to get information of user

    render(){
        let playersByCell = this.wherePlayersIs()
        console.log('render')
        const plateCells = []
        for(let i=0; i<40; i++){
            if(!(i%10)) continue;
            plateCells.push(<PlateCellProperty
                key={i}
                name={this.cells[i].name} 
                color={this.cells[i].color}
                img={this.cells[i].img}
                price={this.cells[i].price}
                playerOnCell={playersByCell[i]}
            />)
        }

        const plateCellsHB = plateCells.slice(0, 9).reverse();
        const plateCellsVL = plateCells.slice(9, 18).reverse();
        const plateCellsHT = plateCells.slice(18, 27);
        const plateCellsVR = plateCells.slice(27, 36);

        const depart = <PlateCellProperty name={this.cells[0].name} playerOnCell={playersByCell[0]}/>
        const visite = <PlateCellProperty name={this.cells[10].name} playerOnCell={playersByCell[10]}/>
        const shop = <PlateCellProperty name={this.cells[20].name} playerOnCell={playersByCell[20]}/>
        const prison = <PlateCellProperty name={this.cells[30].name} playerOnCell={playersByCell[30]}/>
        
        return(
            <div className="all_body">
                <div id="body_plate.">
                    <div className={`table ${this.state.isJustMounted ? 'table--init' : ''}`}>
                        <div className="board">
                            <div className="center">
                                <div><h1 className="title">MONOPOLY FIGHT !</h1></div>
                                <div id="imgBitcoin"><img src={require('../assets/logo_city/bitcoin.png')} style={{width: '450px', marginLeft: '-378px', marginTop: '-160px'}}></img></div>
                                <div><Button onClick={this.handleClick.bind(this)}> Lancer les dés</Button>
                                </div>
                            </div>
                            {depart}
                            <div className="row horizontal-row bottom-row">
                                { plateCellsHB }
                            </div>
                            {visite}
                            <div className="row vertical-row left-row">
                                { plateCellsVL }
                            </div>
                            {shop}
                            <div className="row horizontal-row top-row">
                                { plateCellsHT }
                            </div>
                            {prison}
                            <div className="row vertical-row right-row">
                                { plateCellsVR }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ) 
    }
}
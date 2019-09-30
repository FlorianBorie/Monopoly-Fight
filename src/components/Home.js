import React from 'react';
import '../assets/style.css'
import { Button } from 'react-bootstrap';
import NewGame from './NewGame.js';
import Sidenav from './Sidenav.js'

export default class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            connecter : false,
            nbJoueurs : 0,
            showNewGame : false
        }
    }

    startGame(){
        // accès à la page de jeu
    }
    
    creerPartie(){
        this.setState((prevState) => ({
            connecter : true,
            nbJoueurs : 1
        }))
        console.log(`Nombre de joueurs :${this.state.nbJoueurs}. Attente de plus de joueurs`)
    }

    rejoindrePartie(){
        if (this.state.nbJoueurs>=1 && this.state.nbJoueurs<3){
            this.setState((prevState) => ({
                connecter : true,
                nbJoueurs : prevState.nbJoueurs + 1,
            }))
        }else {
            this.creerPartie()
        }
        console.log(`${this.state.nbJoueurs}`)

        
    }

    openNewGame(){
        this.setState({
            showNewGame: true
        })
      }

    closeNewGame(){
        this.setState({
            showNewGame: false
        })
    }

    try = () => {
        this.props.history.push('/game');
    }

    render(){
        return(
            <div>
                
                <Sidenav/>
                <div className="begin-game">
                <div className="btn_accueil">
                    <Button className="btn btn-warning" onClick ={this.try} style={{color : "black",borderStyle: "none"}}>Play</Button>
                </div>
                <br />
                <br />
                <div className="btn_accueil">
                    <div className="btn_create_games">
                        <Button className="btn btn-warning" onClick={this.openNewGame.bind(this)} style={{color : "black",borderStyle: "none"}}>Create game</Button>
                    </div>
                    <div className="btn_join_game">
                        <Button className="btn btn-warning" style={{color : "black",borderStyle: "none"}}>Join game</Button>
                    </div>
                </div>
                <NewGame show={this.state.showNewGame} close={this.closeNewGame.bind(this)}/>
            </div>
            </div>
            
        )
    }
}
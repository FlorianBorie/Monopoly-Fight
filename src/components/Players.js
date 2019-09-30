import React from 'react';
//import { httpGetRequest } from '../HttpRequests.js'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../assets/style.css'

export default class Players extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    renderPlayers(){
        console.log("players azert:", this.props.players)

        if(this.props.players === null){
            console.log("tutu")
            return null;
        } else{
                return(
                    <div>
                        {
                            this.props.players.map((player) => {
                                return(          
                                        <div className="player-infos">{player.name} : {player.money} €</div>
                                    )
                                }
                            )
                        }
                    </div>
                )
        }
        

    }

    render(){
        return(
            <div className="players-container">
                {this.renderPlayers()}
            </div>
        )
    }
}


import React from 'react';
import '../assets/style.css'
import { Row, Col } from 'react-bootstrap';
import Plate from './Plate.js'
import Players from './Players.js'
import Tchat from './Tchat.js'
import CardContainer from './CardContainer.js'

export default class Assemble extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            players: null
        }
    }

    getInfo(players){
        this.setState({
            players
        }, () => {
            console.log(this.state)
        })
    }


    render() {
        return(
            <div className="assemble-container">
                <Row style={{marginRight: "0", marginLeft: "0"}}>
                    <Col xs="9" style={{paddingRight: "0", paddingLeft: "0"}}>
                        <div className="plate-container" style={{height: "87%"}}>
                            <Plate getPlayers={this.getInfo.bind(this)}/>
                        </div>
                    </Col>
                    <Col xs="3" style={{paddingRight: "0", paddingLeft: "0", position:"fixed", right:'10px', top:'40px'}}>
                        <Players players={this.state.players}/>
                        <Tchat/>
                    </Col>
                </Row>
                <CardContainer/>
            </div>
        ) 
    }
}
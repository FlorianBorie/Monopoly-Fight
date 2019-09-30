import React from 'react';
import { Button } from 'react-bootstrap';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../assets/miniGame.css'

import Countdown from '../Countdown.js'

export default class Clicker extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            show: true,
            nb_clicks: 0,
            status: false
        }
    }

    handleClick(){
        this.setState( prevState => ({
            nb_clicks: prevState.nb_clicks + 1
        }), () => {
            console.log(this.state.nb_clicks);
        })
    }

    render(){

        return(
            <div className='content'>
                <div>Time 
                    <Countdown/>
                </div>
                <div className='clicker-score'>Clicks {this.state.nb_clicks}</div>
                <Button onClick={this.handleClick.bind(this)} disabled={!this.state.status}>
                    handleClick
                </Button>
            </div>
        )
    }
}


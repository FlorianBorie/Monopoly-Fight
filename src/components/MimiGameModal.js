import React from 'react';
import { Modal } from 'react-bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Clicker from './mini-games/Clicker';

export default class MiniGameModal extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            show: true,
            miniGame : {
                name: "Clicker",
            },
        }
    }

    render(){
        return(
            <div>
                <Modal show={true}>
                    <Modal.Header>
                        <Modal.Title>{this.state.miniGame.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="mini-game-content">
                            <Clicker/>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}


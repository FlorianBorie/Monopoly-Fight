import React from "react";
import { Button, Modal } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';

export default class ShopInGame extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items : [
                {
                    nom: "dé triple",
                    prix: 7,
                },
                {
                    nom: "ticket lotterie",
                    prix: 5,
                    description: "Tente ta chance et espères remporter les 50 coins"
                }, 
                {
                    nom: "Ripou",
                    prix: 20,
                    description: "Corromp le policier qui allais vous envoyer en prison"
                }
            ]
        }
    }



    render(){
        return(
            <div className="shop-container">
                <Modal show={true}>
                    <Modal.Header>
                    <Modal.Title style={{textAlign: "center"}}>
                        Shop
                    </Modal.Title>
                    <Button onClick={this.props.close}>Leave</Button>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>  
                            <Col xs="4">
                                <div className="shop-item-name">
                                    "Dé triple"
                                </div>
                                <div className="shop-item-selector">
                                    <div className="shop-item-ico1">
                                        <div className="shop-item-ico2"></div>
                                    </div>
                                </div>
                                <div className="shop-item-desc">
                                    {this.state.items[3]}
                                </div>
                            </Col>
                            <Col xs="4">
                                test
                            </Col>
                            <Col xs="4">
                                test
                            </Col>
                        </Row>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}
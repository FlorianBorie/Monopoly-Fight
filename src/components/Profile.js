import React from 'react';
import { Button, Modal, Col, Row } from 'react-bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../assets/miniGame.css'
import '../assets/style.css'

export default class Profile extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            user: {
                username: "kevin",
                email: "kevin10@ynov.com",
                avatar: {},
                age: 10,
                country: "France"
            } 
        }
    }

    handleUpdate(){
        console.log (this.state)
    }

    //didMount http request to get information of user

    render(){
        return(
            <div className='profile-content'>
                <Modal show={this.props.show}>
                    <Modal.Header>
                        <Modal.Title>
                            Profile
                        </Modal.Title>
                        <Button onClick={this.props.close}>Close</Button>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="profile">
                            <Row>
                                <Col xs="5">
                                    <div style={{position: "relative"}}>
                                        <div className="avatar">
                                            
                                        </div>
                                    </div>
                                    <div className="Badges">
                                    </div>
                                </Col>
                                <Col xs="7" style={{marginLeft: '230px'}}>
                                    <div className="Informations">
                                        <p id="Username">Username : {this.state.user.username}</p>
                                        <p id="email">E-mail : {this.state.user.email}</p>
                                        <p id="age">Age : {this.state.user.age}</p>
                                        <p id="Country">Country : {this.state.user.country}</p>
                                        <Button onClick={this.handleUpdate.bind(this)}>Modifier mes informations</Button>
                                    </div>    
                                </Col>
                            </Row>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}


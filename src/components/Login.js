import React from 'react';
import { Button } from 'react-bootstrap';
import { Input, InputGroup, InputGroupAddon } from 'reactstrap'
//import {  } from 'reactstrap';
//import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import '../../assets/miniGame.css'
import '../assets/style.css'
import Sidenav from './Sidenav';

export default class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: "",
        }
    }

    handleSubmit(){
        console.log(this.state)
    }

    handleChangeUsername(e){
        this.setState({
            username: e.target.value
        })
    }

    handleChangePassword(e){
        this.setState({
            password: e.target.value
        })
    }

    render(){
        return(
            <div>
                <Sidenav/>
                <div className="form-container" style={{}}>
                    <div className="login-container">
                        <div>
                            <InputGroup className="mb-3">
                                <InputGroupAddon addonType="prepend">Username</InputGroupAddon>
                                <Input onChange={this.handleChangeUsername.bind(this)} />
                            </InputGroup>
                        </div>
                        <div>
                            <InputGroup className="mb-3">
                                <InputGroupAddon addonType="prepend">Password</InputGroupAddon>
                                <Input onChange={this.handleChangePassword.bind(this)} />
                            </InputGroup>
                        </div>        
                        <Button onClick={this.handleSubmit.bind(this)}>Se connecter</Button>
                    </div>  
                </div>
            </div>   
        )
    }
}


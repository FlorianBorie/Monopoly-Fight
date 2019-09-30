import React from 'react';
import { Button } from 'react-bootstrap';
import { Input, InputGroup, InputGroupAddon } from 'reactstrap'
import Sidenav from './Sidenav';
import { httpPostRequest } from '../HttpRequest';

export default class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: "",
            lastname: "",
            email: "",
            username: "",
            password: "",
            age: null
        }
    }

    handleSubmit() {
        console.log(this.state)
        const url = 'http://localhost:8080/users/register';
        const body = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            username: this.state.username,
            age: this.state.age,
            password: this.state.password
        }

        console.log("LE BODY EST LE SUIVANT :", body)

        httpPostRequest(url, body)
            .then((data) => {
                console.log(data)
            })
    }

    handleChangeFirstname(e) {
        this.setState({
            firstname: e.target.value
        })
    }

    handleChangeLastname(e) {
        this.setState({
            lastname: e.target.value
        })
    }

    handleChangeEmail(e) {
        this.setState({
            email: e.target.value
        })
    }

    handleChangeUsername(e) {
        this.setState({
            username: e.target.value
        })
    }

    handleChangePassword(e) {
        this.setState({
            password: e.target.value
        })
    }
    handleChangeAge(e) {
        this.setState({
            age: e.target.value
        })
    }

    render() {
        return ( <
            div >
            <
            Sidenav / >
            <
            div className = "form-container" >
            <
            div className = "register-container" >
            <
            div >
            <
            InputGroup className = "mb-3" >
            <
            InputGroupAddon addonType = "prepend" > Firstname < /InputGroupAddon>  <
            Input onChange = { this.handleChangeFirstname.bind(this) }
            />   <
            /InputGroup>   <
            /div> <
            div >
            <
            InputGroup className = "mb-3" >
            <
            InputGroupAddon addonType = "prepend" >
            Lastname <
            /InputGroupAddon>   <
            Input onChange = { this.handleChangeLastname.bind(this) }
            /> <
            /InputGroup>   <
            /div>   <
            div >
            <
            InputGroup className = "mb-3" >
            <
            InputGroupAddon addonType = "prepend" > Email < /InputGroupAddon> <
            Input onChange = { this.handleChangeEmail.bind(this) }
            /> <
            /InputGroup> <
            /div> <
            div >
            <
            InputGroup className = "mb-3" >
            <
            InputGroupAddon addonType = "prepend" > Username < /InputGroupAddon> <
            Input onChange = { this.handleChangeUsername.bind(this) }
            /> <
            /InputGroup>   <
            /div>   <
            div >
            <
            InputGroup >
            <
            InputGroupAddon addonType = "prepend" > Password < /InputGroupAddon> <
            Input onChange = { this.handleChangePassword.bind(this) }
            />   <
            /InputGroup>   <
            /div>  <
            div >
            <
            InputGroup className = "mb-3" >
            <
            InputGroupAddon addonType = "prepend" > Age < /InputGroupAddon> <
            Input onChange = { this.handleChangeAge.bind(this) }
            pattern = "\d{1,3}" / >
            <
            /InputGroup>   <
            /div>   <
            Button style = {
                { marginTop: "10px" } }
            onClick = { this.handleSubmit.bind(this) } >
            Se connecter <
            /Button>   <
            /div>   <
            /div> <
            /div>
        )
    }
}
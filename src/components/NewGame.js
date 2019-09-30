import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Form, FormGroup, Label, Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap'
import Home from './Home.js'

export default class Register extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            idGame: "",
            nameGame: "",
            numPlayers: "",
            privateParty: false,
        }
    }

    handleSubmit(){
        console.log(this.state)
    }

    handleChangeIdGame(e){
        this.setState({
            idGame: e.target.value
        })
    }

    handleChangeNameGame(e){
        this.setState({
            numPlayers: e.target.value
        })
    }

    handleChangeNumPlayers(e){
        this.setState(prevState => ({
           privateParty: !prevState.prevState
        }))
    }

    handleChangeTypeParty(){
      this.setState(prevState => ({
        privateParty: !prevState.privateParty
      }))
    }
    
    displayPasswordRow(){
      if(this.state.privateParty){
        return(
          <InputGroup>
            <InputGroupAddon addonType="prepend">Mot de passe :</InputGroupAddon>
            <Input onChange={this.handleChangeIdGame.bind(this)}/>
          </InputGroup>
        )
      } else {
          return null
      }
    }
    

    render(){
        return(
        <div className='profile-content'>
          <Modal show={this.props.show}>
            <Modal.Header>
              <Modal.Title>
                Nouvelle Partie : 
              </Modal.Title>
              <Button onClick={this.props.close}>Close</Button>
            </Modal.Header>
            <Modal.Body>
              <div className="profile">
                <Form>
                  <FormGroup row>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">Nom de la partie :</InputGroupAddon>
                      <Input onChange={this.handleChangeNameGame.bind(this)} />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup row>
                    <InputGroupText>Private room </InputGroupText>
                  <InputGroupText style={{textAlign: "center", paddingLeft: "39px"}}>
                    <Input type="checkbox" value={this.state.privateParty} onChange={this.handleChangeTypeParty.bind(this)}/>
                  </InputGroupText>
                  {this.displayPasswordRow()}
                  </FormGroup>
                    <FormGroup row>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">Nombre de joueurs :</InputGroupAddon>
                        <Input type="select" name="select" id="exampleSelect" onChange={this.handleChangeNumPlayers.bind(this)}>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                        </Input>
                      </InputGroup>
                  </FormGroup>
                    <Button style={{textAlign: "center"}} onClick={this.handleSubmit.bind(this)}>Créer</Button>
                </Form>  
              </div>
            </Modal.Body>
          </Modal>
        </div>
        )
    }
}


import React from 'react';
import '../assets/style.css'
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';
import Profile from './Profile.js';

export default class Sidenav extends React.Component {
    constructor(props){
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
          collapsed: true,
          showProfile: false
        };
      }

      toggleNavbar() {
        this.setState({
          collapsed: !this.state.collapsed
        });
      }

      openProfile(){
        this.setState({
            showProfile: true
        })
      }

    closeProfile(){
        this.setState({
            showProfile: false
        })
    }

    render() {
        return (
          <div className="sidenav-container">
            <div className="sidenav-list">
              <Navbar light>
                <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                  <Collapse isOpen={!this.state.collapsed} navbar style={{zIndex: "10", backgroundColor: "rgb(207, 226, 199)"}}>
                    <Nav navbar>
                      <NavItem>
                          <NavLink href="/">Home</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="/Login">Connexion</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="/register">Register</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="/game">Game</NavLink>
                      </NavItem>
                  </Nav>
                </Collapse>
              </Navbar>
            </div>
            <div style={{width: "100%", height: "56px", backgroundColor: "#cfe2c7"}}>
              <div style={{display: "inline-block", backgroundColor: "#cfe2c7", color: "black", padding: "5px"}}>Monopoly FIGHT !</div>
                <div onClick={this.openProfile.bind(this)} 
                style={{
                  position: "absolute",
                  display: "inline-block", 
                  width: "40px", 
                  height: "40px", 
                  backgroundColor: "red", 
                  right: "0", 
                  margin: "8px", 
                  borderRadius: "50%"
                  }}/>
              </div>
              <Profile show={this.state.showProfile} close={this.closeProfile.bind(this)}/>
          </div>
      );
    }
}
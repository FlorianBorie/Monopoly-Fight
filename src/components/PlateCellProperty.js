import React from 'react';
import { Button, Modal, Col, Row } from 'react-bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../assets/plate.css'

export default class PlateCellProperty extends React.Component {
    constructor(props){
        super(props);
        this.img = props.img
        
    }

    render(){
        const playerOnCell = this.props.playerOnCell || []
        //console.log("ceci est la case " + this.props.name + "la liste des joueurs sur cette case est "+ playerOnCell)
        const players = playerOnCell.map((player) => (
            <p key={player.name} className="PlateCellProperty__pawn" style={{ bottom: '40px', right: '50px', backgroundColor: player.color }}></p>
        ))
        if (this.props.name === "Duel"){
            return(
                <div className="space chance">
                    <div className="container">
                        <div className="name" style={{fontSize:'20px'}}>{this.props.name}</div>
                        <div><img src={require('../assets/logo_city/duel.jpg')} style={{width: '50px', marginTop:'10px', marginBottom:'10px'}}></img></div>
                        <div>{players}</div>
                        <i className="drawing fa fa-question"></i>
                    </div>
                </div>
            )
        }else if (this.props.name.indexOf("Ynov") === 0){
            return(
                <div className="space railroad">
                    <div className="container">
                        <div className="name" style={{fontSize:'12px', marginTop:'-10px'}}>{this.props.name}</div>
                        <div><img src={this.img} style={{width: '50px', marginBottom:'5px'}}></img></div>
                        <i className="drawing fa fa-subway"></i>
                        <div className="price" style={{fontSize:'10px'}}>Price ${this.props.price}</div>
                        <div>{players}</div>
                    </div>
                </div>
            )
        
        }else if (this.props.name==="Départ"){
            return(
                <div className="space corner go">
                    <div className="container">
                        <div className="instructions"></div>
                        <div id="img_depart"><img src={require('../assets/logo_city/fleche_depart.jpg')} style={{width:'80px'}}></img></div>
                        <div className="go-word">go</div>
                        <div>{players}</div>
                    </div>
                </div>
                )

        }else if (this.props.name==="Boutique"){
            return(
                <div className="space corner free-parking">
                <div className="container"> 
                    <div className="name">GO TO</div>
                    <i className="drawing fa fa-car"></i>
                    <div><img src={require('../assets/logo_city/shop.png')} style={{width: '50px'}}></img></div>                        
                    <div className="name">SHOP</div>
                    <div>{players}</div>
                </div>
            </div>
                )

        }else if (this.props.name==="Prison"){
            return(
                <div className="space corner go-to-jail">
                    <div className="container">
                        <div className="name">Go To</div>
                        <i className="drawing fa fa-gavel"></i>
                        <div><img src={require('../assets/logo_city/jail.png')} style={{width: '40px'}}></img></div> 
                        <div className="name">Jail</div>
                        <div>{players}</div>
                    </div>
                </div>
                )
        
        }else if (this.props.name==="Visite"){
            return(
                <div className="space corner jail">
                <div className="just" style={{fontSize:"20px"}}>Just</div>
                <div className="drawing">
                    <div className="container">
                        <div className="name">In</div>
                        <div className="window">
                            <div className="bar"></div>
                            <div className="bar"></div>
                            <div className="bar"></div>
                            <i className="person fa fa-frown-o"></i>
                        </div>
                        <div className="name">Jail</div>
                        <div>{players}</div>
                    </div>
                </div>
                <div className="visiting" style={{fontSize:"20px", marginLeft:'-15px'}}>Visiting</div>
            </div>
                )       

        }else{
            return(
            <div className="space property">
                <div className="container">
                    <div className={`color-bar ${this.props.color}`}></div>
                    <div className="name">{this.props.name}</div>
                    <div><img src={this.img} style={{width: '32px', marginBottom:'10px'}}></img></div>
                    <div className="price"  style={{fontSize:'10px'}}>Price ${this.props.price}</div>
                    <div>{players}</div>
                </div>
            </div>
            )

        }
    }
}
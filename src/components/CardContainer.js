import React from 'react';
import { Button } from 'react-bootstrap';

export default class CardContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            property: false
        }
    }

    openCardProperty(){
        this.setState({
            property : true
        })
    }
    
    closeCardProperty(){
        this.setState({
            property : false
        })
    }

    displayCardContainer(){
        if(this.state.property === true){
            return(
                <div style={{backgroundColor : "red", height: "30px"}}>
                </div>
            )
        }else{
            return null;
        }
    }

    render(){
        return (
            <div className="card-button">
                <Button className="btn btn-warning" onClick={this.state.property ? this.closeCardProperty.bind(this) : this.openCardProperty.bind(this)} style={{zIndex: "10"}}>Cartes</Button>
                {this.displayCardContainer()}
            </div>
        )
    }
}
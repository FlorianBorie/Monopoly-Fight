import React from 'react';

export default class ContainerComponent extends React.Component{

    render(){
        return(
            <div className="container-component">
            {this.props.children}
        </div>
        )
    }
}
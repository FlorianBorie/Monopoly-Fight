import React from 'react';
import '../assets/style.css'

export default class Tchat extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      message: "",
      previousMessage: [{
        sendID: "Thomas",
        message: "Bon tu joues Guillaume",
        idMessage: 1
      },
      {
        sendID: "Guillaume",
        message: "Oui, c'est bon je parlais à mes parents",
        idMessage: 2
      },
      {
        sendID: "Romain",
        message : "C'est bon tu peux jouer bouge on veut jouez nous aussi",
        idMessage: 3
      }
    ]
    }
  }

  handleChangeMessage(e){
    this.setState({
      message: e.target.value
    })
  }

  sendMessage(){

    const newMessage = {
      sendID: "Guillaume",
      message: this.state.message,
      idMessage: this.state.previousMessage.length + 1
    }

    this.setState((prevState) => ({
      previousMessage : [...prevState.previousMessage, newMessage]
    }), () => {
      this.scrollToBottom();
      this.clearMessageEntry();
    })
  }

  clearMessageEntry(){
    this.setState({
      message: ""
    })
  }

  scrollToBottom = () => {
    console.log('scroll')
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }

  displayOldMessage(){
    return(
      <ul className="send-message">
        {this.state.previousMessage.map(indexTab => {
          return(
            <li key={indexTab.idMessage}>
              <div className="send-id">
                {indexTab.sendID}
              </div>
              <div className="message" ref={(el) => { this.messagesEnd = el; }}>
                {indexTab.message}
              </div>
            </li>
          )
        })}
      </ul>
    )
  }

  render(){
    return (
      <div className="tchat-container">
        <div className="body-tchat">
          <div className="chat-assemble-title-content">
            <div className="chat-title">
                Chat of the game
            </div>
            <div className="chat-content">
              {this.displayOldMessage()}
            </div>
          </div>
          <div className="chat-message">
            <textarea 
              placeholder="Enter the new message" 
              className="chat-new-message"
              onChange={this.handleChangeMessage.bind(this)}
              onKeyPress={(e) => {
                console.log(e)
                if(e.keyCode == 13){
                  console.log("clear entry")
                  this.sendMessage.bind(this)
                } else {
                  console.log('nothing')
                }
              }}
              value={this.state.message}
              >
            </textarea>
          </div>
          <div className="chat-send-message">
            <button className="btn btn-secondary" onClick={this.sendMessage.bind(this)} style={{width:"50%"}}>Send</button>
          </div>
        </div>
      </div>
      
    );
  }

}
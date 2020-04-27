//import React,{useState, useEffect} from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';


const ENDPOINT ='https://tweets.globalofficiallottery.com/';

//const ENDPOINT ='77.120.108.119:9999';
	
const socket = io(ENDPOINT, {
    transport: ["polling","websockets"],
    path: "/chat/"});


import React, {Component} from 'react'






 const SEND_EVENTS_LIST = {
    sendMessage: "message",
    typing: "typing"
}

const RECEIVE_EVENTS_LIST = {
    newMessage: "new-message",
    typing: "typing"
}




class AnotherChat extends Component {  
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      message: '',
      audio:'./tweet37.mp3'
    };     

      this.audio = React.createRef();

/*    this.url = `${ENDPOINT}tweet37.mp3`;
    this.audio = new Audio(this.url);
*/

  }



  componentDidMount() {

	socket.on('connect', (socket) => {
  			console.log('connected')
		
		}
	)
 	


	socket.on('new-message',({message})=>{
		//console.log('fetched data from server');
		this.audio.current.play()
		
		let {messages} = this.state;
		this.setState({
			messages:[...messages, message]
		})
	});



/*	//socket.emit('ping' );
	socket.on('pong', function(data) {
  		console.log('Received Pong: ', data);
	});*/
	
	//socket.emit(SEND_EVENTS_LIST, 'data, typing');




  }


  addMessage(){
  	let {message} = this.state;
  	if(!message) return;

  	this.setState({
  		messages:[...this.state.messages, message]
  	});

  	console.log('this state msg', message);

  	socket.emit("message", this.state);
  
  }

  render() {
    return ( 
      <div>
      	<audio ref={this.audio} src={this.state.audio}>
   		
		</audio>

      	<ul>

      		{	
      			this.state.messages.map((el,index)=><li key={index}>{el}</li>)
      			
      			//console.log(this.state)
      		}
      		
      	</ul>
      
      	<br/>
      	<input type="text" onChange={(e)=>{this.setState({ message:e.target.value })}} />
      	<button onClick={()=>{this.addMessage()}}>Send Message</button>
      </div>
    )
  }
}


export default AnotherChat;
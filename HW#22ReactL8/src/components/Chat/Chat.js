import React,{useState, useEffect} from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
let socket;


const Chat = () => {

	const ENDPOINT ='77.120.108.119:9999';
	
	const socket = io(ENDPOINT, {
    		transport: ["polling","websockets"],
    		path: "/chat/"});


	useEffect(()=>{
		
		const socket = io(ENDPOINT, {
    		transport: ["polling"],
    		path: "/chat/"
		});


		//socket emit - emit event from client side -with pass data
		//socket.emit('join',{'ab', 'sName'});



	//when we unmount component, and leaving a chat
	return() =>{
		socket.emit('disconnect');
		socket.off();
	}

	},[ENDPOINT]);


/*export const SEND_EVENTS_LIST = {
    sendMessage: "message",
    typing: "typing"
}

export const RECEIVE_EVENTS_LIST = {
    newMessage: "new-message",
    typing: "typing"
}
		*/


	

	const [message, setMessage] = useState('');
	const [messages, setMessages] = useState([]);
	const [typing, setTyping] = useState("typing");


	//second hook for handling msg
	useEffect(()=>{
		console.log('messages is chages')
		socket.on('RECEIVE_EVENTS_LIST', (newMessage)=>{
			setMessages([...messages, newMessage]);
		})
	},[messages]);

	//function for send messages

	const [message, setMessage] = useState([]);

	const [sendMessage, sendMessageChange] = useState('Get to the choppa');
	const [typing, setTyping] = useState('typing');

	useEffect(()=>{
		console.log('socket emit');
		socket.emit('SEND_EVENTS_LIST', {sendMessage,typing});
	})


	useEffect(()=>{
		socket.on('RECEIVE_EVENTS_LIST', (data)=>{
			conosle.log('server')
			console.log(data);
			setMessage([...message,data])
		})
	})

/*
	const sendMessage= (event)=>{
		event.preventDefault();

		if(message){
			//send message and set field message to emptystr
			socket.emit('SEND_EVENTS_LIST',message,()=>setMessage(''));

		}
	}
*/


	return(
		<div >
	hello{/*
			    <input
      				type="text"
      				placeholder="Type a message..."
      				value={message}
      				onChange={({ target: { value } }) => setMessage(value)}
      				onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
    			/>
	*/}
		</div>
	)
}


export default Chat;
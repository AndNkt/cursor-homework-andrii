import React,{Component} from 'react';
import Contact from '../contract/Contract';

class Contracts extends Component{
    render(){

        /*   */
        let filteredContacts;
 
            filteredContacts = this.props.contacts.filter((contact)=>{
                let {firstName,lastName,phone}=contact
              
                if(firstName.toLowerCase().indexOf(this.props.search.toLowerCase())!==-1||lastName.toLowerCase().indexOf(this.props.search.toLowerCase())!==-1||phone.indexOf(this.props.search)!==-1){
                    return contact;
                }
            });
 

        let contactList = filteredContacts.map((val, ind)=>{
            return <Contact key={ind} contacts={val}/> })  
    
     
        return(
            <ul className="list-group">
                {(contactList.length>0)?contactList:'No such data'}
                
            </ul>
        ); 
    }
}

export default Contracts;
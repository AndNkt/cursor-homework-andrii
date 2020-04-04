import React, { Component } from 'react';

/*
 "plugins": [ "@babel/plugin-proposal-class-properties",["transform-runtime", {
      "regenerator": true
    }] ]


*/


//import Contracts from './components/Contracts'

import service from '../../services/dummy-service.js';

import Contracts from '../contracts/Timer.js'

class App extends Component {
  constructor(props) {
    super(props);
    //filter and normalize data
    let nonFiltered = new service();
     nonFiltered._contacts = nonFiltered._contacts.map(item => {
      if (item.gender == undefined) {
        item.gender = 'uknown'
      }
      return item
    }) 
 
    this.state = {
      contacts: new service(),
      search: '',
      man: true,
      female: true,
      uknown: true,
      filterByGender: nonFiltered,
      filters: []
    }

  }

 

  render() {
 
    let filteredContacts;
    
    let {man, female, uknown}=this.state;
   
    if(man&&female&&uknown){
      filteredContacts = this.state.contacts._contacts
    }else{

      
      filteredContacts = this.state.filterByGender._contacts.filter(item => {
        if (item.gender) {
          
          return this.state.filters.includes(item.gender)
        }
        return false
      });
    }

  
    return (
        <p>
          <Timer contacts={filteredContacts} search={this.state.search} start={this.state.contacts}/>
        </p>
      </div>
    )
  }//render
}
export default App;



import React, { Component } from 'react';

/*
 "plugins": [ "@babel/plugin-proposal-class-properties",["transform-runtime", {
      "regenerator": true
    }] ]


*/


//import Contracts from './components/Contracts'

import service from '../../services/dummy-service.js';

import Contracts from '../contracts/Contracts.js'

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

  handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.checked;

    
    this.setState({
      [name]: value
    }, () => {
      let { man, female, uknown, filters } = this.state;

     // this.normalizeData.call(this);

      let filterArr = [];
      //adding all to filterArr
      if (man) {
        filterArr = [...filterArr, 'male']
      }
      if (female) {
        filterArr = [...filterArr, 'female']
      }
      if (uknown) {
        filterArr = [...filterArr, 'uknown']
      }

      this.setState({
        filters: filterArr
      })

  
    });

  }

  updateSearch = (e) => {
    this.setState({
   
      search: e.target.value.substr(0, 20)
    })

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
      <div className="main-app container">
        <input type="text" id="filter"
          value={this.state.search}
          onChange={this.updateSearch} />
        <span>  Man  <input type='checkbox'
          name='man'
          onChange={this.handleInputChange}
          checked={this.state.man}
        /> Women  <input type='checkbox'
          name='female'
          onChange={this.handleInputChange}
          checked={this.state.female}
          />  Uknown  <input type='checkbox'
            name='uknown'
            onChange={this.handleInputChange}
            checked={this.state.uknown} />

        </span>

        <hr />
        <Contracts contacts={filteredContacts} search={this.state.search} start={this.state.contacts}/>
      </div>
    )
  }//render
}
export default App;



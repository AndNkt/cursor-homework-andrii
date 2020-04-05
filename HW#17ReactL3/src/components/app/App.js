import React, { Component } from 'react';

import Timer from '../timer/Timer.js'


//import './App.css';

class App extends Component {
/*onTick = () => {
  console.log("Осталось времени: " + this.state.time)
}*/

  render() {
    return (
      <div className="App">
        <Timer time = {12000} step = {1} onTick={(state) => console.log("Осталось времени: " + state.count)}  autostart={true}/>
        <Timer time = {48000} step = {2} onTick={(state) => console.log("Осталось времени: " + state.count)}  autostart={false}/>
      </div>
    );
  }
}
export default App;


 
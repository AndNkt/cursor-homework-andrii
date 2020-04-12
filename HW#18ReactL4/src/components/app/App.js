
import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from '../Header/Header';
import Contacts from '../Contacts/Contacts';
import Gallery from '../Gallery/Gallery';
import Home from '../Home/Home';
import Post from '../Post/Post'       




			function App(){
/*

*/


    const ANAKIN_IMAGE = "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg";
    const RAY_IMAGE = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";




    const Posts =(props)=>{
      return(
        <React.Fragment>
        <Post   author={{
          name: "Anakin skywalker",
          photo: ANAKIN_IMAGE,
          nickname: "@dart_vader"
          }}
          content="WTF? Who is Ray? Why she is Skywalker? Luke...?"
          image={RAY_IMAGE}
          date={"26 февр."}/>
        <Post   author={{
          name: "WalkerTexasRanger",
          photo: ANAKIN_IMAGE,
          nickname: "@toony"
          }}
          content="Luke i`m your fazer"
          image={RAY_IMAGE}
          date={"45 sol."}/>
        </React.Fragment>
      )
    }


    		return (
          <Router>
            <div className="App">
              <Header/>
                <Switch>
                  <Route path="/" exact component={Home}/>
                  <Route path="/contacts" component={Contacts} />
                  <Route path="/gallery" exact component={Gallery}  />
                  <Route path="/posts" exact render={Posts}/> 
                  
                </Switch>
            </div>
          </Router>
    		);
			}

export default App;

        
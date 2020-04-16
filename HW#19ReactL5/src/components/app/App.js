
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';

			function App(){
/*

*/  const APP = styled.div`
        width: 70%;
        margin-left:auto;
        margin-right:auto;
        position: relative;
        text-align:center;
  `
    		return (
          <Router>
            <APP className="App">
                <Switch>
                  <Route path="/signup" component={SignUp}/>
                  <Route path="/" component={SignIn}/>
                </Switch>
            </APP>
          </Router>
    		);
			}

export default App;

        
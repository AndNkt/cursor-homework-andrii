
import React, { Component } from 'react';
import styled, {ThemeProvider, css} from 'styled-components';
import { BrowserRouter as Router, Switch, Route,Link } from 'react-router-dom';
import { IMG, BODYTEXT, Input, CheckFragment, CheckBox, Button, FooterInfo, PreFooter } from '../style/style';
//    
class SignIn extends Component{

	state = {
        email: '',
        password: '',
        emailOk: false,
        pwdOk: false,
        check: false
    }

    emailInput = (e) => {
        this.setState({
            email: e.target.value
        })
        if(e.target.value.match(/^...+@..+\...+$/)!=null) {
            this.setState({
                emailOk: true
            })
        } else {
            this.setState({
                emailOk: false
            })
        }
    }

    passwordInput = (e) => {
        this.setState({
            password: e.target.value
        })
        if (e.target.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/) != null) {
            this.setState({
                pwdOk: true
            })
        } else {
            this.setState({
                pwdOk: false
            })
        }
    }

    changeCheckbox = () => {
        this.setState({
            check: !this.state.check
        });
    }

    render() {
        return (
            <div style={{marginLeft:'auto',width:'70%', marginRight:'auto',maxWidth:'60%'}}>
                <IMG><img style={{height: '25px', width:'25px'}} src='https://image.flaticon.com/icons/svg/565/565547.svg' /></IMG>
                <BODYTEXT>Sing In</BODYTEXT>
                <Input placeholder='Email Address*' empty={this.state.email === ''} border={this.state.emailOk} onChange={this.emailInput} />
                <br />
                <Input type='password' placeholder='Password*' empty={this.state.password === ''} border={this.state.pwdOk} onChange={this.passwordInput} />
                <CheckFragment>
                    <CheckBox type='checkbox' onChange={this.changeCheckbox} />
                    <p>Remember me</p>
                </CheckFragment>
                <Button>SING IN</Button>
                <PreFooter>
                    <a style={{ fontSize: '10px', color: 'rgb(89, 197, 197)' }}>Forgot password ?</a> <Link style={{ color: 'rgb(89, 197, 197)', fontSize: '10px', marginLeft: '50px' }} to='/signup'>Haven't account yet? Sign up</Link>      
                </PreFooter>
                <FooterInfo>Copyleft &copy; Your Website 2020.</FooterInfo>
            </div>
        );
    }
}

export default SignIn;

        

import React, { Component } from 'react';

import { BrowserRouter as Router, Switch, Route,Link } from 'react-router-dom';
import { IMG, BODYTEXT,InputName, Input, CheckFragment, CheckBox, Button, FooterInfo,PreFooter } from '../style/style';
//    
class SignUp extends Component{


    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        emailTrue: false,
        passwordTrue: false,
        nameTrue: false,
        lastNameTrue: false,
        check: false
    }

    firstNameInput = (e) => {
        this.setState({
            firstName: e.target.value
        })
        if(e.target.value.length >= 3){
            this.setState({
                nameTrue: true
            })
        } else {
            this.setState({
                nameTrue: false
            })
        }
    }

    lastNameInput = (e) => {
        this.setState({
            lastName: e.target.value
        })
        if(e.target.value.length >=3){
            this.setState({
                lastNameTrue: true
            })
        } else {
            this.setState({
                lastNameTrue: false
            })
        }
    }

    emailInput = (e) => {
        this.setState({
            email: e.target.value
        })
        if(e.target.value.match(/^...+@..+\...+$/)!=null) {
            this.setState({
                emailTrue: true
            })
        } else {
            this.setState({
                emailTrue: false
            })
        }
    }

    passwordInput = (e) => {
        this.setState({
            password: e.target.value
        })
        if(e.target.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)!=null) {
            this.setState({
                passwordTrue: true
            })
        } else {
            this.setState({
                passwordTrue: false
            })
        }
    }

    check = () => {
        this.setState({
            check: !this.state.check
        })
    }


    render() {
        return (
         <React.Fragment>

            <IMG><img src='https://image.flaticon.com/icons/svg/565/565547.svg' /></IMG>
            <BODYTEXT>Sing up</BODYTEXT>
            <div>
                <InputName placeholder='First Name*' value={this.state.firstName} empty={this.state.firstName===''} border = {this.state.nameTrue} onChange={this.firstNameInput} />
                <InputName placeholder='Last Name*' value={this.state.lastName} empty={this.state.lastName===''} border = {this.state.lastNameTrue} onChange={this.lastNameInput} />
            </div>
            <Input placeholder='Email Address*' empty={this.state.email===''} border = {this.state.emailTrue} value={this.state.email} onChange={this.emailInput} />
    
            <Input type='password' placeholder='Password*' empty={this.state.password===''} border = {this.state.passwordTrue} value={this.state.password} onChange={this.passwordInput} />
            <CheckFragment>
                <CheckBox type='checkbox' onChange={this.check} />
                <p style={{}}>I want to receive inspiration, marketing
                promotion and uodates via email.</p>
            </CheckFragment>
            <Button onClick={this.remember}>SING UP</Button>
    
            <PreFooter>
                <Link style = {{color: 'rgb(89, 197, 197)',fontSize:'10px', marginLeft: '50px'}} to='/' >Already have an account? Sing in</Link>
            </PreFooter>
            <FooterInfo>Copyleft &copy; Your Website 2020.</FooterInfo>
        
         </React.Fragment>

        );
    }

}

export default SignUp;

        
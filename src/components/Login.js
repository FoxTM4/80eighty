import React, {Component} from 'react'
import axios from 'axios';
import { connect } from "react-redux";
import { updateUser } from "../dux/reducer";
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import {emailExist, emailAt, emailPeriod, emailSpace, loginPassword} from '../Logic/logic'

class UserLogin extends Component{
    constructor(){
        super();
        this.state={
            userEmail: '',
            userPassword: '',
            errMsg: ''
        };
        this.login = this.login.bind(this)
    }
    login(){
        const {userEmail, userPassword}=this.state;
        if(emailExist(userEmail) && emailAt(userEmail)&&emailPeriod(userEmail)&& emailSpace(userEmail)&& loginPassword(userPassword)){
            axios.post('/auth/userlogin',{userEmail: userEmail, userPassword: userPassword}).then(res=>{
                this.props.updateUser(res.data.user);
                this.props.history.push('/')
            }).catch(err =>{
                console.log(err);
                this.setState({errMsg: 'Invalid email or password'})
            })
        } else{
            this.setState({
                errMsg: "Please fill in valid email and password"
            })
        }
    }
    handleKeyPress(e) {
        if (e === 'Enter') {
          this.login()
        }
      }

    render(){
        return(
            <div className='admin-login-dash'>
            <br/>
            <br/>
            <br/>
            <br/>
            <h1>Registered Customer</h1>
            <h3>If you have an account with us, please log in</h3>
            <br/>
            <br/>
            <div >
              <input
                className='email-input'
                onChange={e => this.setState({ adminEmail: e.target.value, errMsg: "" })}
                placeholder="Email"
                ref={input => {
                  this.firstInput = input;
                }}
              />
              <br />
              <input
                className='password-input'
                onChange={e => this.setState({ adminPassword: e.target.value, errMsg: "" })}
                placeholder="Password"
                onKeyPress={(e) => this.handleKeyPress(e.key)}
              />
              <p style={{ color: "red", fontFamily: "Prompt", fontSize: "0.7em" }}>{this.state.errMsg}</p>
            </div>
            <div>
              <button
                className='login-button'
                onClick={() => this.login()}>Login</button>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <Link
              className='signup-link'
              to="/register">Create Account</Link>
          </div>
        );
      }
    }
    
    export default withRouter(connect(null, { updateUser })(UserLogin));
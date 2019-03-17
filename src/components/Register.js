import React, {Component} from 'react'
import axios from 'axios';
import { connect } from "react-redux";
import { updateUser } from "../dux/reducer";
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import InputMask from "react-input-mask";
import {
    userFirstNameValidator,
    userLastNameValidator,
    userEmailValidator,
    userEmailAtValidator,
    userEmailDotValidator,
    userEmailSpaceValidator
  } from '../Logic/logic'

class Register extends Component{
    constructor(){
        super();
        this.state={
            userFirst: "",
            userLast: "",
            userPhone: "",
            userEmail: "",
            userPassword: "",
        };
        
    }

    async signup() {
        // let filledInputsValidated = this.noEmptyInputsValidator();
        let validPhoneNumber = this.phoneNumberValidator(this.state.userPhone);
        // let validEmail = this.emailValidator(this.state.userEmail);
        const {userFirst, userLast, userEmail} = this.state
        if (userFirstNameValidator(userFirst) &&
        userLastNameValidator(userLast) &&
        userEmailValidator(userEmail) &&
          userEmailAtValidator(userEmail) &&
          userEmailDotValidator(userEmail) &&
          userEmailSpaceValidator(userEmail) &&
          validPhoneNumber) {
          try {
            let res = await axios.post("/auth/signup", {
              userFirst: this.state.userFirst,
              userLast: this.state.userLast,
              userPhone: validPhoneNumber,
              userEmail: this.state.userEmail,
              userPassword: this.state.userPassword
            });
            this.props.updateUser(res.data.user);
            this.props.history.push('/dashboard')
          } catch (err) {
            console.log(err);
            this.setState({
              errMsg:
                "An account under that email already exists. Please log in instead."
            });
          }
        } else {
          this.setState({
            errMsg: "Please make sure all inputs are filled out properly."
          });
        }
      }
    
    handleInputChange = name => event => {
        this.setState({
          [name]: event.target.value,
          errMsg: ""
        });
      };

      handleKeyPress(event) {
        if (event === "Enter") {
          this.signup();
        }
      }

    render(){
        return(
            <div className='user-signup'>
        
        <h1 className='login-title'>Register</h1>
        <br/>
        <h1
          className='login-link'
        >Already have an account? </h1>
        <Link
          className='login-link'
          to="/login">Login</Link>
        <h2
          className='signup-title'
        >Welcome to 80Eighty.com! Let’s get started.</h2>
        <form>
          <input
            className='signup-input'
            type="text"
            placeholder="First Name"
            value={this.state.userFirst}
            onChange={this.handleInputChange("userFirst")}
          />
          <input
            className='signup-input'
            type="text"
            placeholder="Last Name"
            value={this.state.userLast}
            onChange={this.handleInputChange("userLast")}
          />
          <InputMask
            className='signup-input'
            mask="+1 (999) 999-9999"
            maskChar={null}
            placeholder="Phone Number"
            onChange={this.handleInputChange("userPhone")}
          />
          <input
            className='signup-input'
            type="text"
            placeholder="Email"
            value={this.state.userEmail}
            onChange={this.handleInputChange("userEmail")}
          />
          <input
            className='signup-input'
            type="text"
            placeholder="Password"
            value={this.state.userPassword}
            onChange={this.handleInputChange("userPassword")}
            onKeyPress={e => this.handleKeyPress(e.key)}
          />
        </form>
        <p style={{ color: "red", fontSize: "0.7em" }}>{this.state.errMsg}</p>
        <button
          className='signup-button'
          onClick={() => this.signup()}>Signup</button>
      </div>
        );
      }
    }
    
    export default withRouter(connect(null, { updateUser })(Register));
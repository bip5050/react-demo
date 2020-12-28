import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {isValidEmail} from '../../util/helperfunc';

import './login.css';
import _ from 'lodash';


export default class login extends Component {
  constructor(props) {
    super(props);
    this.defaultErrors    = {
      email: false,
      password: false
    }
    this.state                      = {
      faqData         : [],
      isLoading       : true,
      modal            : false,
      typePass: 'password',
      formData          : {
        email: "",
        password: ""
      }
    }


   this.toggleShowpass  = this.toggleShowpass.bind(this);
   this.handleSubmit  = this.handleSubmit.bind(this);
   this. onChangeHandle = this.onChangeHandle.bind(this);
  
  }

  componentDidMount() {  }
  toggleShowpass(){
      this.setState({
         typePass: this.state.typePass === 'password' ? 'text' : 'password'
      })
  }

  onChangeHandle(e) {
    this.setState({
      formData : {
        ...this.state.formData,
        [e.target.name] : e.target.value
      }
    });
  }

  handleSubmit(e){
    e.preventDefault();
    let formData  = this.state.formData || {};
    this.props.do_login(formData);
  }
  
  
  componentWillReceiveProps(props) {    
    if(!!props.data && !!props.data.isSuccess) {
      
      // this.props.history.push('/dashboard');
      window.location.href="/dashboard";
     
    }
  }

  validateForm() {
    let formData	=	this.state.formData || {};
		let errors		=	{...this.defaultErrors};
		let isError		=	false;
    if(!!!formData.email) {
        errors.email        =	true;
        isError				=	true;
    }
		if(!!!formData.password) {
			errors.password		=	true;
			isError				=	true;
    } 
    if(!!formData.password && formData.password.length<4) {
        errors.password		=	true;
        isError		        =	true;
    }
		return {isError: isError, errors: errors};
  }




  render() {
   
    return (
      <div className="Loginp">
      home  page
      </div> 
    );
  }
}
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
        <table className="cTable oneCol">
          <tr>
            <th>
              <a href="#" data-toggle="modal" data-target="#newVendor">
              <img src="img/add-new.png"/>
              <span>Add New Vendor</span>
              </a>
            </th>
            <th>
              <img src="img/box.png"/>
              <span>Box </span> 
              <i class="fa fa-times" aria-hidden="true"></i>               
            </th>            
            {/* <th>
              <img src="img/dropbox.png"/>
              <span>Dropbox</span>
              <i class="fa fa-times" aria-hidden="true"></i>
            </th>
            <th>
              <img src="img/google-drive.png"/>
              <span>Google Drive</span>  
              <i class="fa fa-times" aria-hidden="true"></i>            
            </th>
            <th>
              <img src="img/Salesforce.png"/>
              <span>Sales Force</span>  
              <i class="fa fa-times" aria-hidden="true"></i>
            </th> */}
            
          </tr>
          <tr>
            <td>Overall Score </td>
            <td className="tac"><img src="img/score-b.png"/></td>
            {/* <td className="tac"><img src="img/score-r.png"/></td>
            <td className="tac"><img src="img/score-r.png"/></td>
            <td className="tac"><img src="img/score-b.png"/></td> */}
          </tr>
          <tr>
            <td>Product Description <i class="fa fa-angle-down" aria-hidden="true"></i></td>
            <td>Box is  a  modern  content  of  management</td>
            {/* <td>Drop Box is a cloud based file management</td>
            <td>Store, Sink and sare file easily</td>
            <td>Saleforce is a cloud based file storage</td> */}
          </tr>
          
          <tr>
            <td>Funding  History <i class="fa fa-angle-down" aria-hidden="true"></i></td>
            <td>Total  Funding: $150m</td>
            {/* <td>Total  Funding: $170m</td>
            <td>Total  Funding: $36.1m</td>
            <td>Total  Funding: $756.1m</td> */}
          </tr>
          <tr>
          <td colspan="5" className="st stOpen">
<table className="subTable">
  <tr>
    <td>Founded</td>
    <td>2005</td>
    {/* <td>2007</td>
    <td>1998</td>
    <td>2002</td>     */}
  </tr>
  <tr>
    <td>Key Investors</td>
    <td>DFG, scale, venture partners</td>
    {/* <td>Index Vallue sequoia</td>
    <td>Sequoia kliner index Vallue</td>
    <td>sequoia Larry page</td>     */}
  </tr>
  <tr>
    <td>Founders</td>
    <td>Arone Levie, Dylon smith</td>
    {/* <td>Arsha Fedarish</td>
    <td>Larry page sig bin</td>
    <td>Kleiner segery bin</td>     */}
  </tr>
</table>
          </td>
          </tr>          
          <tr>
            <td>Company Info <i class="fa fa-angle-down" aria-hidden="true"></i></td>
            <td>Johnson</td>
            {/* <td>67</td>
            <td>67</td>
            <td>67</td> */}
          </tr>   
          <tr>
            <td>Features <i class="fa fa-angle-down" aria-hidden="true"></i></td>
            <td>Johnson</td>
            {/* <td>67</td>
            <td>67</td>
            <td>67</td> */}
          </tr>   
          <tr>
            <td>Customer Case Studies <i class="fa fa-angle-down" aria-hidden="true"></i></td>
            <td>Johnson</td>
            {/* <td>67</td>
            <td>67</td>
            <td>67</td> */}
          </tr>    
        </table>


        {/*  Modal */}
<div class="modal fade" id="newVendor" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Add New Vendor</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <form action="">
      <div class="form-group">
    <label for="email">Vendor Name</label>
    <input type="text" class="form-control" id="name" />
  </div>
  <div class="form-group">
    <label for="email">Email address:</label>
    <input type="email" class="form-control" id="email" />
  </div>
  <div class="form-group">
    <label for="pwd">Password:</label>
    <input type="password" class="form-control" id="pwd" />
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>      </div>
      {/* 
      <div class="checkbox">
    <label><input type="checkbox" /> Remember me</label>
  </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div> */}
    </div>
  </div>
</div>




      </div> 
    );
  }
}
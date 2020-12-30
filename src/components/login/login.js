import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { isValidEmail } from '../../util/helperfunc';

import './login.css';
import _ from 'lodash';


export default class login extends Component {
  constructor(props) {
    super(props);
    this.defaultErrors = {
      email: false,
      password: false
    }
    this.state = {
      faqData: [],
      isLoading: true,
      modal: false,
      typePass: 'password',
      formData: {
        product_description: "",
        funding_history: "",
        company_info:"",
        fetaures:"",
        customer_case_study:"",
        overall_scoor:"Score",
        box_header:"Box"

      },
      columData: [
        {
          box_header: {
            text: "Box",
            data: [{
              description: "data"
            }],
          },
          overall_scoor: {
            text: "Overall Score",
            data: [{
              description: "Score"
            }],
          },
          product_description: {
            text: "Product Description",
            data: [{
              description: "Box is a modern content of management",
            }]
          },
          funding_history: {
            text: "Funding History",
            data: [{
              description: "Total Funding: $150m",


            }],
            subitems: {
              Founded: ["2005"],
              KeyInvestors: ["DFG, scale, venture partners"],
              Founders: ["Arone Levie, Dylon smith"]
            }
          },
          company_info: {
            text: "Company Info",
            data: [{
              description: "Johnson"
            }]
          },
          fetaures: {
            text: "Fetaures",
            data: [{
              description: "Good"
            }]
          },
          customer_case_study: {
            text: "Company Case Study",
            data: [{
              description: "Good Client"
            }]
          }
        }
      ],
      hideClass:true,
    }


    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChangeHandle = this.onChangeHandle.bind(this);
    this.deleteColum    =  this.deleteColum.bind(this);
    this.toogleClass =  this.toogleClass.bind(this);

  }

  componentDidMount() { }


  onChangeHandle(e) {
    this.setState({
      formData: {
        ...this.state.formData,
        [e.target.name]: e.target.value
      }
    });
  }

  toogleClass() {
let  {hideClass } =  this.state;
    hideClass =!hideClass
      this.setState({
        hideClass
      })
  }

  deleteColum(id){
    let  { columData} = this.state;
    

    swal({
      title: "Are you sure you want  to  delete  this  item?",
     
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {

        columData.map((cdata, index)=>{
          Object.keys(cdata).map((oneKey, i) =>{
            cdata[oneKey].data=cdata[oneKey].data.filter((data,index)=>id!=index)
            
          })
        });
        this.setState({
          columData
        },()=>{
          swal("Poof! Your itemhas been deleted!", {
            icon: "success",
          });
        })
       
      } else {
       
      }
    });

  }
  handleSubmit() {
   let  {formData, columData} = this.state;
   
   let{overall_scoor,box_header,product_description, funding_history, fetaures, customer_case_study,company_info} = formData;


   
  
   columData.map((cdata,index)=>{
     console.log(cdata.product_description.data.length);
     if(cdata.product_description.data.length>2){
      swal({
        title: "You cant add more  than  3  items",
      
        icon: "warning",
      })
      this.setState({
        formData: {
          product_description: "",
          funding_history: "",
          company_info:"",
          fetaures:"",
          customer_case_study:"",
          overall_scoor:"Score",
          box_header:"Box"
  
        }
  
  
  
      },()=>{
        $("#newVendor").modal("hide");
      })
     }
     else{
      cdata.product_description.data.push({description:product_description});
      cdata.funding_history.data.push({description:funding_history});
      cdata.fetaures.data.push({description:fetaures});
      cdata.customer_case_study.data.push({description:customer_case_study});
      cdata.company_info.data.push({description:company_info});
      cdata.overall_scoor.data.push({description:overall_scoor});
      cdata.box_header.data.push({description:box_header});
      this.setState({
        columData,
        formData: {
          product_description: "",
          funding_history: "",
          company_info:"",
          fetaures:"",
          customer_case_study:"",
          overall_scoor:"Score",
          box_header:"Box"
  
        }
  
  
  
      },()=>{
        $("#newVendor").modal("hide");
      })
     }
    
   })
   
    

  }


  componentWillReceiveProps(props) {
    if (!!props.data && !!props.data.isSuccess) {

      // this.props.history.push('/dashboard');
      window.location.href = "/dashboard";

    }
  }

  validateForm() {
    let formData = this.state.formData || {};
    let errors = { ...this.defaultErrors };
    let isError = false;
    if (!!!formData.email) {
      errors.email = true;
      isError = true;
    }
    if (!!!formData.password) {
      errors.password = true;
      isError = true;
    }
    if (!!formData.password && formData.password.length < 4) {
      errors.password = true;
      isError = true;
    }
    return { isError: isError, errors: errors };
  }




  render() {
    let { columData , formData, hideClass} = this.state;
    let  colSpan = "";
    columData.map((data,key)=>{
      if(data.product_description.data.length==1){
        colSpan= "twoCol"
      }
      if(data.product_description.data.length==2){
        colSpan= "threeCol"
      }
      if(data.product_description.data.length==3){
        colSpan= "fourCol"
      }
    })
    return (
      <div className="Loginp">
<<<<<<< HEAD
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
=======
        <table className={`cTable ${colSpan}`}>
          <tr>

            <th>
              <a href="#" data-toggle="modal" data-target="#newVendor">
                <img src="img/add-new.png" />
                <span>Add New Vendor</span>
              </a>
            </th>

            {
              columData.map((data, key) => {
                return <>
                  {(!!data.box_header) ? <>
                    
                    {data.box_header.data.map((subdata, key) => {
                      return (<th key={key}>
                        <img src="img/box.png" />
                        <span>Box </span>
                        {data.box_header.data.length>1?  <i className="fa fa-times"  onClick={()=>this.deleteColum(key)} aria-hidden="true"></i>:""}
                      
                      </th>)
                    })}
                  </> : ""}

                </>
              })
            }


          </tr>
          <tr>
          {
              columData.map((data, key) => {
                return <>
                  {(!!data.overall_scoor) ? <>
                    <td>{data.overall_scoor.text} </td>
                    {data.overall_scoor.data.map((subdata, key) => {
                      return (<td key={key} className="tac"><img src="img/score-b.png" /></td>)
                    })}
                  </> : ""}

                </>
              })
            }
            
           
          </tr>
          <tr>
            {
              columData.map((data, key) => {
                return <>
                  {(!!data.product_description) ? <>
                    <td>{data.product_description.text} </td>
                    {data.product_description.data.map((subdata, key) => {
                      return (<td key={key}>{subdata.description}</td>)
                    })}
                  </> : ""}

                </>
              })
            }

          </tr>

          <tr>
            {
              columData.map((data, key) => {
                return <>
                  {(!!data.funding_history) ? <>
                    <td onClick={()=>this.toogleClass()}>{data.funding_history.text} <i className="fa fa-angle-down" aria-hidden="true"></i></td>
                    {data.funding_history.data.map((subdata, key) => {
                      return (<td key={key}>{subdata.description}</td>)
                    })}
                  </> : ""}

                </>
              })
            }
          </tr>
          <tr>

            <td colSpan="3" className={hideClass ?"st":"st stOpen" }>
              <table className="subTable">
                {
                  columData.map((data, key) => {
                    return Object.keys(data.funding_history.subitems).map((oneKey, i) => {
                      return (
                        <tr key={i}>
                          <td>{oneKey}</td>
                          {data.funding_history.subitems[oneKey].map((item, key) => {
                            return (<td>{item}</td>)
                          })}

                        </tr>
                      )
                    })
                  })

                }
              </table>
            </td>
          </tr>
          {
            columData.map((data, key) => {
              return <>
                {(!!data.company_info) ? <>
                  <td>{data.company_info.text} </td>
                  {data.company_info.data.map((subdata, key) => {
                    return (<td key={key}>{subdata.description}</td>)
                  })}
                </> : ""}

              </>
            })
          }
          <tr>
            {
              columData.map((data, key) => {
                return <>
                  {(!!data.fetaures) ? <>
                    <td>{data.fetaures.text} </td>
                    {data.fetaures.data.map((subdata, key) => {
                      return (<td key={key}>{subdata.description}</td>)
                    })}
                  </> : ""}

                </>
              })
            }
          </tr>
          <tr>
            {
              columData.map((data, key) => {
                return <>
                  {(!!data.customer_case_study) ? <>
                    <td>{data.customer_case_study.text} </td>
                    {data.customer_case_study.data.map((subdata, key) => {
                      return (<td key={key}>{subdata.description}</td>)
                    })}
                  </> : ""}

                </>
              })
            }
          </tr>
>>>>>>> 85eba7e4807bf76637321c4b3fa60e44df01e32e
        </table>


        {/*  Modal */}
<<<<<<< HEAD
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
=======
        <div className="modal fade" id="newVendor" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Add New Vendor</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">

                <div className="form-group">
                  <label for="product_description">Product Description</label>
                  <input type="text" className="form-control" value={formData.product_description} onChange={(e)=>this.onChangeHandle(e)} name="product_description" />
                </div>
                <div className="form-group">
                  <label for="funding_history">Funding History</label>
                  <input type="text" value={formData.funding_history} onChange={(e)=>this.onChangeHandle(e)} className="form-control" name="funding_history" />
                </div>
                <div className="form-group">
                  <label for="company_info">Company Info</label>
                  <input type="text" value={formData.company_info} onChange={(e)=>this.onChangeHandle(e)} className="form-control" name="company_info" />
                </div>
                <div className="form-group">
                  <label for="fetaures">Features</label>
                  <input type="text" value={formData.fetaures} onChange={(e)=>this.onChangeHandle(e)} className="form-control" name="fetaures" />
                </div>
                <div className="form-group">
                  <label for="customer_case_study">Customer case study</label>
                  <input type="text"  value={formData.customer_case_study} onChange={(e)=>this.onChangeHandle(e)} className="form-control" name="customer_case_study" />
                </div>

                <button type="button"  onClick={()=>this.handleSubmit()} className="btn btn-primary">Submit</button>
              </div>
            </div>
          </div>
        </div>




      </div>
>>>>>>> 85eba7e4807bf76637321c4b3fa60e44df01e32e
    );
  }
}
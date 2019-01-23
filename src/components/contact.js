import React, { Component } from 'react';
import '../assets/styles/contact.scss';
import { Col, FormGroup,  Input,  } from 'reactstrap';


class contact extends Component {
  state={ 
    errName: "none",
    errEmail: "none",
    errNum: "none",
    errQuery: "none",
    select: "none",
    sucess: "none",
}
submit = () => { 
  this.setState({sucess:"none"});
  var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;   
  var regex = /^[a-zA-Z]*$/;
  var txtName = document.getElementById("name");
  var txtEmail = document.getElementById("email");
  var e = document.getElementById("select");
  console.log('e');
  var strUser = e.options[e.selectedIndex];  
  console.log('strUser');
  var txtNumber = document.getElementById("phoneno"); 
  var txtQurery = document.getElementById("message");
  var errName= document.getElementById("errName");
  var errEmail= document.getElementById("errEmail");
  var errNum= document.getElementById("errNum");
  var errQuery= document.getElementById("errQuery"); 
  if(txtName.value === ''){
      errName.innerHTML = "Please enter the name";
      this.setState({errName: "block"});
  } 
  if(txtName.value !== ""){  
      if (regex.test(txtName.value)==true) { 
          this.setState({errName: "none"}); 
      } 
      if(regex.test(txtName.value)==false){ 
          errName.innerHTML = "Please enter only letters ";
          this.setState({errName: "block"});     
      }
  }
  if(txtEmail.value ==="" ){
      errEmail.innerHTML = "Please enter the email";
      this.setState({errEmail: "block"});
  }
  if(txtEmail.value !== ""){  
      if(pattern.test(txtEmail.value)== true){ 
          this.setState({errEmail: "none"});
      }
      if(pattern.test(txtEmail.value)== false){
          errEmail.innerHTML = "Please enter the correct Email.";
          this.setState({errEmail: "block"}); 
      }
  }
  if(txtNumber.value ===""){
      errNum.innerHTML = "Please enter the number";
      this.setState({errNum: "block"});
  }
  if(txtNumber.value !== "") { 
      if(isNaN(txtNumber.value))
      {
          errNum.innerHTML = "Please enter phone no number only";
          this.setState({errNum: "block"});
      return false;
      }
     else if((txtNumber.value.length != 10))
      {
          errNum.innerHTML = " mobile number should be in 10 digit";
          this.setState({errNum: "block"});
      return false;
      }
      else{this.setState({errNum: "none"});}
  }
  if(txtQurery.value===""){
      errQuery.innerHTML = "Please enter the message box";
      this.setState({errQuery: "block"});
  }
  
  if(txtQurery.value !== ""){ 
      this.setState({errQuery: "none"});
  }
  if(strUser.value ==0){
      errName.innerHTML = "Please select the drop down box";
      this.setState({select:"block"});
  }
  if(strUser.value !=0){ 
      this.setState({select:"none"});
  }
  if(regex.test(txtName.value)==true && (pattern.test(txtEmail.value)== true) && txtQurery.value.length >= 5 && txtEmail.value !== "" && txtNumber.value !== "" && txtNumber.value.length == 10 && txtQurery.value !=="" && strUser.value !=0){
      this.setState({sucess:"block"});
      txtName.value="";
      txtEmail.value="";
      txtNumber.value="";
      txtQurery.value="";
      e.selectedIndex = 0;
  }
} 
 render() {
    return (
        <div>
      <div className="contact " id="contactUs">
       <div className="container ">
            <h2 className=' contacthead'>Contact Us</h2>
            <form onsubmit="return formValidation()">
            <FormGroup row>
          <Col sm={6} id="inputtxt" >
            <Input type="name" name="name" id="name" placeholder="Name" class="form-control bg-light" />
          </Col>
          <Col sm={6} id="inputtxt">
          <Input type="email" name="email" id="email" placeholder="Email" class="form-control bg-light"/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col sm={6} id="inputtxt">
            <Input type="phoneno" name="phoneno" id="phoneno" placeholder="Phone Number" class="form-control bg-light" />
          </Col>
          <Col sm={6} id="inputtxt">
          <select class="form-control " id="select" name="selectlist">
                <option value="">Select</option>
                <option value="1  -  World Class Property Company">1. World Class Property Company</option>
                <option value="2  -  TIER REIT">2- TIER REIT</option>
                <option value="3  -  CalSTRS">3. CalSTRS</option>
                <option value="4  -  Dell Inc.">4. Dell,Inc.</option>
                <option value="5  -  Brandywine Realty Trust">5. Brandywine Realty Trust</option>
                <option value="6  -  Accesso Partners">6. Accesso Partners</option>
                <option value="7  -  DRA Advisors">7. DRA Advisors</option>
                <option value="8  -  Equity Commonwealth">8. Equity Commonwealth</option>
                <option value="9  -  Cousins Properties">9. Cousins Properties</option>
                <option value="10  -  Intercontinental Real Estate">10. Intercontinental Real Estate</option>
            </select>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col sm={12} id="inputtxt">
          <textarea type="text" id="message" name="message" rows="4" placeholder="Message"class="form-control md-textarea border-0"></textarea>
          </Col>
        </FormGroup>
        <p className='contact__errmsg' id="errName" style={{display:this.state.errName}}>please enter the name</p>
               <p className='contact__errmsg' id="errEmail" style={{display:this.state.errEmail}}>please enter the email</p>
               <p className='contact__errmsg' id="errNum" style={{display:this.state.errNum}}>please enter the phone number </p>
               <p className='contact__errmsg' id="errQuery" style={{display:this.state.errQuery}}>please enter the message</p>
               <p className='contact__errmsg' id="errDropDown" style={{display:this.state.select}}>please select the dropdown list</p>
               <p className='contact__sucessmsg' style={{display:this.state.sucess}}>Thank you for showing interset.</p>
        <button type="button" class="bmargin" id="submit" onClick={this.submit}>SEND IT</button>   
        </form>
       </div>   
      </div>
      <hr></hr>
     
      </div>
      
      
    );
  }
}

export default contact;


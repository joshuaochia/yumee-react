import React, {useEffect, useState} from "react";
import classes from "./Form.module.css";
import { useForm, ValidationError } from '@formspree/react';
import { useAlert } from 'react-alert'


const Form = (props) => {
  const [formData, setFormData] = useState({
    first_name:'',
    last_name:'',
    email:'',
    phone:'',
    address:'',
    city:'',
    option:'',
    zip_code:'',
    message:'',
    desired_hours: '',
    time: '',
    CareerOpportunity:'',
    WhoNeedsCare:'',

  })

  const alert = useAlert()
  const [state, handleSubmit] = useForm("xbjboywg");

  const onChangeHandler = (e) => {

    setFormData(prevData => ({...prevData, [e.target.name] : e.target.value }))
  }

  console.log(formData)

  useEffect(() => {
    if (state.succeeded) {
     
      setFormData({
        first_name:'',
        last_name:'',
        email:'',
        phone:'',
        address:'',
        city:'',
        option:'select',
        zip_code:'',
        message:'',
        desired_hours: 'select',
        time: 'select',
        CareerOpportunity:'',
        WhoNeedsCare:'',
      })
      alert.show('Successfully sent')
    }
  },[state.succeeded])






  if (props.applicant) {
    return (
      <form
        onSubmit={handleSubmit}
        style={{color:'white'}}
        className="px-3"
      >
         <input type="hidden" id="applicant" name="applicant" value="applicant"/>

        <div class="row mt-2 ">
          <div
           
            onClick={() => props.setIsApplicantForm(false)}
            className={`col ${classes.title1}`}
          >
            <p>
              <strong >Who needs Care?</strong>
            </p>
          </div>
          <div
        
            onClick={() => props.setIsApplicantForm(true)}
            className={`col ${classes.title2} ${classes.active}`}
          >
            <p    >
              <strong>Career Opportunity</strong>
            </p>
          </div>
        </div>
        <div class="">
   <div style={{position:'relative'}} class="form-check col-12 col-md-4 offset-md-4">
   <label class="form-check-label mx-3" for="exampleRadios1">
    Caregiver
  </label>
  <input onChange={onChangeHandler} checked={formData.CareerOpportunity === 'CareGiver'}  value="CareGiver" style={{position:'absolute', right: '0'}} class="form-check-input" type="radio" name="CareerOpportunity" id="exampleRadios1"/>

</div>
<div style={{position:'relative'}} class="form-check col-12 col-md-4 offset-md-4">
<label class="form-check-label mx-3" for="exampleRadios2">
    Client Referrals
  </label>
  <input onChange={onChangeHandler} checked={formData.CareerOpportunity === 'ClientReferrals'} value="ClientReferrals" style={{position:'absolute', right: '0'}} class="form-check-input" type="radio" name="CareerOpportunity" id="exampleRadios2" />

</div>

<div style={{position:'relative'}} class="form-check col-12 col-md-4 offset-md-4">
<label class="form-check-label mx-3" for="exampleRadios3">
    Others
  </label>
  <input onChange={onChangeHandler} checked={formData.CareerOpportunity === 'Others'}  value="Others" style={{position:'absolute', right: '0'}} class="form-check-input" type="radio" name="CareerOpportunity" id="exampleRadios3"/>

</div>

 
   </div>
        <div class="row mt-2 ">
        <div class="col">
          <label  for="exampleFormControlTextarea1">First Name</label>
          <input onChange={onChangeHandler} value={formData.first_name}  name="first_name"  type="text" class="form-control" aria-label="First name" />
 
        </div>
        <div class="col">
          <label for="exampleFormControlTextarea1">Last Name</label>
          <input  onChange={onChangeHandler} value={formData.last_name}  name="last_name" type="text" class="form-control" aria-label="Last name" />
        </div>
      </div>
      <div class="row mt-2 ">
        <div class="col">
          <label for="exampleFormControlTextarea1">Email</label>
          <input onChange={onChangeHandler} value={formData.email} name="email" type="text" class="form-control" aria-label="First name" />
        </div>
        <div class="col">
          <label for="exampleFormControlTextarea1">Phone #</label>
          <input onChange={onChangeHandler} value={formData.phone} name="phone" type="text" class="form-control" aria-label="Last name" />
        </div>
      </div>
      <div class="row mt-2 ">
        <div class="col">
        <label for="exampleFormControlTextarea1">City</label>
          <input onChange={onChangeHandler} value={formData.city} name="city" type="text" class="form-control" aria-label="Last name" />
        </div>
        <div class="col">
        <label for="exampleFormControlTextarea1">Zip  Code</label>
          <input onChange={onChangeHandler} value={formData.zip_code} name="zip_code" type="text" class="form-control" aria-label="Last name" />
   
        </div>
      </div>
      <div class="row mt-2 ">
        <div class="col">
        <label for="exampleFormControlTextarea1">Partime/Fulltime</label>
          <select onChange={onChangeHandler} value={formData.time} name="time" type="text" class="form-control" aria-label="Last name" >
          <option selected></option>
          <option value="part-time">Part-time</option>
          <option value="full-time">Full-time</option>
     
          </select>
        </div>
        <div class="col">
        <label for="exampleFormControlTextarea1">Desired Hours</label>
          <select onChange={onChangeHandler} value={formData.desired_hours} name="desired_hours" type="text" class="form-control" aria-label="Last name" >
          <option selected></option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
          <option value="24">24</option>
     
          </select>
        </div>
      </div>
        {/* <div class="form-group">
          <label for="exampleFormControlTextarea1">Message (Optional)</label>
          <textarea
            onChange={onChangeHandler}
            value={formData.message}
            name="message"
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            cols="50"
            style={{ width: "75%" }}
          ></textarea>
        </div> */}
        <div className="text-center text-md-end">
          <button   class="btn btn-success">
            SUBMIT
          </button>
        </div>
      </form>
    );
  }
  return (
    <form
      onSubmit={handleSubmit}
      style={{color:'white'}}
      className="px-3"
    >
      <input type="hidden" id="applicant" name="applicant" value="applicant"/>
      <div class="row mt-2 ">
        <div
          onClick={() => props.setIsApplicantForm(false)}
          className={`col ${classes.title1}  ${classes.active}`}
        >
          <p >
            <strong>Who needs care?</strong>
          </p>
        </div>
        <div
          onClick={() => props.setIsApplicantForm(true)}
          className={`col ${classes.title2}`}
        >
          <p>
            <strong>Career Opportunity</strong>{" "}
          </p>
        </div>
      </div>
   <div class="">
   <div style={{position:'relative'}} class="form-check col-12 col-md-4 offset-md-4">
   <label class="form-check-label mx-3" for="exampleRadios1">
    A loved one
  </label>
  <input onChange={onChangeHandler} checked={formData.WhoNeedsCare === 'A_loved_one'} value="A_loved_one" style={{position:'absolute', right: '0'}} class="form-check-input" type="radio" name="WhoNeedsCare" id="exampleRadios1" />

</div>
<div style={{position:'relative'}} class="form-check col-12 col-md-4 offset-md-4">
<label class="form-check-label mx-3" for="exampleRadios2">
    MySelf
  </label>
  <input onChange={onChangeHandler} checked={formData.WhoNeedsCare === 'MySelf'} value="MySelf" style={{position:'absolute', right: '0'}} class="form-check-input" type="radio" name="WhoNeedsCare" id="exampleRadios2" />

</div>

<div style={{position:'relative'}} class="form-check col-12 col-md-4 offset-md-4">
<label class="form-check-label mx-3" for="exampleRadios3">
    Others
  </label>
  <input  onChange={onChangeHandler} checked={formData.WhoNeedsCare === 'Others'} value="Others" style={{position:'absolute', right: '0'}} class="form-check-input" type="radio" name="WhoNeedsCare" id="exampleRadios3" />

</div>

 
   </div>
      <div class="row mt-2 ">
        <div class="col">
          <label for="exampleFormControlTextarea1">First Name</label>
          <input onChange={onChangeHandler} value={formData.first_name} name="first_name" type="text" class="form-control" aria-label="First name" />
        </div>
        <div class="col">
          <label for="exampleFormControlTextarea1">Last Name</label>
          <input onChange={onChangeHandler} value={formData.last_name} name="last_name" type="text" class="form-control" aria-label="Last name" />
        </div>
      </div>
      <div class="row mt-2 ">
        <div class="col">
          <label for="exampleFormControlTextarea1">Email</label>
          <input onChange={onChangeHandler} value={formData.email} name="email" type="text" class="form-control" aria-label="First name" />
        </div>
        <div class="col">
          <label for="exampleFormControlTextarea1">Phone #</label>
          <input onChange={onChangeHandler} value={formData.phone} name="phone" type="text" class="form-control" aria-label="Last name" />
        </div>
      </div>
      <div class="row mt-2 ">
        <div class="col">
        <label for="exampleFormControlTextarea1">City</label>
          <input onChange={onChangeHandler} value={formData.city} name="city" type="text" class="form-control" aria-label="Last name" />
        </div>
        <div class="col">
        <label for="exampleFormControlTextarea1">Zip Code</label>
          <input onChange={onChangeHandler} value={formData.zip_code} name="zip_code" type="text" class="form-control" aria-label="Last name" />
   
        </div>
      </div>
      <div class="form-group">
        <label name="message" for="exampleFormControlTextarea1">Message (Optional)</label>
        <textarea
            onChange={onChangeHandler} 
            value={formData.message}
            name="message"
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            cols="50"
            style={{ width: "75%" }}
          ></textarea>
      </div>
      <div className="text-center text-md-end">
        <button  class="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;

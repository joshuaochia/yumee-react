import React from "react";
import classes from "./Form.module.css";

const Form = (props) => {
  if (props.applicant) {
    return (
      <form
        style={{color:'white'}}
        enctype="application/x-www-form-urlencoded"
        className="px-3"
      >
        <div class="row mt-2 ">
          <div
           
            onClick={() => props.setIsApplicantForm(false)}
            className={`col ${classes.title1}`}
          >
            <p>
              <strong >Patient</strong>
            </p>
          </div>
          <div
        
            onClick={() => props.setIsApplicantForm(true)}
            className={`col ${classes.title2} ${classes.active}`}
          >
            <p    >
              <strong>Applicant</strong>
            </p>
          </div>
        </div>
 
<div className="my-4">
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
  <label class="form-check-label" for="flexCheckDefault">
    Default checkbox
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
  <label class="form-check-label" for="flexCheckChecked">
    Checked checkbox
  </label>
</div>
</div>
        <div class="row mt-2 ">
        <div class="col">
          <label for="exampleFormControlTextarea1">First Name</label>
          <input type="text" class="form-control" aria-label="First name" />
        </div>
        <div class="col">
          <label for="exampleFormControlTextarea1">Last Name</label>
          <input type="text" class="form-control" aria-label="Last name" />
        </div>
      </div>
      <div class="row mt-2 ">
        <div class="col">
          <label for="exampleFormControlTextarea1">Email</label>
          <input type="text" class="form-control" aria-label="First name" />
        </div>
        <div class="col">
          <label for="exampleFormControlTextarea1">Phone #</label>
          <input type="text" class="form-control" aria-label="Last name" />
        </div>
      </div>
      <div class="row mt-2 ">
        <div class="col">
        <label for="exampleFormControlTextarea1">City/state</label>
          <input type="text" class="form-control" aria-label="Last name" />
        </div>
        <div class="col">
        <label for="exampleFormControlTextarea1">Zip Code</label>
          <input type="text" class="form-control" aria-label="Last name" />
   
        </div>
      </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Message (Optional)</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            cols="50"
            style={{ width: "75%" }}
          ></textarea>
        </div>
        <div className="text-center text-md-end">
          <button type="button"  class="btn btn-success">
            SUBMIT
          </button>
        </div>
      </form>
    );
  }
  return (
    <form
    style={{color:'white'}}
      enctype="application/x-www-form-urlencoded"
      className="px-3"
    >
      <div class="row mt-2 ">
        <div

          onClick={() => props.setIsApplicantForm(false)}
          className={`col ${classes.title1}  ${classes.active}`}
        >
          <p >
            {" "}
            <strong>Patient</strong>
          </p>
        </div>
        <div
          onClick={() => props.setIsApplicantForm(true)}
          className={`col ${classes.title2}`}
        >
          <p>
            {" "}
            <strong>Applicant</strong>{" "}
          </p>
        </div>
      </div>
      <div className="my-4">
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
  <label class="form-check-label" for="flexCheckDefault">
    Default checkbox
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
  <label class="form-check-label" for="flexCheckChecked">
    Checked checkbox
  </label>
</div>
</div>

      <div class="row mt-2 ">
        <div class="col">
          <label for="exampleFormControlTextarea1">First Name</label>
          <input type="text" class="form-control" aria-label="First name" />
        </div>
        <div class="col">
          <label for="exampleFormControlTextarea1">Last Name</label>
          <input type="text" class="form-control" aria-label="Last name" />
        </div>
      </div>
      <div class="row mt-2 ">
        <div class="col">
          <label for="exampleFormControlTextarea1">Email</label>
          <input type="text" class="form-control" aria-label="First name" />
        </div>
        <div class="col">
          <label for="exampleFormControlTextarea1">Phone #</label>
          <input type="text" class="form-control" aria-label="Last name" />
        </div>
      </div>
      <div class="row mt-2 ">
        <div class="col">
        <label for="exampleFormControlTextarea1">City/state</label>
          <input type="text" class="form-control" aria-label="Last name" />
        </div>
        <div class="col">
        <label for="exampleFormControlTextarea1">Zip Code</label>
          <input type="text" class="form-control" aria-label="Last name" />
   
        </div>
      </div>
      <div class="form-group">
        <label for="exampleFormControlTextarea1">Message (Optional)</label>
        <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            cols="50"
            style={{ width: "75%" }}
          ></textarea>
      </div>
      <div className="text-center text-md-end">
        <button type="button" class="btn btn-primary">
          Primary
        </button>
      </div>
    </form>
  );
};

export default Form;

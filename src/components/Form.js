import React from "react";
import classes from "./Form.module.css";

const Form = (props) => {
  if (props.applicant) {
    return (
      <form
        enctype="application/x-www-form-urlencoded"
        className="landing-page-form"
      >
        <div class="row mt-2 ">
          <div
            onClick={() => props.setIsApplicantForm(false)}
            className={`col ${classes.title1}`}
          >
            <p>
              <strong>Patient</strong>
            </p>
          </div>
          <div
            onClick={() => props.setIsApplicantForm(true)}
            className={`col ${classes.title2}`}
          >
            <p style={{ color: "red" }}>
              <strong>Applicant</strong>
            </p>
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
            <label for="exampleFormControlTextarea1">Address</label>
            <input type="text" class="form-control" aria-label="First name" />
          </div>
          <div class="col">
            <label for="exampleFormControlTextarea1">City/state</label>
            <input type="text" class="form-control" aria-label="Last name" />
          </div>
        </div>
        <div class="row mt-2 ">
          <div class="col">
            <label for="exampleFormControlTextarea1">Partime/Fulltime</label>
            <select class="form-select" aria-label="Default select example">
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
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
        <div style={{ textAlign: "right" }}>
          <button type="button" class="btn btn-success">
            SUBMIT
          </button>
        </div>
      </form>
    );
  }
  return (
    <form
      enctype="application/x-www-form-urlencoded"
      className="landing-page-form"
    >
      <div class="row mt-2 ">
        <div
          onClick={() => props.setIsApplicantForm(false)}
          className={`col ${classes.title1}`}
        >
          <p style={{ color: "red" }}>
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
          <label for="exampleFormControlTextarea1">Address</label>
          <input type="text" class="form-control" aria-label="First name" />
        </div>
        <div class="col">
          <label for="exampleFormControlTextarea1">City/state</label>
          <input type="text" class="form-control" aria-label="Last name" />
        </div>
      </div>
      <div class="row mt-2 ">
        <div class="col">
          <label for="exampleFormControlTextarea1">Care is for</label>
          <select class="form-select" aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
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
          row
          mt-2s="3"
          cols="50"
          style={{ width: "75%" }}
        ></textarea>
      </div>
      <div style={{ textAlign: "right" }}>
        <button type="button" class="btn btn-primary">
          Primary
        </button>
      </div>
    </form>
  );
};

export default Form;

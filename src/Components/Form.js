import React from 'react';
import Modal from './Modal.js';
import { FiPhoneCall } from "react-icons/fi";
const phoneNumber = "555-555-5555";

const Form = props => {
    return (
      <form
        className="form"
        onSubmit={e =>
          props.handleSubmit(e, props.zipcode, props.currentlyInsured, props.ageRange)
        }
      >
        <div className="form-group textarea">
          <input
            className="form-control textarea"
            onChange={props.handleChange}
            value={props.zipcode}
            type="text"
            name="zipcode"
            id="zipcode"
            placeholder="zipcode"
            required
          />

          <select
            className="form-control textarea"
            onChange={props.handleChange}
            value={props.currentlyInsured}
            name="currentlyInsured"
            id="currentlyInsured"
            placeholder="currently insured?"
            required
          >
            <option value="" disabled>
              Already insured?
            </option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>

          <select
            className="form-control textarea"
            onChange={props.handleChange}
            value={props.ageRange}
            type="select"
            name="ageRange"
            id="ageRange"
            required
          >
            <option value="" disabled>
              Age Range
            </option>
            <option value="under">Under 25</option>
            <option value="under">25 to 34</option>
            <option value="over">35 to 44</option>
            <option value="over">45 to 55</option>
            <option value="over">over 55</option>
          </select>
        </div>

        <button
          type="submit"
          className="btn btn-danger btn-lg"
          data-toggle="modal"
          data-target="#myModal"
          onClick={props.toggle}
        >
          <h5>Find Lower Rates</h5>
        </button>
        <div>
          {props.showModal && <Modal modalMessage={props.modalMessage} />}
        </div>

        {/* call to speak to an agent button on resize */}

        <button
          id="callAgent"
          style={{ marginTop: "20px" }}
          type="button"
          className="btn btn-info btn-lg"
        >
          <span style={{ marginRight: "25px" }}>
            <FiPhoneCall />
          </span>
          <span style={{ marginLeft: "5px", color: "white" }}>
            <a href={phoneNumber}>Talk to a Live Agent</a>
          </span>
        </button>
        <p className="secure-text">
          <small>Your information is safe and secure.</small>
        </p>
      </form>
    );
}

export default Form;
import React from 'react';
import carimg from './images/cars.jpg'
import { FiPhoneCall } from "react-icons/fi";
import './App.css';




class App extends React.Component {
  state = {
    showModal: false,
    focusAfterClose: true,
    modalMessage: "",
    zipcode: "",
    currentlyInsured: "",
    ageRange: ""
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (zipcode, currentlyInsured, ageRange, e) => {
    e.preventDefault();
    console.log(zipcode, currentlyInsured, ageRange);
    if (currentlyInsured === "no") {
      this.setState({
        showModal: this.toggle,
        modalMessage: "Sorry, no rates available"
      });
    }
    if (ageRange === "over") {
      this.setState({
        showModal: this.toggle,
        modalMessage: "Yes, we have great rates available!"
      });
    } else if (ageRange === "under") {
      this.setState({
        showModal: this.toggle,
        modalMessage: "Coming soon!"
      });
    }
    this.setState({ zipcode: "", currentlyInsured: "", ageRange: "" });
  };

  toggle = () => {
    if (!this.state.showModal) {
      // attach/remove event handler
      document.addEventListener("click", this.toggle, false);
    } else {
      document.removeEventListener("click", this.toggle, false);
    }
    this.setState(prevState => {
      return { showModal: !prevState.showModal };
    });
  };

  ModalMessage = () => (
    <div
      id="myModal"
      className="modal"
    >
      {/* <!-- Modal content --> */}
      <div className="modal-content">
        <div className="modal-header">
      </div>
        <div className="modal-body">
        
          <h3 style={{ textAlign: "center" }}>{this.state.modalMessage}</h3>
        </div>
        <div className="modal-footer">
        </div>
      </div>
    </div>
  );

  render() {
    const { zipcode, currentlyInsured, ageRange } = this.state;
    return (
      <>
        <div className="container-1">
          <div className="jumbotron">
            <div className="header-text">
              <h1>
                Lower Your Auto
                <br />
                Insurance Rates
              </h1>
              <h5>Compare Rates to Save On Your Policy Today!</h5>
            </div>

            {/* Create Card  */}

            <div className="card">
              <div className="card-body">
                <div
                  className="card-title"
                  tag="h4"
                  style={{ fontStye: "strong" }}
                >
                  <strong>Cheap Auto Coverage</strong>
                </div>
                <div className="card-title">
                  Complete just <strong>3 simple steps</strong> to
                  <br />
                  get quotes from top providers in your area.
                </div>

                {/* Start Form content in card here  */}

                <form
                  className="form"
                  onSubmit={e =>
                    this.handleSubmit(zipcode, currentlyInsured, ageRange, e)
                  }
                >
                  <div className="form-group textarea">
                    <input
                      className="form-control textarea"
                      onChange={this.handleChange}
                      value={this.state.zipcode}
                      type="text"
                      name="zipcode"
                      id="zipcode"
                      placeholder="zipcode"
                      required
                    />

                    <select
                      className="form-control textarea"
                      onChange={this.handleChange}
                      value={this.state.currentlyInsured}
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
                      onChange={this.handleChange}
                      value={this.state.ageRange}
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
                    onClick={this.toggle}
                  >
                    <h5>Find Lower Rates</h5>
                  </button>
                  <div>{this.state.showModal && <this.ModalMessage />}</div>
                  <button
                    id="callAgent"
                    style={{ marginTop: "20px"}}
                    type="button"
                    className="btn btn-info btn-lg"
                    onClick={this.call}
                  >
                    <span style={{ marginRight: "25px"}}><FiPhoneCall /></span>
                    <span style={{ marginLeft: "5px", color: "white" }}><a href="tel:555-555-5555">Talk to a Live Agent</a></span>
                  </button>
                  <p className="secure-text">
                    <small>Your information is safe and secure.</small>
                  </p>
                </form>

                {/* End form here  */}
              </div>
            </div>
          </div>
        </div>
        {/* Body of page  */}
        <div className="container-2">
          <div className="row">
            <div className="col-6">
              <h3>
                We provide free quotes from top providers in your area in less
                time.
              </h3>
              <div className="list">
                <ul>
                  <li>Save time researching policies.</li>
                  <li>Get a fast response with no waiting.</li>
                  <li>Compare low-cost policies.</li>
                  <li>Save up to 30% on auto insurance.</li>
                </ul>
              </div>
            </div>
            <div className="col-6">
              <div className="car-photo">
                <img src={carimg} alt="cars" />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;

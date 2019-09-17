import React from 'react';
import carimg from './images/cars.jpg'
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
      this.setState({ showModal: !this.state.showModal, modalMessage: "Sorry, no rates available" });
      return;
    }
    if (ageRange === "over") {
      this.setState({
        showModal: this.state.showModal,
        modalMessage: "Yes, we have great rates available!"
      });

    } else if (ageRange === "under") {
      this.setState({ showModal: this.state.showModal, modalMessage: "Coming soon!" })
    }
    this.setState({ zipcode: "", currentlyInsured: "", ageRange: "" });
  };

  toggle = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  }

   ModalMessage = () => (
      <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">...</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
  )


  render() {
    console.log(this.state);
    const { zipcode, currentlyInsured, ageRange } = this.state;
    return (
      <>
        <div className="container-1">
          <div className="jumbotron">
            <div className="header-text">
              <h1 style={{ color: "rgb(255, 255, 255)" }}>
                Lower Your Auto
                <br />
                Insurance Rates
              </h1>
              <h5 style={{ color: "rgb(255,255,102)" }}>
                Compare Rates to Save On Your Policy Today!
              </h5>
            </div>

            {/* Create Card  */}

            <div className="card">
              <div className="card-body">
                <div
                  className="card-title"
                  tag="h4"
                  style={{ fontStye: "strong" }}
                >
                  Cheap Auto Coverage
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
                  <div className="form-group">
                    <input
                      onChange={this.handleChange}
                      value={this.state.zipcode}
                      type="text"
                      name="zipcode"
                      id="zipcode"
                      placeholder="zipcode"
                      required
                    />

                    <select
                      className="form-control"
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
                      className="form-control"
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
                    className="btn btn-danger"
                    onClick={this.state.toggle}
                    type="submit"
                    size="lg"
                  >
                    <h5>Find Lower Rates</h5>
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

        {/* Create Modal  */}
      
      </>
    );
  }
}

export default App;

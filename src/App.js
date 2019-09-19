import React from 'react';
import carimg from './images/cars.jpg'

import Form from "./Components/Form.js";
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

  handleSubmit = (e, zipcode, currentlyInsured, ageRange) => {
    e.preventDefault();
    // conditionals for message in reusable modal
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
    // reset form inputs 
    this.setState({ zipcode: "", currentlyInsured: "", ageRange: "" });
  };

  // toggle modal show and add event listener to close on click anywhere
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

  


  render() {
    const { zipcode, currentlyInsured, ageRange } = this.state; 
    
    return (
      <>
      {/* create jumbotron header with background photo, text and form  */}

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
                <Form toggle={this.toggle} handleChange={this.handleChange} handleSubmit={e => this.handleSubmit(e, zipcode, 
                currentlyInsured, ageRange)} modalMessage={this.state.modalMessage}  showModal={this.state.showModal} />
                
                {/* End form here  */}

              </div>
            </div> {/* end card here */}
          </div> {/* end jumbotron here */}
        </div> {/* end container-1 here */}

        {/* container- 2 Body of page  */}

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

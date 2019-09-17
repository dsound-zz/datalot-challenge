import React from 'react';
import { Container, Modal, ModalBody, ModalFooter, Jumbotron, Row, Col, Card, CardTitle, CardBody, CardText, Form, FormGroup, Label, Button, Input  } from 'reactstrap';
import carimg from './images/cars.jpg'
import './App.css';

const ageMenu = ["]
class App extends React.Component {
  state = {
    openModal: false,
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
      this.setState({ openModal: true, modalMessage: "Sorry, no rates available" });
      return;
    }
    if (ageRange === "over") {
      this.setState({
        openModal: true,
        modalMessage: "Yes, we have great rates available!"
      });

    } else if (ageRange === "under") {
      this.setState({ openModal: true, modalMessage: "Coming soon!" })
    }
    this.setState({ zipcode: "", currentlyInsured: "", ageRange: "" });
  };

  toggle = () => {
    this.setState(({ openModal }) => ({ openModal: !openModal }));
  }

  render() {
    console.log(this.state);
    const { zipcode, currentlyInsured, ageRange } = this.state;
    return (
      <>
        <Container className="container-1">
          <Jumbotron className="jumbotron">
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

            <Card className="card">
              <CardBody>
                <CardTitle tag="h4" style={{ fontStye: "strong" }}>
                  Cheap Auto Coverage
                </CardTitle>
                <CardText>
                  Complete just <strong>3 simple steps</strong> to
                  <br />
                  get quotes from top providers in your area.
                </CardText>

                {/* Start Form content in card here  */}

                <Form
                  className="form"
                  onSubmit={e =>
                    this.handleSubmit(zipcode, currentlyInsured, ageRange, e)
                  }
                >
                  <FormGroup>
                    <Label for="exampleEmail"></Label>
                    <Input
                      onChange={this.handleChange}
                      value={this.state.zipcode}
                      type="text"
                      name="zipcode"
                      id="zipcode"
                      placeholder="zipcode"
                      required
                    />
                    <Label for="currentlyInsured"></Label>
                    <Input
                      onChange={this.handleChange}
                      value={this.state.currentlyInsured}
                      type="select"
                      name="currentlyInsured"
                      id="currentlyInsured"
                      required
                    >
                      <option value="" selected disabled>
                        Currently Insured?
                      </option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </Input>
                    <Label for="ageRange"></Label>
                    <Input
                      onChange={this.handleChange}
                      value={this.state.ageRange}
                      type="select"
                      name="ageRange"
                      id="ageRange"
                      required
                    >
                      <option value="" selected disabled>
                        Your Age Range
                      </option>
                      <option value="under">Under 25</option>
                      <option value="under">25 to 34</option>
                      <option value="over">35 to 44</option>
                      <option value="over">45 to 55</option>
                      <option value="over">over 55</option>
                    </Input>
                  </FormGroup>
                 
                    <Button
                      className="btn"
                      type="submit"
                      color="danger"
                      size="lg"
                    >
                      <h5>Find Lower Rates</h5>
                    </Button>
                    <p class="secure-text">
                      <small>Your information is safe and secure.</small>
                    </p>
                </Form>

                {/* End form here  */}
              </CardBody>
            </Card>
          </Jumbotron>
        </Container>

        {/* Body of page  */}

        <Container className="container-2">
          <Row>
            <Col lg="6">
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
            </Col>
            <Col lg="6">
            <div className="car-photo"><img src={carimg} alt="cars" /></div>
            
            </Col>
          </Row>
        </Container>

        {/* Create Modal  */}

        <Modal style={{ width: "30em", height: "15em"}}
          returnFocusAfterClose={this.state.focusAfterClose}
          isOpen={this.state.openModal}
        >
          <ModalBody style={{ background: "rgb(12, 212, 184)" }}>
            <h4 style={{ textAlign: "center"}}>{this.state.modalMessage}</h4>
          </ModalBody>

          <Button color="primary" onClick={this.toggle}>
            Close
          </Button>
        </Modal>
      </>
    );
  }
}

export default App;

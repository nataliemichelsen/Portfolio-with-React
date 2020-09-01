import React, { Component } from "react";
import { Link } from "react-router-dom";
import Container from "../components/container/container";
import Card from "../components/card/card";
import "./pages.css";
import Resume from "../docs/Natalie-Resume.pdf";

class About extends Component {
  state = {
    title: "Natalie Michelsen - Boot Camp Portfolio",
  };

  componentDidMount() {
    document.title = "Natalie Michelsen";
  }

  render() {
    return (
      <Container>
        <Card title={this.state.title} id="About">
          <>
            <div className="about">
              <div>
                {/* <img id='profile-image' src='' alt="Profile" /> */}
                <p className="about-details">Hello, my name is Natalie.</p>
                <p className="about-details">
                  I am a recent student of the UofU Full Stack Web Dev Boot
                  Camp.
                </p>
                <p className="about-details">
                  View my personal{" "}
                  <Link to="/portfolio" className="AboutLinks">
                    Portfolio
                  </Link>
                </p>
                <p className="about-details">
                  Send me a message{" "}
                  <Link to="/contact" className="AboutLinks">
                    Contact
                  </Link>
                </p>
                <div className="social">
                  <p className="about-social">Natalie's Links & Info</p>
                  <p className="about-social">Phone: (801) 556-4642</p>
                  <p className="about-social">
                    Email: natalie.michelsen@outlook.com
                  </p>
                  <Link
                    className="dropdown-item"
                    to="https://github.com/nataliemichelsen">
                    GitHub
                  </Link>
                  <Link className="dropdown-item" to={Resume}>
                    Resume (PDF)
                  </Link>
                </div>
              </div>
            </div>
          </>
        </Card>
      </Container>
    );
  }
}

export default About;

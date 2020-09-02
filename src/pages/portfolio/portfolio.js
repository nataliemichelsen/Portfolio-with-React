import React, { Component } from "react";

// for project data
import projects from "../portfolio/project";
import data from "./data";

// components
import Container from "../../components/container/container";
import Card from "../../components/card/card";
import Project from "../../components/projects/projects";

import "./portfolio.css";

class Portfolio extends Component {
  state = {
    title: "Natalie Michelsen",
    info: "",
    img: "",
    alt: "",
    liveLink: "",
    repoLink: "",
    marginTop: "",
  };

  componentDidMount() {
    document.title = "Natalie Michelsen";
  }

  handleClick = (event) => {
    const dataName = event.currentTarget.getAttribute("data-name");

    const { info, img, alt, liveLink, repoLink, marginTop } = projects(
      dataName
    );

    this.setState({
      info: info,
      img: img,
      alt: alt,
      liveLink: liveLink,
      repoLink: repoLink,
      marginTop: marginTop,
    });
  };

  render() {
    const body = this.state.body;
    return (
      <Container>
        {!body ? (
          <div>
            <div id="mobile-first">
              <Card title={this.state.title} id="portfolio">
                <Container>
                  <div>
                    {data.allProjects.map((res, i) => (
                      <Project
                        key={i}
                        data={res.data}
                        img={res.img}
                        alt={res.alt}
                        name={res.name}
                        handleClick={this.handleClick}
                      />
                    ))}
                  </div>
                </Container>
              </Card>
            </div>
          </div>
        ) : (
          <Card>
            <Container>
              <div className="row">
                <div className="col-lg-4">
                  <img
                    src={this.state.img}
                    alt={`Screenshot of ${this.state.alt}`}
                    className="portfolio-image"
                    id="portfolio-image"
                  />
                </div>
                <div className="col-lg-8 info">
                  <h4 className="info-title">Info</h4>
                  <p className="info-text">{this.state.info}</p>
                  <h4 className="links-title">Links</h4>
                  <div className="links">
                    <div className="liveLink"></div>
                  </div>
                </div>
              </div>
            </Container>
          </Card>
        )}
      </Container>
    );
  }
}

export default Portfolio;

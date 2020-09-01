import React, { Component } from "react";
import projects from "./projects";
import data from "./data";

// for images
import Carousel from "react-bootstrap/Carousel";

import Container from "../../components/container/container";
import Card from "../../components/card/card";
import Project from "../../components/projects/projects";

import "./portfolio.css";

class Portfolio extends Component {
  state = {
    title: "My Portfolio",
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
      <Container fluid="-fluid">
        {!body ? (
          <div>
            <div id="desktop">
              <Card title={this.state.title} id="portfolio">
                <Carousel interval={null}>
                  <Carousel.Item>
                    <Container min={true}>
                      <div className="row sectionOne" id="sectionOne">
                        {data.sectionOne.map((res, i) => (
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
                  </Carousel.Item>

                  <Carousel.Item>
                    <Container min={true}>
                      <div className="row sectionTwo" id="sectionTwo">
                        {data.sectionTwo.map((res, i) => (
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
                  </Carousel.Item>

                  <Carousel.Item>
                    <Container min={true}>
                      <div className="row sectionThree" id="sectionThree">
                        {data.sectionThree.map((res, i) => (
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

                    <Carousel.Item>
                      <Container min={true}>
                        <div className="row mainSection" id="mainSection">
                          {data.collaborations.map((res, i) => (
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
                    </Carousel.Item>
                  </Carousel.Item>
                </Carousel>
              </Card>
            </div>

            <div id="mobile">
              <Card title={this.state.title} id="mobilePortfolio">
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
                    className="portfolioImage"
                    id="portfolioImage"
                  />
                </div>
                <div className="col-lg-8 info">
                  <h4 className="infoTitle">Info</h4>
                  <p className="infoText">{this.state.info}</p>
                  <h4 className="linksTitle">Links</h4>
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

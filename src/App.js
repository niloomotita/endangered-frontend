import React, { Component } from "react";
import "./App.css";
import redPanda from "./img/RedPanda.jpg";
import pangolin from "./img/pangolin.jpg";
import africanPenguin from "./img/African-penguins.jpg";
import lowlandGorilla from "./img/Eastern-lowland-gorilla.jpg";
import greenSeaTurtle from "./img/green-sea-turtle.jpg";
import yellowHeadedAmazon from "./img/yellow-headed.jpg";
class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="App-body">
          <div className="text">
            <h2 className="title">Endangered Placeholders</h2>
            <p className="text-body">
              This is a quick and easy to use service to place pictures of
              endangered species as placeholder in your design or code.<br />{" "}
              The goal of this service is to bring consciousness towards these
              animals. You only need to add your desired height and width after
              our URL.
            </p>
            <p className="example">
              Like this: http://endangered.io/200/400 <br />
              <br />
              example: <pre>{`<img src="http://endangered.io/200/400">`}</pre>
            </p>
          </div>
          <div className="imgs-clmn">
            <div className=" animal">
              <img src={pangolin} alt="" className="pangolin" />
              <span className="description">
                <p className="animal-title">Pangolin</p>
                <p> Critically Endangered</p>
                <div className="links">
                  <a
                    href=" https://www.flickr.com/photos/string_bass_dave/"
                    className="link"
                  >
                    Photo by David Brossard
                  </a>
                  <span className="space">/</span>
                  <a
                    href="https://creativecommons.org/licenses/by/2.0/"
                    className="link"
                  >
                    CC BY 2.0
                  </a>
                </div>
              </span>
            </div>
            <div className=" animal">
              <img src={redPanda} alt="" className="redpanda" />
              <span className="description">
                <p className="animal-title">Red Panda</p>
                <p>
                  {" "}
                  Endangered <br /> Population less than 10,000 individuals
                </p>
                <div className="links">
                  <a
                    href=" https://creativecommons.org/licenses/by-sa/3.0/"
                    className="link"
                  >
                    {" "}
                    Photo by Greg Hume
                  </a>
                  <span className="space">/</span>
                  <a
                    href="https://creativecommons.org/licenses/by-sa/3.0/"
                    className="link"
                  >
                    CC BY-SA 3.0
                  </a>
                </div>
              </span>
            </div>
            <div className="animal">
              <img src={africanPenguin} alt="" className="african-penguin" />
              <span className="description">
                <p className="animal-title">African Penguin</p>
                <p> Endangered</p>
                <div className="links">
                  <a href=" www.sharpphotography.co.uk" className="link">
                    {" "}
                    Photo by Charles J Sharp
                  </a>
                  <span className="space">/</span>
                  <a
                    href=" https://creativecommons.org/licenses/by-sa/3.0/"
                    className="link"
                  >
                    CC BY-SA 3.0
                  </a>
                </div>
              </span>
            </div>
          </div>
          <div className="imgs-clmn">
            <div className="animal">
              <img src={lowlandGorilla} alt="" className="lowland-gorilla" />
              <span className="description">
                <p className="animal-title">Eastern Lowland Gorilla</p>
                <p> Critically Endangered</p>
                <div className="links">
                  <a
                    href="https://www.flickr.com/people/72063229@N00"
                    className="link"
                  >
                    Photo by Joe McKenna
                  </a>
                  <span className="space">/</span>
                  <a
                    href="https://creativecommons.org/licenses/by/2.0/"
                    className="link"
                  >
                    CC BY 2.0
                  </a>
                </div>
              </span>
            </div>
            <div className="animal">
              <img src={greenSeaTurtle} alt="" className="green-sea-turtle" />
              <span className="description">
                <p className="animal-title">Green Turtle</p>
                <p> Endangered</p>
                <div className="links">
                  <a
                    href=" https://sites.google.com/site/thebrockeninglory/"
                    className="link"
                  >
                    Photo by Brocken Inaglory
                  </a>
                  <span className="space">/</span>
                  <a
                    href=" http://www.gnu.org/copyleft/fdl.html"
                    className="link"
                  >
                    GFDL
                  </a>
                </div>
              </span>
            </div>
            <div className="animal">
              <img
                src={yellowHeadedAmazon}
                alt=""
                className="yellow-headed-amazon"
              />
              <span className="description">
                <p className="animal-title">Yellow Headed Amazon</p>
                <p> Endangered</p>
                <div className="links">
                  <a
                    href=" https://www.flickr.com/photos/kurt-b/"
                    className="link"
                  >
                    Photo by Kurt Bauschardt
                  </a>
                  <span className="space">/</span>
                  <a
                    href="https://creativecommons.org/licenses/by/2.0/"
                    className="link"
                  >
                    CC BY 2.0
                  </a>
                </div>
              </span>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;

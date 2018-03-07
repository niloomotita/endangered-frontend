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
            <h2 className="title">Endangered Species Placeholders</h2>
            <p className="text-body">
              This is a quick and easy to use service to place pictures of
              endangered species as placeholder in your design or code.<br />{" "}
              The goal of this service is to bring awareness towards these
              animals. You only need to add your desired height and width after
              our URL.
            </p>
            <p className="example">
              Like this : <a href="http://endangered.photo/400/300" className="example-link"> http://endangered.photo/400/300 </a> <br />
              <br />
              example :{" "}
              <pre>{`<img src="http://endangered.photo/400/300">`}</pre>
            </p>
          </div>
          <div className="imgs-clmn">
            <div className=" animal">
              <img src={pangolin} alt="" className="pangolin" />
              <span className="description">
                <div className="animal-title-wrapper">
                  <p className="animal-title">Pangolin</p>
                  <a href="https://www.worldwildlife.org/species/pangolin" target="blank" className="learn-btn">
                    {" "}
                    Learn to help
                  </a>
                </div>
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
                <div className="animal-title-wrapper">
                  <p className="animal-title">Red Panda</p>
                  <a href="https://www.worldwildlife.org/species/red-panda" target="blank" className="learn-btn">
                    {" "}
                    Learn to help
                  </a>
                </div>

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
                <div className="animal-title-wrapper">
                  <p className="animal-title">African Penguin</p>
                  <a href="https://en.wikipedia.org/wiki/African_penguin#/" target="blank" className="learn-btn">
                    {" "}
                    Learn to help
                  </a>
                </div>
                <div className="links">
                  <a href=" https://sharpphotography.co.uk" className="link">
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
                <div className="animal-title-wrapper">
                  <p className="animal-title">Eastern Lowland Gorilla</p>
                  <a href="https://www.worldwildlife.org/species/eastern-lowland-gorilla" target="blank" className="learn-btn">
                    {" "}
                    Learn to help
                  </a>
                </div>

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
                <div className="animal-title-wrapper">
                  <p className="animal-title">Green Sea Turtle</p>
                  <a href="https://www.worldwildlife.org/species/sea-turtle" target="blank"className="learn-btn">
                    {" "}
                    Learn to help
                  </a>
                </div>

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
                <div className="animal-title-wrapper">
                  <p className="animal-title">Yellow Headed Amazon</p>
                  <a href="https://en.wikipedia.org/wiki/Yellow-headed_amazon#/" target="blank" className="learn-btn">
                    {" "}
                    Learn to help
                  </a>
                </div>

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
        <footer className="footer">
          <p className="footer-text">
            Endangered.photo is a free and open source <a href="https://github.com/niloomotita/endangered-frontend" className="link"> (github) </a>
            image placeholder service created by
            <a
              href="https://github.com/niloomotita/"
              target="blank"
              className="link"
            >
              {" "}
              Niloo
            </a>{" "}
            and{" "}
            <a href="https://github.com/omidfi" target="blank" className="link">
              Omid.
            </a>{" "}
            Please respect photo licenses when using it.
          </p>
        </footer>
      </div>
    );
  }
}

export default App;

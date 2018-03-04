import React, { Component } from "react";
import "./App.css";
import redPanda from "./img/RedPanda.jpg"; 
import pangolin from "./img/pangolin.jpg";
import africanPenguin from "./img/African-penguins.jpg";
import lowlandGorilla from "./img/Eastern-lowland-gorilla.jpg";
import greenSeaTurtle  from "./img/green-sea-turtle.jpg";
import yellowHeadedAmazon from "./img/yellow-headed-amazon.jpg";
class App extends Component {
  render() {
    return (
      <div className="App">
       
        <section className="App-body">
          <div className="text">
            <h2 className="title">Endangered species</h2>
            <p className="text-body">
              This is a quick and easy to use service to place pictures of
              endangered species as placeholder in your design or code.<br />{" "}
              The goal of this service is to bring consciousness towards these
              animals. You only need to add your desired height and width after
              our URL.
            </p>
            <div className="example">
              Like this: http://endangered.io/200/400
            </div>
          </div>
          <div className="imgs-clmn">
           <div className=" animal">
             <img src={pangolin} alt="" className="pangolin"/>
             <span className="description">
               
             </span>
           </div>
           <div className=" animal">
           <img src={redPanda} alt="" className="redpanda"/>
             <span></span>
           </div>
            <div className="animal">
            <img src={africanPenguin} alt="" className="african-penguin"/>
             <span></span>
            </div>
          
          </div>
          <div className="imgs-clmn">
            <div className="animal">
              <img src={lowlandGorilla} alt="" className="lowland-gorilla"/>
              <span></span>
            </div>
            <div className="animal">
              <img src={greenSeaTurtle} alt="" className="green-sea-turtle"/>
              <span></span>
            </div>
            <div className="animal">
              <img src={yellowHeadedAmazon} alt="" className="yellow-headed-amazon"/>
              <span></span>
            </div>
            
           
          </div>
        </section>
      </div>
    );
  }
}

export default App;

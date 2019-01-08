import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'


class Home extends Component {
    render() {
      return (
      <div>
        <div className="Home">
        
          <img id="backgroundPic" src={require("../movie_video.png")}></img>
          <div className="rightSideBox">
              <img id="LambPic" src={require("../LambchopCartoon.png")}></img>
              <div className="text">
                <h1>Welcome to Lambchop's Movie Ratings!</h1>
              
              </div>
             
          </div>
          
        </div>
        <button id="homeButton"> <Link to="/index">See Movies!</Link></button>
        </div>
        
      );
    }
  }
  
  export default Home;
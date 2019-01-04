import React, { Component } from 'react';


class Home extends Component {
    render() {
      return (
        <div className="Home">
        
          <img id="backgroundPic" src={require("../movie_video.png")}></img>
          <div className="rightSideBox">
              <img id="LambPic" src={require("../LambchopCartoon.png")}></img>
              <div className="text">
                <h1>Welcome to Lambchop's Movie Ratings!</h1>
              </div>
          </div>
          <button id="homeButton"> <a href="/index">Click to see Lambchop's Favorite Movies!</a></button>
          
        </div>
      );
    }
  }
  
  export default Home;
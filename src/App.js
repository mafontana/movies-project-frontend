import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./components/Home";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    }
  }
  
  async componentDidMount() {
    const response = await fetch("https://movies-project-maf.herokuapp.com/");
    const json = await response.json();
    this.setState({
      movies: json
    });
    console.log("movies", this.state.movies);
  } 
  
  
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;

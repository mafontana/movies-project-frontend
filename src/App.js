import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Background from "./components/Background";
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
    console.log("fortunes", this.state.fortunes);
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

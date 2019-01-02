import React, { Component } from 'react';
import './App.css';
import Home from "./components/Home";
import Index from "./components/Index";
import Edit from "./components/Edit";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      selectedMovie: {}
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
  
 handleClickEdit = (movie) => {
  console.log(movie)
  this.setState({
    selectedMovie: movie
  })
 }

  render() {

    const movieTitles = this.state.movies.map(movie => movie.title)
    console.log("all movies", movieTitles)


    return (
      <div className="App">
        <Home />
        <Index
        movieTitles={this.state.movies}
        handleClickEdit={this.handleClickEdit}/>
        <Edit handleClickEdit={this.handleClickEdit} 
              selectedMovie={this.state.selectedMovie}/>
      </div>
    );
  }
}

export default App;





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
      selectedMovieID: 0
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
 console.log("you clicked the edit button")
  //   const selectedMovie = this.state.movies.filter(movie => 
  //   movie.id = id)
  //   return selectedMovie

  // this.setState({
  //   selectedMovieID: selectedMovie

  // })
  // console.log("this is a new ID", selectedMovie)
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
        <Edit handleClickEdit={this.handleClickEdit} />
      </div>
    );
  }
}

export default App;





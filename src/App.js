import React, { Component } from 'react';
import './App.css';
import Home from "./components/Home";
import Index from "./components/Index";


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

    const movieTitles = this.state.movies.map(movie => movie.title)
    console.log("all movies", movieTitles)

    const movies = this.state.movies.map(movie => 
          <tr><td>{movie.title}</td>
              <td>{movie.director}</td>
              <td>{movie.year}</td>
              <td>{movie.my_rating}</td>
              <img src={movie.poster_url} />
          </tr>
  )

    return (
      <div className="App">
        <Home />
        <Index
        movieTitles={movies} />
      </div>
    );
  }
}

export default App;


// <Index
// movieTitles={this.state.movies} />


// const movies = this.state.movies.map(movie => 
//   <tr><td>{movie.title}</td>
//       <td>{movie.director}</td>
//       <td>{movie.year}</td>
//       <td>{movie.rating}</td>
//       <td>{movie.poster_url}</td>
//   </tr>
//   )
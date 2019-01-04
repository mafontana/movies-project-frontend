import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import Home from "./components/Home"
import Index from "./components/Index"
import Edit from "./components/Edit"
import { BrowserRouter as Router, Route } from 'react-router-dom'


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
      <Router>
        <div>
          <Route path="/" component={Home} exact />
          <Route path="/edit" component={Edit} />
          {this.state.movies ? <Route exact path="/index" render={() => <Index movieTitles={ this.state.movies }/>}/> : null}
        </div>
      </Router>
      
     
      
    );
  }
}

export default App;


// <div className="App">
// <Home />
// <Edit handleClickEdit={this.handleClickEdit} 
//       selectedMovie={this.state.selectedMovie}/>
// <Index
// movieTitles={this.state.movies}
// handleClickEdit={this.handleClickEdit}/>
// </div>

// {this.state.movies ? <Route exact path="/index" render={() => <Index movieTitles={ this.state.movies }/>}/> : null}
// {this.state.movies ? <Route exact path="/EditMovie" render={() => <EditMovie movie={ this.state.movies }/>}/> : null}
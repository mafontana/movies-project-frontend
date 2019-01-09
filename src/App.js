import React, { Component } from 'react'
import './App.css'
import Home from "./components/Home"
import Index from "./components/Index"
import Edit from "./components/Edit"
import AddMovie from "./components/AddMovie"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      selectedMovie: {},
      movieById: [],
      movieId: 0,
      addMovieMessage: "",
      newMoviePosted: true
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
  
  handleIdRequest = (event) => {
      event.preventDefault()
      console.log("event id:", event.target.id)
      const clickedMovieId = event.target.id
 
    fetch(`https://movies-project-maf.herokuapp.com/${event.target.id}`)
      .then(result => result.json()) 
      .then((response) => {
        this.setState({
            movieById: response
            
        })
      })
        this.setState({
          movieId: clickedMovieId
      })
    } 

    deleteMovie = (event) => {
      fetch(`https://movies-project-maf.herokuapp.com/${event.target.id}`, {
        method: "DELETE",
      })
      let movies = this.state.movies.filter(movie => {
        return movie.id !== event.target.id
      })
      this.setState({
        movies: movies
      })
    }

    handleAddMovieMessage = () => {
      console.log("handle movie message")
      this.setState({
        addMovieMessage: "You submit a new movie!",
        newMoviePosted: !this.state.newMoviePosted
      })
    }

  render() {
    const selectedMovieTitle = this.state.selectedMovie.title

    const movieById = this.state.movieById.map(movie => 
      <div className="selectedMovieToEdit">
        <div className="movieHeaderFont">{movie.title}</div>
        <div>Director: {movie.director}</div>
        <div>Year: {movie.year}</div>
        <div>Rating: {movie.my_rating}</div>
        <div><img src={movie.poster_url} className="selectedImage"></img></div>
      </div>
      )
    
    const movieTable = this.state.movies.map(movie => 
        <tr key={movie.id} className="tableData">
          <td>{movie.title}</td>
          <td>{movie.director}</td>
          <td>{movie.year}</td>
          <td>{movie.my_rating}</td>
          <td><img src={movie.poster_url} /></td>
          <td>
            <button onClick={this.handleIdRequest} className="editButton"><Link to="/edit" id={movie.id}>Edit</Link></button>
          </td>
          <td><button onClick={this.deleteMovie} id={movie.id} className="deleteButton"><Link to="/index" id={movie.id} >X</Link></button></td>
        </tr>
        )

const movieId = this.state.movieId

    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} exact />
          <Route path="/edit" render={(routeProps) => <Edit {...routeProps} selectedMovie={selectedMovieTitle} movieById={movieById} movieId={movieId}/>} />
          <Route path="/index" render={(routeProps) => <Index {...routeProps} movieTable={movieTable}/>}/> 
          <Route path="/addMovie" render={(props) => <AddMovie {...props}
                  handleAddMovieMessage={this.handleAddMovieMessage} 
                  {...this.state} addMovieMessage={this.state.addMovieMessage}
                  newMoviePosted={this.state.newMoviePosted}/>}/> 
        </div>
      </Router>
    )
  }
}

export default App;



import React, { Component } from 'react'
import './App.css'
import Home from "./components/Home"
import Index from "./components/Index"
import Edit from "./components/Edit"
import AddMovie from "./components/AddMovie"
import SearchResult from "./components/SearchResult"
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
      newMoviePosted: true,
      movieName: "",
      movieDirector: "",
      movieYear: 0,
      movieRating: 0,
      movieId: 0,
      posterURL: "",
      searchInput: "",
      filteredMovie: []
    }
  }
  
handleGetRequest = () => {
  const response = fetch("https://movies-project-maf.herokuapp.com/")
    const json = response.json();
    this.setState({
      movies: json
    });
    console.log("you submit a get request", this.state.movies)
}

  async componentDidMount() {
    const response = await fetch("https://movies-project-maf.herokuapp.com/")
    const json = await response.json()
    this.setState({
      movies: json
    });
    console.log("movies", this.state.movies);
  } 
  
  handleIdRequest = (event) => {
      event.preventDefault()
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
      this.setState({
        addMovieMessage: "You submit a new movie!",
        newMoviePosted: !this.state.newMoviePosted
      })

    }

    handleNameInput = (event) => {
      this.setState({
          movieName: event.target.value
        })
  }

  handleDirectorInput = (event) => {
      this.setState({
          movieDirector: event.target.value
        })
  }

  handleYearInput = (event) => {
      this.setState({
          movieYear: event.target.value
        })
  }

  handlePosterUrlInput = (event) => {
      this.setState({
          posterURL: event.target.value
        })
  }

  handleDirectorInput = (event) => {
    this.setState({
        movieDirector: event.target.value
      })
}

handleRatingInput = (event) => {
  this.setState({
      movieRating: event.target.value
    })
}

handleSubmitEditedMovie = (event) => {
  event.preventDefault()
  fetch(`https://movies-project-maf.herokuapp.com/${this.state.movieId}`, {
      method: 'PUT',
      headers: {
          'content-type': 'application/json',
      },
      body: JSON.stringify({
          title: this.state.movieName,
          director: this.state.movieDirector,
          year: this.state.movieYear,
          my_rating: this.state.movieRating,
          poster_url: this.state.posterURL
          })
      })
}

handleSubmitNewMovie = (event) => {
  event.preventDefault()
  fetch('https://movies-project-maf.herokuapp.com/', {
      method: 'POST',
      headers: {
          'content-type': 'application/json',
      },
      body: JSON.stringify({
          title: this.state.movieName,
          director: this.state.movieDirector,
          year: this.state.movieYear,
          my_rating: this.state.movieRating,
          poster_url: this.state.posterUrl
          })
      })
}

handleSearchInput = (event) => {
  console.log(this.state.searchInput)
  this.setState({
      searchInput: event.target.value
    })
}

handleSearchButton = () => {
  console.log("you submit the search button")
  const filteredMovie = this.state.movies.filter(movie => {
    return movie.title == this.state.searchInput
})
this.setState({
  filteredMovie: filteredMovie
})
  console.log(this.state.filteredMovie)
}

  render() {

   const displayFilteredMovie = this.state.filteredMovie.map(movie => <div className="selectedMovieToEdit">
   <div className="movieHeaderFont">{movie.title}</div>
     <div>Director: {movie.director}</div>
     <div>Year: {movie.year}</div>
     <div>Rating: {movie.my_rating}</div>
     <div><img src={movie.poster_url} className="selectedImage"></img></div>
 </div>)

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
            <button onClick={this.handleIdRequest} className="editButton"><Link to="/edit" id={movie.id}><img id={movie.id} className="editIcon" src={require("./edit.png")}></img></Link></button>
          </td>
          <td><button onClick={this.deleteMovie} id={movie.id} className="deleteButton"><Link to="/index" id={movie.id} >X</Link></button></td>
        </tr>
        )

const movieId = this.state.movieId

    return (
      <Router>
        <div>
          
          <Route exact path="/" component={Home} exact />
          <Route path="/search" render={(props) => <SearchResult {...props} {...this.state}
                displayFilteredMovie={displayFilteredMovie}
                handleSearchInput={this.handleSearchInput}
                handleSearchButton={this.handleSearchButton}
                />}/>
          <Route path="/edit" render={(props) => <Edit {...props} {...this.state}
                selectedMovie={selectedMovieTitle} 
                movieById={movieById} 
                movieId={movieId}
                handleNameInput={this.handleNameInput}
                movieName={this.state.movieName}
                handleDirectorInput={this.handleDirectorInput}
                movieDirector={this.state.movieDirector} 
                handleYearInput={this.handleYearInput}
                movieYear={this.state.movieYear}
                handlePosterUrlInput={this.handlePosterUrlInput}
                posterURL={this.state.posterURL}
                handleRatingInput={this.handleRatingInput}
                movieRating={this.state.movieRating}
                handleSubmitEditedMovie={this.handleSubmitEditedMovie}
                />}/>

          <Route path="/index" render={(props) => <Index {...props} {...this.state} 
                movieTable={movieTable} 
                handleSearchInput={this.handleSearchInput}
                handleSearchButton={this.handleSearchButton}
                displayFilteredMovie={displayFilteredMovie}/>}/> 
          <Route path="/addMovie" render={(props) => <AddMovie {...props} {...this.state} 
                handleAddMovieMessage={this.handleAddMovieMessage} 
                addMovieMessage={this.state.addMovieMessage}
                newMoviePosted={this.state.newMoviePosted}
                handleNameInput={this.handleNameInput}
                movieName={this.state.movieName}
                handleDirectorInput={this.handleDirectorInput}
                movieDirector={this.state.movieDirector} 
                handleYearInput={this.handleYearInput}
                movieYear={this.state.movieYear}
                handlePosterUrlInput={this.handlePosterUrlInput}
                posterURL={this.state.posterURL}
                handleRatingInput={this.handleRatingInput}
                movieRating={this.state.movieRating}
                handleSubmitNewMovie={this.handleSubmitNewMovie}/>}
                handleGetRequest={this.handleGetRequest}/> 
        </div>
      </Router>
    )
  }
}

export default App;



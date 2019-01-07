import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'


class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieName: "",
      movieDirector: "",
      movieYear: 0,
      movieRating: 0,
      posterUrl: ""
      
    }
    this.handleNameInput = this.handleNameInput.bind(this)
 
  }
  
  handleSubmit = (event) => {
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
        console.log("you submit the form")
}
  
  handleNameInput = (event) => {
    console.log(event.target.value)
    this.setState({
        movieName: event.target.value
      })
}

handleDirectorInput = (event) => {
    console.log(event.target.value)
    this.setState({
        movieDirector: event.target.value
      })
}

handleYearInput = (event) => {
    console.log(event.target.value)
    this.setState({
        movieYear: event.target.value
      })
}

handleRatingInput = (event) => {
    console.log(event.target.value)
    this.setState({
        movieRating: event.target.value
      })
}

handlePosterUrlInput = (event) => {
  console.log(event.target.value)
  this.setState({
      posterUrl: event.target.value
    })
}
  
  render() {
      return (
        <div className="addMovie">
          <div className="movieMessage">
            {this.props.newMoviePosted ? <h1 id="message_1">Add a new movie!</h1> : <h1 id="message_2">{this.props.addMovieMessage}</h1>}
          </div>
          <div>{this.props.movieById}</div>
              <form className="newMovieForm" onSubmit={this.handleSubmit}>
                  <input type="text" placeholder="movie name" onChange={this.handleNameInput}/>
                  <input type="text" placeholder="director" onChange={this.handleDirectorInput}/>
                  <input type="text" placeholder="year" onChange={this.handleYearInput}/>
                  <input type="text" placeholder="rating" onChange={this.handleRatingInput}/>
                  <input type="text" placeholder="poster URL" onChange={this.handlePosterUrlInput}/>
                  <button  type="submit" onClick={this.props.handleAddMovieMessage}>Submit!!!</button>
              </form>
        </div>
      )
    }
  }
  
  export default AddMovie

 
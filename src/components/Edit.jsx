import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'


class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
          movieName: "",
          movieDirector: "",
          movieYear: 0,
          movieRating: 0,
          movieId: 0
          
        }
        this.handleNameInput = this.handleNameInput.bind(this)
      }

    handleSubmit = (event) => {
        event.preventDefault()
        fetch(`https://movies-project-maf.herokuapp.com/${this.props.movieId}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                title: this.state.movieName,
                director: this.state.movieDirector,
                year: this.state.movieYear,
                my_rating: this.state.movieRating,
                poster_url: ""
                })
            })
            console.log("you submit the PUT request")
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

    render () {
        return (
            <div className="Edit">
                <div className="selectedMovie">
                    {this.props.movieById} 
                </div>
                <div className="editMovieDetails">Edit movie details:</div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="movie name" onChange={this.handleNameInput}/>
                    <input type="text" placeholder="director" onChange={this.handleDirectorInput}/>
                    <input type="text" placeholder="year" onChange={this.handleYearInput}/>
                    <input type="number" placeholder="rating" name="rating" min="1" max="5" onChange={this.handleRatingInput}/>
                    <button className="formButton" type="submit">Submit!!!</button>
                </form>
                <button className="backButton"><Link className="test" to="/index">Back to Movies</Link></button>
            </div>   
        )
    }
}

export default Edit
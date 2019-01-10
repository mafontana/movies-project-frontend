import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'


class Edit extends Component {
    render () {
        return (
            <div className="Edit">
                <div className="selectedMovie">
                    {this.props.movieById} 
                </div>
                <div className="editMovieDetails">Edit movie details:</div>
                <form onSubmit={this.props.handleSubmitEditedMovie}>
                    <input type="text" placeholder="movie name" onChange={this.props.handleNameInput}/>
                    <input type="text" placeholder="director" onChange={this.props.handleDirectorInput}/>
                    <input type="text" placeholder="year" onChange={this.props.handleYearInput}/>
                    <input type="text" placeholder="poster URL" onChange={this.props.handlePosterUrlInput}/>
                    <input type="number" placeholder="rating" name="rating" min="1" max="5" onChange={this.props.handleRatingInput}/>
                    <button className="formButton" type="submit">Submit!!!</button>
                </form>
                <button className="backButton"><Link to="/index">Back to Movies</Link></button>
            </div>   
        )
    }
}

export default Edit
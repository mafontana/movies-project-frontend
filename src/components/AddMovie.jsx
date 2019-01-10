import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'

class AddMovie extends Component {

  render() {
      return (
        <div className="addMovie">
          <div className="movieMessage">
            {this.props.newMoviePosted ? <div id="message_1">Add a new movie!</div> : <div id="message_2">{this.props.addMovieMessage}</div>}
          </div>
          <div>{this.props.movieById}</div>
              <form className="newMovieForm" onSubmit={this.props.handleSubmitNewMovie}>
                  <input type="text" placeholder="movie name" onChange={this.props.handleNameInput}/>
                  <input type="text" placeholder="director" onChange={this.props.handleDirectorInput}/>
                  <input type="text" placeholder="year" onChange={this.props.handleYearInput}/>
                  <input type="text" type="number" placeholder="rating" name="rating" min="1" max="5" onChange={this.props.handleRatingInput}/>
                  <input type="text" placeholder="poster URL" onChange={this.props.handlePosterUrlInput}/>
                  <button className="formButton" type="submit" onClick={this.props.handleAddMovieMessage}>Submit!!!</button>
              </form>
              <button className="backButton"><Link to="/index" >Back to Movies</Link></button>
        </div>
      )
    }
  }
  
  export default AddMovie

 
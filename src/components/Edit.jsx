import React, { Component } from 'react';


class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
          movieName: "",
          movieDirector: "",
          movieYear: "",
          movieRating: ""
        }
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
            movieName: event.target.value
          })
    }

    handleYearInput = (event) => {
        console.log(event.target.value)
        this.setState({
            movieName: event.target.value
          })
    }

    handleRatingInput = (event) => {
        console.log(event.target.value)
        this.setState({
            movieName: event.target.value
          })
    }

    render () {
        return (
            <div className="Edit">
            <input type="text" placeholder="movie name" onChange={this.handleNameInput.bind(this)}/>
            <input type="text" placeholder="director" onChange={this.handleDirectorInput.bind(this)}/>
            <input type="text" placeholder="year" onChange={this.handleYearInput.bind(this)}/>
            <input type="text" placeholder="rating" onChange={this.handleRatingInput.bind(this)}/>
          </div>   
        )
    }
}

export default Edit
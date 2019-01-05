import React, { Component } from 'react'



class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
          movieName: "",
          movieDirector: "",
          movieYear: 0,
          movieRating: 0,
          
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
                poster_url: ""
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

    render () {
        return (
            <div className="Edit">
            <div></div>
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="movie name" onChange={this.props.handleNameInput}/>
                <input type="text" placeholder="director" onChange={this.props.handleDirectorInput}/>
                <input type="text" placeholder="year" onChange={this.props.handleYearInput}/>
                <input type="text" placeholder="rating" onChange={this.props.handleRatingInput}/>
                <button  type="submit">Submit!!!</button>
               
            </form>
          </div>   
        )
    }
}

export default Edit
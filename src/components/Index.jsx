import React, { Component } from 'react'
import SearchBar from "./SearchBar"
import { Route, Link } from 'react-router-dom'

class Index extends Component {
    render() {
      return (
        <div className="Index">
        <SearchBar/>
            <div className="indexHeader">
            Lambchop's Favorite Movies:
            </div>
          <div className="tableDiv">
                <table>
                    <thead>
                       <tr>
                            <th>Title</th>
                            <th>Director</th>
                            <th>Year</th>
                            <th>Rating</th>
                            <th>Poster</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>    
                    </thead>
                    <tbody>
                    {this.props.movieTable}
                    </tbody>
                </table>
            </div>
            <div className="addMovieButtonDiv">
                <button className="addMovieButton"><Link to="/addMovie">Add New Movie</Link></button>
            </div>
            </div>
      )
    }
  }
  
  export default Index;

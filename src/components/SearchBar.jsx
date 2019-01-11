import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'

class SearchBar extends Component {

  render() {
      return (
        <div className="SearchBar">
            <div>Search for your favorite movie:</div>
            <input type="text" onChange={this.props.handleSearchInput}></input>
            <button className="searchButton" onClick={this.props.handleSearchButton}><Link to="/search">Search</Link></button>
            {this.props.displayFilteredMovie}
        </div>
      )
    }
  }
  
  export default SearchBar

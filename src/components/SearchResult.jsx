import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'

class SearchResult extends Component {

  render() {
      return (
        <div className="SearchResult">
        <h1>Here are your search results</h1>
        {this.props.displayFilteredMovie}
        </div>
      )
    }
  }
  
  export default SearchResult
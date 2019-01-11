import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'

class SearchBar
 extends Component {

  render() {
      return (
        <div className="SearchBar">
        <input type="text" onChange={this.props.handleSearchInput}></input>
          <button onClick={this.props.handleSearchButton}>Search!</button>
          {this.props.displayFilteredMovie}
          <p>this is the filtered movie</p>
        </div>
      )
    }
  }
  
  export default SearchBar

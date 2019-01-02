import React, { Component } from 'react';


class Index extends Component {


    render() {


    const movies = this.props.movieTitles.map(movie => 
          <tr className="tableData">
              <td>{movie.title}</td>
              <td>{movie.director}</td>
              <td>{movie.year}</td>
              <td>{movie.my_rating}</td>
              <td><img src={movie.poster_url} /></td>
              <td><button>Delete Movie</button></td>
              <td><button onClick={this.props.handleClickEdit.bind(this, movie)}>Edit</button></td>
          </tr>
  )


      return (
        <div className="Index">
            <div className="indexHeader">
            <h1>Lambchop's Favorite Movies:</h1>
            </div>
          <div className="tableDiv">
                <table>
                    <tr>
                        <th>Title</th>
                        <th>Director</th>
                        <th>Year</th>
                        <th>Rating</th>
                    </tr>

                    {movies}
                </table>
            </div>
        


            </div>
      );
    }
  }
  
  export default Index;

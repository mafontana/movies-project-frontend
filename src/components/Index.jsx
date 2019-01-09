import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import Edit from "./Edit"

class Index extends Component {

    render() {
      return (
        <div className="Index">
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
      );
    }
  }
  
  export default Index;



//   <Router>
//                 <Route exact path="/edit" render={(routeProps) => <Edit {...routeProps} selectedMovie={this.state.selectedMovie }/>}/>
//             </Router>
  


//<td><button onClick={this.props.handleClickEdit.bind(this, movie)}>Edit</button></td>

//   <Router>
          
      
//   {this.state.selectedMovie ? <Route exact path="/edit" render={() => <Edit selectedMovie={this.state.selectedMovie }/>}/> : null}

// </Router>
import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Edit from "./Edit"

class Index extends Component {




    render() {






      return (
        <div className="Index">
            <div className="indexHeader">
            <h1>Lambchop's Favorite Movies:</h1>
            </div>
          <div className="tableDiv">
                <table>
                    <thead>
                       <tr>
                            <th>Title</th>
                            <th>Director</th>
                            <th>Year</th>
                            <th>Rating</th>
                        </tr>
                        
                    </thead>
                <tbody>
                   {this.props.movieTable}
                </tbody>
                </table>
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
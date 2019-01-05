import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import Home from "./components/Home"
import Index from "./components/Index"
import Edit from "./components/Edit"
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      selectedMovie: {},
      movieSelected: true,
      movieById: []
    
    }
  }
  
  async componentDidMount() {
    const response = await fetch("https://movies-project-maf.herokuapp.com/");
    const json = await response.json();
    this.setState({
      movies: json
    });
    console.log("movies", this.state.movies);
  } 
  
  handleIdRequest = (event) => {
      event.preventDefault()
      console.log("event id:", event.target.id)
 
    fetch(`https://movies-project-maf.herokuapp.com/${event.target.id}`)
      .then(result => result.json()) 
      .then((response) => {
        this.setState({
            movieById: response
        })
      })
      



        console.log("you hit the request by id");
      } 


  // handleClickEdit = (movie) => {
  //   console.log(movie)
  //   this.setState({
  //     selectedMovie: movie,
  //     movieSelected: !this.state.movieSelected
  //   })
  //   console.log("you clikced edit")
  //  }
 

  render() {
    const selectedMovieTitle = this.state.selectedMovie.title

    // const movieById = this.state.movieById
    
    const movieTable = this.state.movies.map(movie => 
      
        <tr key={movie.id} className="tableData">
            <td>{movie.title}</td>
            <td>{movie.director}</td>
            <td>{movie.year}</td>
            <td>{movie.my_rating}</td>
            <td><img src={movie.poster_url} /></td>
            <td><button>Delete Movie</button></td>
            <td>
                <button onClick={this.handleIdRequest}><a id={movie.id} href="/edit">Edit</a></button>
            </td>
        </tr>
     
)



    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} exact />
          <Route path="/edit" render={(routeProps) => <Edit {...routeProps} selectedMovie={selectedMovieTitle} />} />
          <Route path="/index" render={(routeProps) => <Index {...routeProps} movieTable={movieTable}/>}/> 
        </div>
      </Router>
      
     
    );
  }
}

export default App;

//handleClickEdit={this.handleClickEdit}


// <Route exact path="/index" render={(routeProps) => 
//   this.state.movieSelected ? <Index {...routeProps} movieTable={movieTable}/> : <Edit {...routeProps} selectedMovie={selectedMovie} />}/> 





// <Route exact path="/edit" component={Edit} render={() => <Edit selectedMovie={this.state.selectedMovie}/>} />


//Original router code...
// <Router>
//         <div>
//           <Route path="/" component={Home} exact />
//           <Route exact path="/edit" component={Edit} render={(routeProps) => <Edit {...routeProps} selectedMovie={this.state.selectedMovie}/>} />
//           {this.state.movies ? <Route exact path="/index" render={() => <Index movieTitles={this.state.movies}/>}/> : null}
//         </div>
//       </Router>





//<Route exact path="/edit" component={Edit} />


// <div className="App">
// <Home />
// <Edit handleClickEdit={this.handleClickEdit} 
//       selectedMovie={this.state.selectedMovie}/>
// <Index
// movieTitles={this.state.movies}
// handleClickEdit={this.handleClickEdit}/>
// </div>

// {this.state.movies ? <Route exact path="/index" render={() => <Index movieTitles={ this.state.movies }/>}/> : null}
// {this.state.movies ? <Route exact path="/EditMovie" render={() => <EditMovie movie={ this.state.movies }/>}/> : null}
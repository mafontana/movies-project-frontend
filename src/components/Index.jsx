import React, { Component } from 'react';


class Index extends Component {


    render() {
      return (
        <div className="Index">
            <div className="indexHeader">
            <h1>Lamb's fav movies...</h1>
            </div>
            

            <table>
            <tr>
              <th>Title</th>
              <th>Director</th>
              <th>Year</th>
              <th>Lamb Rating</th>
            </tr>
           
              {this.props.movieTitles}
              
            
           
          </table>

        


            </div>
      );
    }
  }
  
  export default Index;
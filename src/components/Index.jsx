import React, { Component } from 'react';


class Index extends Component {


    render() {
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
                        <th>Lamb Rating</th>
                    </tr>
                    {this.props.movieTitles}
                </table>
            </div>
        


            </div>
      );
    }
  }
  
  export default Index;
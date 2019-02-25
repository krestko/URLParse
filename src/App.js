import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

class App extends Component {

  handleGiphs = (giphs) => {
    return giphs.map((val, index) => {
      return(
        <div key={index}>
          <iframe src={`https://giphy.com/embed/${val}`} width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
        </div>
      )
    })
  }

  render() {
    let url = new URL(window.location.href)
    let giphyIDs = url.pathname.replace(/[/]/g, ',').split(',')
    giphyIDs.shift()

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My Favorite Gif</h1>
        </header>
        <p className="App-intro">
          { giphyIDs.length > 0 ? this.handleGiphs(giphyIDs) : null }
        </p>
      </div>
    );
  }
}
export default App;
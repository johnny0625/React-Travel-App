import React, { Component } from 'react';
import Header from './Components/Header';
import Download from './Components/Download';
import Media from './Components/Media';
import Footer from './Components/footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Download />
        <Media />
        <Footer />
      </div>
    );
  }
}

export default App;

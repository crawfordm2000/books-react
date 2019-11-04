import React, {Component} from 'react';
import './App.css';
import Header from './components/Header';
import Books from './components/Books';
import Gallery from './components/Gallery';


class App extends Component {
  
  render() { 
    return ( 
      <div className="App">
        <Header />
        <Books />
        <Gallery />
      </div> 
     );
  }
}
 
export default App;
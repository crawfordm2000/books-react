import React, { Component } from "react";
import SearchBar from "./SearchBar";
import axios from "axios";
import Gallery from "./Gallery";
import Bookshelf from "./Bookshelf";
import { HashRouter as Router, Route, Link } from "react-router-dom";


class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchText: " ",
      faveBooks: []
    };
    this.pArray = [];
  }

  addToShelf = book => {
    this.pArray.push(book);
    return this.setState({ faveBooks: this.pArray });
  };

  removeFave = (index) => {
    this.pArray.splice(index, 1);
    return this.setState({ faveBooks: this.pArray});
  }

  getBooks = e => {
    e.preventDefault();
    axios({
      url:
        "https://www.googleapis.com/books/v1/volumes?q=" +
        this.state.searchText,
      method: "get"
    })
      .then(response => {
        //console.log(response)
        // you will want to change the state of the books array here
        this.setState({ books: response.data.items });
        //console.log(response.data.items);
      })
      .catch(() => {
        console.log("nothing was returned");
      });
  };

  searchInput = e => {
    this.setState({ searchText: e.target.value });
  };

  render() {
    console.log(this.state);
    return (
      <Router basename='/'>
        <React.Fragment>
          <SearchBar searchInput={this.searchInput} getBooks={this.getBooks} />
          <Link className="link zoom" to='/bookshelf'>Bookshelf</Link>
          <Link className="link zoom" to='/'>Home</Link>
          <Route
            exact
            path="/"
            component={(e) => (
              <Gallery
                books={this.state.books}
                click={this.addToShelf}
                favBooks={this.state.faveBooks}
              />
            )}
          />
          <Route path="/bookshelf" component={(e) => (
              <Bookshelf click={this.removeFave} books={this.state.faveBooks} />
          )}
          />
        </React.Fragment>
      </Router>
    );
  }
}

export default Books;

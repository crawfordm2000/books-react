import React, { Component } from "react";
import SearchBar from "./SearchBar";
import axios from "axios";
import Gallery from './Gallery';

class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchText: ' '
    };
  }


  getBooks = (e) => {
    e.preventDefault();
    axios.request ({
        url: 'https://www.googleapis.com/books/v1/volumes?q=' + this.state.searchText,
        method: 'get',
    })
    .then(response => {
        // you will want to change the state of the books array here
        this.setState({ books: response.data.items})
        console.log(response.data.items);
    })
    .catch(() => {
        console.log("Something went wrong");
    })
}


  searchInput = e => {
    this.setState({ searchText: e.target.value });
  };

  render() {
    return (
      <div>
        <SearchBar searchInput={this.searchInput} getBooks={this.getBooks} />
        <Gallery books={this.state.books}/>
      </div>
    );
  }
}

export default Books;

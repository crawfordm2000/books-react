import React from "react";

const Gallery = props => {
  const bookList = () => {
    console.log(props.books);
    const bookResults = props.books.map((book, index) => {
      return (
        <div key={index} className="bookCard">
          <span className="title">Title: {book.volumeInfo.title}</span>
        </div>
      );
    });

    return bookResults;
  };

  return <div className="gallery">{bookList()}</div>;
};

export default Gallery;

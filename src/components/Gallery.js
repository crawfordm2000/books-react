import React from "react";

const Gallery = props => {
  const bookList = () => {
    console.log(props.books);
    const bookResults = props.books.map((book, index) => {
      return (
        <div key={index} className="bookCard">
        <img className="image" src={book.volumeInfo.imageLinks.thumbnail} alt="bookThumbnail" />
        <span className="title">Title: {book.volumeInfo.title}</span>
        <a target="_blank" href={book.volumeInfo.previewLink}>link</a>
          
        </div>
      );
    });

    return bookResults;
  };

  return <div className="gallery">{bookList()}</div>;
};

export default Gallery;

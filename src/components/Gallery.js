import React from "react";

const Gallery = props => {

  const bookList = () => {
    console.log(props.books);
    const bookResults = props.books.map((book, index) => {
      return (
        <div key={index} className="bookCard">
          <a target="_blank" href={book.volumeInfo.previewLink}>
            <img
              className="image"
              src={book.volumeInfo.imageLinks ?  book.volumeInfo.imageLinks.thumbnail : '../images/brokenImg.png'}
              alt="bookThumbnail"
            />
          </a>
          <p className="title">
            <b>{book.volumeInfo.title}</b>
          </p>
          <p className="authors">By: {book.volumeInfo.authors}</p>
          <button className="bookshelf">Bookshelf</button>
        </div>
      );
    });

    return bookResults;
  };

  return <div className="gallery">{bookList()}</div>;
};

export default Gallery;

import React, { useEffect, useState } from "react";
import SearchForm from "./SearchForm";
import axios from "axios";
import Book from "./Book";
import { useDispatch, useSelector } from "react-redux";
import {
  booksSelector,
  getBooksAsync,
  statusSelector,
} from "../redux/booksSlice";

function BookList() {
  const [search, setSearch] = useState("");

  const books = useSelector(booksSelector);
  const status = useSelector(statusSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle" && search) {
      dispatch(getBooksAsync(search));
      console.log("stat idle");
    }
  });

  if (status === "loading") {
    return console.log("loading");
  }


  const filteredBooksAuthor = books.filter((book) => {
    if (book.volumeInfo.authors) {
      return book.volumeInfo.authors.map((author) => author.toLowerCase().includes(search.toLowerCase()))
    }
    return []
  });


    const filteredBooks = books.filter((book) =>
      book.volumeInfo.title.toLowerCase().includes(search.toLowerCase()) || filteredBooksAuthor
    );

 

  return (
    <div>
      <SearchForm search={search} setSearch={setSearch} />

      <div className="bookList">
        {filteredBooks &&
          filteredBooks.map((book, i) => {
            return <Book key={i} book={book} />;
          })}
      </div>
    </div>
  );
}

export default BookList;

import React, { Component } from "react";
import { connect } from "react-redux";
import BookItem from "./BookItem";
import "./BookList.css";

class BookList extends Component {
  render() {
    const { bookList } = this.props;

    return (
      <div className="booklist-container ui cards">
       {
           bookList.map(book => (
               <BookItem key={book.isbn} book={book}/>
           ))
       }
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state);
  return { bookList: state.bookList };
};

export default connect(mapStateToProps)(BookList);

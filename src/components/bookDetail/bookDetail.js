import React, { Component } from "react";
import { connect } from "react-redux";
import {deselectBook} from "../../Redux/actions/index"

class bookDetail extends Component {
  renderContent() {
    const { selectedBook } = this.props;
    if (selectedBook.isbn) {
      return (
        <div className="ui cards">
          <div className="card">
            <div className="content">
              <div className="header">{selectedBook.title}</div>
              <div className="description">
                <h4>{selectedBook.description}</h4>
                <div>
                  <h4> Sayfa Sayısı:{selectedBook.pages}</h4>
                </div>
              </div>
            </div>
            <div className="ui bottom attached button" onClick={() => this.props.deselectBook()}>
               Kitap Seçiminden Vazgeç 
            </div>
          </div>
        </div>
      );
    }
    return <div>Seçili Kitap Yok!</div>;
  }
  render() {
    return <div>{this.renderContent()}</div>;
  }
}
const mapStateToProps = (state) => {
  return {
    selectedBook: state.selectedBook,
  };
};
export default connect(mapStateToProps,{deselectBook})(bookDetail);

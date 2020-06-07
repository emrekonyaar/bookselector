import {combineReducers} from "redux";
import books from "./books.json";

const bookListReducers = (oldBookList = books,action) => {
    if(action.type === "ADD_BOOK"){
    return [...oldBookList,action.payload];

    }else if (action.type === "DELETE_BOOK"){
        return oldBookList.filter(oldBook => oldBook.title !== action.payload.title);
    }
    return oldBookList;
}
const selectedBookReducers = (oldBookList = {},action) => {
    if(action.type === "SELECT_BOOK"){
        return action.payload;

    }else if (action.type === "DESELECT_BOOK"){
        return {}
    }else if (action.type==="DELETE_BOOK"){
        return oldBookList.isbn===action.payload.isbn ? {} : oldBookList
    }
    return oldBookList;
}
export {
    bookListReducers,selectedBookReducers
}

export default combineReducers({
    bookList:bookListReducers,
    selectedBook:selectedBookReducers
});


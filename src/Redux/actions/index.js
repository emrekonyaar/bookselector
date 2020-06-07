export const addBook = (isbn,title,description,author,pages) => {
    return {
        type:"ADD_BOOK",
        payload:isbn,title,description,author,pages
    }
} 
export const deleteBook = (book) => {
    return {
        type:"DELETE_BOOK",
        payload:book
    }
}
export const selectBook = (book) => {
    return{
        type:"SELECT_BOOK",
        payload:book
    }
}
export const deselectBook = () => {
    return {
        type:"DESELECT_BOOK"
    }
}

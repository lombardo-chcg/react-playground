export function selectBook(book) {

  // actions are objects 
  //returns an action. every action must have a type (uppercase)
  //sometimes contains a payload which has more informaiton about the action
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}

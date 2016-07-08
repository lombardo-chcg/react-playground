// a reducer returns a piece of state.
// all reducers get 2 arguments : state and an action
// state is just the portion of state this reducer is responsible for
export default function(state = null, action) {
  switch(action.type){
    case 'BOOK_SELECTED':
      return action.payload
  }

  return state
}

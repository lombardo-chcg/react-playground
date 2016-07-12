export default function(state = [], action) {
  switch (action.type) {
    case "GET_JOKE":
    return [action.payload.data].concat(state)
  }

  return state;
}

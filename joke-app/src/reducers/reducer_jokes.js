export default function(state = [], action) {
  switch (action.type) {
    case "GET_JOKE":
    return [action.payload.data.value].concat(state)
  }
  return state;
}

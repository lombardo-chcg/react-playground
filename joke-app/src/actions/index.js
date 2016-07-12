import axios from 'axios'

const URL = 'http://api.icndb.com/jokes/random'

export function getJoke() {
  const request = axios.get(URL);

  return {
    type: 'GET_JOKE',
    payload: request
  }
}

// redux actions always return an object with a type and usually a payload

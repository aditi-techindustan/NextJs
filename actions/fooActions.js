import axios from 'axios';
import store from '../store';

const {dispatch} = store

export const getPosts = () =>
  axios({
    method: 'GET',
    url: `https://jsonplaceholder.typicode.com/posts`,
    headers: []
  })
  .then(response => 
        dispatch({ type: 'FOO', payload: response.data })
    );
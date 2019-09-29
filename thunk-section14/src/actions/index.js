//import _ from 'lodash'
import jsonPlaceholder from '../apis/jsonPlaceholder'

// dispatch has unlimited power to make changes to any data on the redux side of the app, getState let to read any data.

// code below is totally refactured to ES6 look. And is standard use for multiple apps.

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts');

  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

// next let's put action creator togeather, wich will be called by userHeader.
export const fetchUser = (id) => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/ ${id}`)

  dispatch({ type: 'FETCH_USER', payload: response.data })
}

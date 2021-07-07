import axios from 'axios';

export const FETCHING_SMURF_START = "FETCHING_SMURF_START";
export const GET_SMURF = "GET_SMURF";

export const ADD_SMURF = "ADD_SMURF";
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";
export const ADD_SMURF_FAIL = "ADD_SMURF_FAIL";

export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS";
export const FETCH_SMURF_FAIL = "FETCH_SMURF_FAIL";

export const fetchSmurf = () => {

  return function(dispatch) {
    dispatch({ type: FETCHING_SMURF_START });
    axios.get(`http://localhost:3333/smurfs`)
      // .then(res => console.log(res))
      .then(res => 
        dispatch({
          type: FETCH_SMURF_SUCCESS, payload: res.data
        }))
      .catch(err => 
        dispatch({
          type: FETCH_SMURF_FAIL, payload: err.response.message
        })
      )
  };
};

export const addSmurf = (data) => {

  return function(dispatch) {
    dispatch({type: ADD_SMURF});
    axios.post(`http://localhost:3333/smurfs`, data)
    .then(res => 
        dispatch({
          type: ADD_SMURF_SUCCESS, payload: res.data
        })
        .catch(err => dispatch({
          type: ADD_SMURF_FAIL, payload: err
        }))
      // console.log(res.data)
      );
  }
}
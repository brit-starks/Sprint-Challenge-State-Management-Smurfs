import axios from 'axios';

export const FETCHING_SMURF_START = "FETCHING_SMURF_START";
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS";
export const FETCH_SMURF_FAIL = "FETCH_SMURF_FAIL";

export const fetchSmurf = () => {

  return dispatch => {
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
        );
  };
}
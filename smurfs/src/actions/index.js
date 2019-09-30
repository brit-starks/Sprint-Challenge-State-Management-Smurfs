import axios from 'axios';

export const FETCH_SMURF_START = "FETCH_SMURF_START";
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS";
export const FETCH_SMURF_FAIL = "FETCH_SMURF_FAIL";

export const fetchSmurfs = () => dispatch => {
  // dispatch({
  //   type: FETCH_SMURF_START
  // });

  return function(dispatch) {
    dispatch({type: FETCH_SMURF_START});
    axios.get('http://localhost:3333/smurfs')
    .then(res => {
      console.log(res);
      dispatch({type: FETCH_SMURF_SUCCESS,
        payload: res.data.name
      });
    })
      .catch(err => {
        console.log('API Request Failed', err);

        dispatch({
          type: FETCH_SMURF_FAIL,
          payload: err.message + "fetching smurf"
        })
      });
    }
  }
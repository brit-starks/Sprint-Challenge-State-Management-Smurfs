import axios from 'axios';

export const FETCHING_SMURF_START = "FETCHING_SMURF_START";
export const GET_SMURF = "GET_SMURF";
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
        );

        axios.post('http://localhost:3333/smurfs', {
          name: 'sleepy',
          age: 232,
          height: '4cm'
        })
        .then(res => {console.log(res);
          dispatch({type: GET_SMURF});
        })
        .catch(err => {console.log("This is wrong Brit...", err.message)
        dispatch({
          type: FETCH_SMURF_FAIL, payload: err.response.message
        })
      })
  };
}
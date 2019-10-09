import { FETCHING_SMURF_START, FETCH_SMURF_SUCCESS, FETCH_SMURF_FAIL } from '../actions';

const initialState = {
  smurf: {},
  isFetching: false,
  error: ""
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCHING_SMURF_START:
          return {
            ...state, 
            isFetching: true,
            error: ''
          };
      case FETCH_SMURF_SUCCESS:
        return {
          ...state, 
          smurf: action.payload,
          isFetching: false
        };

    default: 
    return state;
  }
}

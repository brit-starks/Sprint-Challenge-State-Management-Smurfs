import { FETCH_SMURF_START, FETCH_SMURF_SUCCESS, FETCH_SMURF_FAIL } from '../actions';

const initialState = [{
  name: "Brainey",
  age: 200,
  height: "5cm",
  id: 0,
  error: ""
}];

export const Reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_SMURF_START:
          return {
            ...state, isFetching: true
    };

    case FETCH_SMURF_SUCCESS:
      return {
        ...state,
        name: action.payload,
        error: "",
        isFetching: false
      };

    case FETCH_SMURF_FAIL:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };

    default: return state;
  }
}

import React, { useEffect } from 'react';
import { connect } from '../actions';

import { fetchSmurf } from '../actions';

const Smurt = ({fetchSmurf}) => {
  useEffect(()=> {
    fetchSmurf();
  }, []);

  const fetch = e => {
    e.preventDefault();
    fetchSmurf();
  }

  if(isFetching) {
    return <p>...Finding little guys...</p>
  }
};

const mapStateToProps = state => {
  return {
    isFetching: state.isFetching,
    name: state.name,
    error: state.error
  };
};

export default connect(
  mapStateToProps, {fetchSmurf: fetchSmurf}
)(Smurf);
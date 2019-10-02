import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchSmurf } from '../store/actions';

const Smurf = ({ fetchSmurf, smurf, isFetching, error }) => {
  useEffect(() => {
//run action creator when component mounts
    fetchSmurf();
  }, [fetchSmurf])

  if(isFetching) {
    return <h2>Finding little blue guys!</h2>
  }
  console.log(smurf);
  return <h2>{smurf.name}</h2>
}

const mapStateToProps = state => {
  return {
    smurf: state.smurf,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, { fetchSmurf })(Smurf);
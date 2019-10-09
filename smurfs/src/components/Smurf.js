import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchSmurf } from '../store/actions';

const Smurf = ({ fetchSmurf, smurf, isFetching, error, addSmurf, name }) => {
  useEffect(() => {
    fetchSmurf();
  }, [fetchSmurf])

  if(isFetching) {
    return <h2>Finding little blue guys!</h2>
  }

  const getSmurf = e => {
    e.preventDefault();
    fetchSmurf();
  }

  console.log(smurf);
  return (
    <>
      <h2>{name}</h2>

      <form>
        <button onClick={getSmurf}>Get Smurf</button>
      </form>
    </>
  )  
}

const mapStateToProps = state => {
  return {
    smurf: state.smurf,
    isFetching: state.isFetching,
    error: state.error,
    name: state.name
  };
};

export default connect(mapStateToProps, { fetchSmurf })(Smurf);
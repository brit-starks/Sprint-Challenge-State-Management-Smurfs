import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchSmurf } from '../store/actions';

const Smurf = ({ fetchSmurf, isFetching, error, addSmurf }) => {
  useEffect(() => {
    fetchSmurf();
  }, [fetchSmurf])

const [name, setName] = useState('');
const [age, setAge] = useState('');
const [height, setHeight] = useState('');

  if(isFetching) {
    return <h2>Finding little blue guys!</h2>
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addSmurf({
      name: e.target.value,
      age: e.target.value,
      height: e.target.value
    });

    setName(''); 
    setAge('');
    setHeight('');
  }

  // const getSmurf = e => {
  //   e.preventDefault();
  //   fetchSmurf();
  // }

const handleChange = e => {
  name: setName('')
  age:setAge('')
  height: setHeight('')
}

  return (
    <>
      <h2>{name}</h2>

      <form onSubmit={handleSubmit}>
        <input 
          type='text'
          name='name'
          placeholder='Smurf'
          value={name}
          onChange={handleChange}
        />

        <input 
          type='text'
          name='age'
          placeholder='Age'
          value={age}
          onChange={handleChange}
        />

        <input 
          type='text'
          name='height'
          placeholder='height'
          value={height}
          onChange={handleChange}
        />
        
        <button type='button' onClick={fetchSmurf}>Get Smurf</button>
      </form>
    </>
  )
};

const mapStateToProps = state => {
  return {
    smurf: state.smurf,
    isFetching: state.isFetching,
    error: state.error,
    name: state.name
  }
}

export default connect(mapStateToProps, { fetchSmurf })(Smurf);
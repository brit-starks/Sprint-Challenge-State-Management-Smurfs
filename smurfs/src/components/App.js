import React from "react";
import Smurf from './Smurf';
// import Form from './Form';

import "./App.css";


const App = () => {

  return (
    <div className="App">
      <h1 style={{color: "lime"}}>SMURFS! 2.0 W/ Redux</h1>
      <Smurf />
      {/* <Form /> */}
    </div>
  );
}


export default App;

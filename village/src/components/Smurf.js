import React from 'react';
import axios from 'axios';


const Smurf = props => {

  const deleteComponent = () => {
    axios.delete(`http://localhost:3333/smurfs/${props.id}`)
      .then(res => console.log(res))
      .catch(err => console.warn(err));
  }

  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <button onClick={deleteComponent}>X</button>
    </div>
  );
};


Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;


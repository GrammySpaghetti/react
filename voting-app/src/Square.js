import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';


const Square = (props) => {
  const { name } = props;
  return (
    <div className="col-lg-4 row border border-dark m-2 p-2" onClick={() => {alert('I voted for ' + name)}}>
      <p className="col-8">{name}</p>
      <button className="btn btn-info">Vote!</button>
    </div>
  )
}



export default Square

import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Square from './Square';

const App = (props) => {
  return(
    <div className="Constainer">
      <Square name="React" />
      <Square name="Vue" />
      <Square name="Angular" />
      <Square name="Ember" />
    </div>
  )
}

export default App

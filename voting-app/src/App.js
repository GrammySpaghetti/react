import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Square from './Square';

// const App = (props) => {
//   return(
//     <div className="Constainer">
//       <Square name="React" />
//       <Square name="Vue" />
//       <Square name="Angular" />
//       <Square name="Ember" />
//     </div>
//   )
// }

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render() {
    return(
      <div className="Constainer">
        <h1>Vote For Your Favorite JS Library!</h1>
        <Square name="React" />
        <Square name="Vue" />
        <Square name="Angular" />
        <Square name="Ember" />
      </div>
    )
  }
}

export default App

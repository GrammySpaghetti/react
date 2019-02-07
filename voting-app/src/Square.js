import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';


// const Square = (props) => {
//   const { name } = props;
//   return (
//     <div className="col-lg-4 row border border-dark m-2 p-2" onClick={() => {alert('I voted for ' + name)}}>
//       <p className="col-8">{name}</p>
//       <button className="btn btn-info">Vote!</button>
//     </div>
//   )
// }

class Square extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0,
    }
  }
  updateCount = () => {
    this.setState({count: this.state.count + 1})
  }
  render(){
    const { name } = this.props;
    return(
      <div className="col-lg-4 row border border-dark m-2 p-2">
        
        <p className="col-8">{name} Received {this.state.count} Votes</p>
        <button
          className="btn btn-info"
          onClick={this.updateCount}>
          Vote!
        </button>
      </div>
    )
  }
}


export default Square

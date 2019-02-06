import React from 'react';
import ReactDOM from 'react-dom'

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  updateCount = () => {
    this.setState({count: this.state.count + 1})
  }
  render() {
    const { name } = this.props;

    const style = this.state.count < 15 ? "btn-primary" : "btn-danger"

    return (
      <div className="container">
        <h1>Hello {name}!</h1>
        <button
          onClick={this.updateCount}
          className={style}>
          Click Me
        </button>
        <p>You have clicked me {this.state.count} times</p>
      </div>
    )

  }
}


export default Counter

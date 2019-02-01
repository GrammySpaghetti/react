import React from 'react'; // import the React library
import ReactDOM from 'react-dom'; // import the ReactDOM library
// we can create a simple element to display on our HTML page
// const App = React.createElement("h1", null, "Hello World");
import App from './App'
// with JSX we can perform the same React.createElement() call with the following:
// const App = <h1>Hello World</h1>;

// and load our App into the DOM, targeting the div located in /public/index.html
ReactDOM.render(
  <div>
    <App text="white on blue" dcolor="blue" tcolor="white" />
    <App text="blue on red" dcolor="red" tcolor="blue" />
    <App text="green on pink" dcolor="pink" tcolor="green" />
  </div>, document.getElementById('root'));

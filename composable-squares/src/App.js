import React from 'react';

const App = (props) => {
  const { text, dcolor, tcolor } = props;

  return (
    <div style={{background:dcolor, display:"inline-block", height:"100px", padding:"10px"}}>
      <p style={{color:tcolor}}>{text}</p>
    </div>
  );
};


export default App

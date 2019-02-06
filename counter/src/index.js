import React from 'react'
import PropTypes from 'prop-types'

const ButtonOne = (props) => {
    return <button onClick={function(){alert("You clicked me!")}}>Click Me!</button>;
}
// Note the anonymous event handler: You will commonly see this done using ES6 arrow syntax
const ButtonTwo = (props) => {
    return <button onClick={()=> alert("You clicked me!")}>Click Me!</button>;
}
// We may also define the handler as a function inside our component
const ButtonThree = (props) => {
    function handleClick() {
        alert("You clicked me!");
    }
    return <button onClick={handleClick}>Click Me!</button>;
}

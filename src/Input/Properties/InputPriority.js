import React from 'react';

const InputPriority = (props) => {
    return <button onClick={props.handleChange} style={props.style} className='inputPriority'></button>
}

export default InputPriority;
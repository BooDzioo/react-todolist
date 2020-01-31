import React from 'react';

const InputPriority = (props) => {
    return <input type='checkbox' onClick={props.handleChange} className='inputPriority'></input>
}

export default InputPriority;
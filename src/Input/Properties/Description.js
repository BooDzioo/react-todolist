import React from 'react';

const Description = (props) => {
    return <input type='text' value={props.currentDescription} onChange={props.handleChange} className='descriptionInput'></input>
}

export default Description;
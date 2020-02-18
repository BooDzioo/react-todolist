import React, {useEffect, useRef} from 'react';

const Description = (props) => {
   
    const toggleFocus = useRef(null);

    useEffect(() => {
        toggleFocus.current.focus();
    })
    
    return <input ref={toggleFocus} type='text' value={props.currentDescription} onChange={props.handleChange} className='descriptionInput'></input>
}

export default Description;
import React from 'react';

const InputPriority = (props) => {
    return <button onClick={props.handleChange} className={props.module}>{`\u2605`}</button>
}

export default InputPriority;
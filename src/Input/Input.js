import React, {useState} from 'react';

import Description from './Properties/Description';
import InputPriority from './Properties/InputPriority';

const Input = (props) => {
    const [currentValue, setCurrentValue] = useState('');
    const handleValueChange = (e) => {
        setCurrentValue(e.target.value);
    }

    let currentPriority = false;
    const handlePriorityChange = () => {
        currentPriority = !currentPriority;
    }

    const handleClick = () => {
        props.handleClick(currentValue, currentPriority);
        setCurrentValue('');
    }

    return (
        <div>
            <InputPriority handleChange={handlePriorityChange}/>
            <Description handleChange={handleValueChange} currentDescription={currentValue}/>
            <button onClick={handleClick}>ADD</button>
        </div>
    );
}

export default Input;
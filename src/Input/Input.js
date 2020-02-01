import React, {useState} from 'react';

import Description from './Properties/Description';
import InputPriority from './Properties/InputPriority';

const Input = (props) => {
    const [currentValue, setCurrentValue] = useState('');
    const [currentPriority, setCurrentPriority] = useState(false);
    const [currentColor, setCurrentColor] = useState('#ffffff')

    const handleValueChange = (e) => {
        setCurrentValue(e.target.value);
    }

    const handlePriorityChange = () => {
        setCurrentPriority(!currentPriority);
    }
    
    const handleColorChange = (e) => {
        setCurrentColor(e.target.value);
    }

    const handleClick = () => {
        props.handleClick(currentValue, currentPriority, currentColor);
        setCurrentValue('');
        setCurrentPriority(false);
        setCurrentColor('#ffffff');
    }

    const style = {
        backgroundColor: currentPriority ? 'red' : 'green',
        border: `2px solid ${currentPriority ? 'red' : 'green'}`
    }

    return (
        <div>
            <InputPriority handleChange={handlePriorityChange} style={style}/>
            <Description handleChange={handleValueChange} currentDescription={currentValue}/>
            <input type='color' value={currentColor} onChange={handleColorChange}/>
            <button onClick={handleClick}>ADD</button>
        </div>
    );
}

export default Input;
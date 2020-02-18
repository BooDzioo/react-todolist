import React, {useState, useEffect, useRef} from 'react';

import Description from './Properties/Description';
import InputPriority from './Properties/InputPriority';
import Timer from './Properties/Timer';

const Input = (props) => {

    const [currentValue, setCurrentValue] = useState('');
    const [currentPriority, setCurrentPriority] = useState(false);
    const [currentColor, setCurrentColor] = useState('#ffffff')

    const buttonRef = useRef(null);

    useEffect(() => {
        document.addEventListener('keydown', (e) => handleKeyDown(e));

        return document.removeEventListener('keydown', (e) => handleKeyDown(e));
    }, [])

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

    const handleKeyDown = (key) => {
        if (key.code == 'Enter') {
            buttonRef.current.click();
        }
    }

    const style = {
        backgroundColor: currentPriority ? 'red' : 'green',
        border: `2px solid ${currentPriority ? 'red' : 'green'}`
    }

    return (
        <div className='main-input-container'>
            <h1>TO DO APP</h1>
            <InputPriority handleChange={handlePriorityChange} style={style}/>
            <Description handleChange={handleValueChange} currentDescription={currentValue}/>
            <input type='color' value={currentColor} onChange={handleColorChange}/>
            <Timer />
            <button ref={buttonRef} onClick={handleClick}>ADD</button>
        </div>
    );
}

export default Input;
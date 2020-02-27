import React, {useState, useEffect, useRef} from 'react';

import Description from './Properties/Description';
import InputPriority from './Properties/InputPriority';

import styles from './input.module.css'

const Input = (props) => {

    const [currentValue, setCurrentValue] = useState('');
    const [currentPriority, setCurrentPriority] = useState(false);
    const [index, setIndex] = useState(null);

    const buttonRef = useRef(null);

    useEffect(() => {
        document.addEventListener('keydown', (e) => handleKeyDown(e));

        return document.removeEventListener('keydown', (e) => handleKeyDown(e));
    }, [])

    useEffect(() => {
        if(props.handleEdit !== null) {
            setCurrentValue(props.handleEdit.value);
            setCurrentPriority(props.handleEdit.priority);
            setIndex(props.handleEdit.index);
        }
    }, [props])

    const handleValueChange = (e) => {
        setCurrentValue(e.target.value);
    }

    const handlePriorityChange = () => {
        setCurrentPriority(!currentPriority);
    }

    const handleClick = () => {
        console.log(index)
        props.handleClick(currentValue, currentPriority, index);
        setCurrentValue('');
        setCurrentPriority(false);
        setIndex(null);
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
            <InputPriority handleChange={handlePriorityChange} style={style}/>
            <Description handleChange={handleValueChange} currentDescription={currentValue}/>
            <button ref={buttonRef} onClick={handleClick} className={`${styles.button}`}>ADD</button>
        </div>
    );
}

export default Input;
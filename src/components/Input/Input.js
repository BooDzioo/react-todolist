import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';

import * as actionTypes from '../../reducers/actions'

import Description from './Properties/Description';
import InputPriority from './Properties/InputPriority';

import styles from './input.module.css';

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
        if ( Object.keys(props.edit.item).lenght !== 0) {
            setCurrentValue(props.edit.item.value);
            setCurrentPriority(props.edit.item.priority);
            setIndex(props.edit.index);
        }
    }, [props.edit])

    const handleValueChange = (e) => {
        setCurrentValue(e.target.value);
    }

    const handlePriorityChange = () => {
        setCurrentPriority(!currentPriority);
    }

    const handleClick = () => {
        props.addItem(currentValue, currentPriority, index);
        setCurrentValue('');
        setCurrentPriority(false);
        setIndex(null);
    }

    const handleKeyDown = (key) => {
        if (key.code == 'Enter') {
            buttonRef.current.click();
        }
    }

    const style = currentPriority ? `${styles.priority__true}` : `${styles.priority}`;

    return (
        <div className='main-input-container'>
            <InputPriority handleChange={handlePriorityChange} module={style}/>
            <Description handleChange={handleValueChange} currentDescription={currentValue}/>
            <button ref={buttonRef} onClick={handleClick} className={`${styles.button}`}>ADD</button>
        </div>
    );
}
const stateToProps = state => {
    return {
        edit: state.editItem
    }
}

const actionsToProps = dispatch => {
    return {
        addItem:(value, priority, index = null) => dispatch({type: actionTypes.ADD_ITEM, value: value, priority: priority, index: index})
    }
}


export default connect(stateToProps, actionsToProps)(Input);
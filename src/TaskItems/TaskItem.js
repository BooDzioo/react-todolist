import React from 'react';

import Title from './Items/Title';
import Priority from './Items/Priority';
import Delete from './Items/Delete';

import style from '../index.css';

const TaskItem = (props) => {

    const style = {
        backgroundColor: props.color
    }

    return (
        <div className={style.taskItem} style={style}>
            <Priority handlePriorityChange={props.handlePriority}/>
            <Title title={props.title}/>
            <Delete handleDeleteClick={props.handleDeleteClick}/>
        </div>
    );
}

export default TaskItem;
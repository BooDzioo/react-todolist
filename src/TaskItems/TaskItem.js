import React from 'react';

import Title from './Items/Title';
import Priority from './Items/Priority';
import Delete from './Items/Delete';
import Edit from './Items/Edit';

import styles from './taskItem.module.css';



const TaskItem = (props) => {
    return (
        <div className={`${styles.container}`}>
            <Priority handlePriorityChange={props.handlePriority}
                priority={props.priority}/>
            <Title title={props.title}/>
            <Delete handleDeleteClick={props.handleDeleteClick}/>
            <Edit handleClick={props.handleEditClick}
                edit={props.edit}/>
        </div>
    );
}

export default TaskItem;
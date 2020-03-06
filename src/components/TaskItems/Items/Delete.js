import React from 'react';

import styles from '../taskItem.module.css';

const Delete = (props) => {
    return <button onClick={props.handleDeleteClick} className={`${styles.delete}`}>-</button>
}

export default Delete;
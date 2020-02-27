import React from 'react';

import styles from '../taskItem.module.css';

const Edit = (props) => {
    return (
        <button onClick={props.handleClick} className={`${styles.edit}`}>Edit</button>
    );
}

export default Edit;
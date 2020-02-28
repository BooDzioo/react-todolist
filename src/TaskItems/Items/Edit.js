import React from 'react';

import styles from '../taskItem.module.css';

const Edit = (props) => {

    let style = `${styles.edit}`;
    if (props.edit !== '') {
        style = `${styles.edit__true}`;
    }
    return (
        <button onClick={props.handleClick} className={style}>Edit</button>
    );
}

export default Edit;
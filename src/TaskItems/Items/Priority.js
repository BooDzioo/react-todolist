import React from 'react';

import styles from '../taskItem.module.css';

const Priority = (props) => {

    let style = `${styles.priority}`;
    if (props.priority == true) {
        style = `${styles.priority__true}`;
    } 
    return <button onClick={props.handlePriorityChange} className={style}>{`\u2605`}</button>
}

export default Priority;
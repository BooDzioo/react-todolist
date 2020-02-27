import React from 'react';

import styles from '../taskItem.module.css';


const Title = (props) => {
    return <p className={`${styles.title}`}>{props.title}</p>
}

export default Title;
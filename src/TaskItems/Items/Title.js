import React from 'react';

const Title = (props) => {
    let style = {
        textDecoration: "line-through"
    }
    // let style = null;
    // const changeStyle = () => {
    //     style = {
    //         textDecoration: "line-through"
    //     }
    //     console.log('siema')
    // }
    return <p className='title'  style={style}>{props.title}</p>
}

export default Title;
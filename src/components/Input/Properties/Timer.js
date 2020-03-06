import React from 'react';

const Timer = (props) => {

    const onChange = (e) => {
        console.log(`input: ${e.target.value}`);
        const a = new Date();
        console.log(`${a.getFullYear()}`)
    }
    
    return (
        <>
            <input type='datetime-local' onChange={onChange}/>
        </>
    );
}

export default Timer;
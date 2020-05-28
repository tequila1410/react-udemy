import React from 'react';

const validation = (props) => {

    const validateLength = (length) => {
        return length > 5 ? 'Text long enought' : 'Text too short'
    }

    return <p>{validateLength(props.textLength)}</p>
}

export default validation
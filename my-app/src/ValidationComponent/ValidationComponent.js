import React from 'react';

const validation = (props) => {
        if(props.length == 5) {
            return 'Text is long enough'
        } else if (props.length < 5) {
            return 'Text is too short'
        } else {
            return 'Text too long'
        }
    
};

export default validation;

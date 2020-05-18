import React from 'react';


const userInput = ( props ) => {
    return (
        <input onChange={ props.change } value={ props.value } type="text"/>
    );
}

export default userInput;
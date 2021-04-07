import React from 'react'; 

export const InputComponent = ({inputLabel, inputType}) => {
    return(
        <div>
            <label>{inputLabel}</label>
            <input type={inputType}/>
        </div>
        
    )
}


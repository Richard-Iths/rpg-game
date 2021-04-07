import React from 'react'; 

export const HomeLoginInput = ({inputLabel, inputType}) => {
    return(
        <div>
            <label>{inputLabel}</label>
            <input type={inputType}/>
        </div>
        
    )
}


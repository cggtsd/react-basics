import React from 'react'

export const ChildComponent = ({greetHandler}) => {
    return (
        <div>
           <button onClick={()=>greetHandler('CGG')}>Greet Parent</button> 
        </div>
    )
}

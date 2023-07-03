import React from 'react'

 const MemoComp = ({name}) => {
    console.log('Rendering Memo Component')
    return (
        <div>
           {name} 
        </div>
    )
}

export default React.memo(MemoComp)

//Something called HigherOrder component React.memo()
//accepts a component and return a new enhanced component 
//In this case a component capable of avoiding rerenders when
//there is no change in props
//similar to PureComponents it works with functional components 
//instead
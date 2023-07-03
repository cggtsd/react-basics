import React, { Component } from 'react'
import { FRInput } from './FRInput'

class FRParentinput extends Component {
    constructor(props) {
        super(props)
        //1.
        this.inputRef=React.createRef()
        
    }
    
    clickHandler=()=>{
        //ref points to native input element
        //not to FRInput instance
        this.inputRef.current.focus()
    }
    render() {
        return (
            <div>
                {/* 2 */}
                <FRInput ref={this.inputRef}/>
                {/* 4 */}
                <button onClick={this.clickHandler}>Focus Input</button>
            </div>
        )
    }
}

export default FRParentinput

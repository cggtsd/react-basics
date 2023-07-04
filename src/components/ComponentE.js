import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './userContext'

 class ComponentE extends Component {
    static contextType=UserContext
    render() {
        return (
            <div>
                {/* in the render() method context value is 
                avaialable as this.context */}
                Component E Context : {this.context}
               <ComponentF/>
            </div>
        )
    }
}

export default ComponentE

//assign userContext to the context type property on the class
//ComponentE.contextType=UserContext

//works only with class component
//you can subscribe only to a single context using context type
//many a times in your application you need to read more than
//one context in which scenario the comsumer component is the way to go
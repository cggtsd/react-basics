import React from 'react'
//1.creating context
const UserContext = React.createContext('Center for Good Governance')

const UserProvider=UserContext.Provider
const UserConsumer = UserContext.Consumer

export {UserProvider,UserConsumer}

export default UserContext
import React,{useState} from 'react'

const Context = React.createContext({})

export const UserProvider =({children})=>{

    const [state,setState] = useState(null)

    return (
        <Context.Provider value={{state,setState}}>
            {children}
        </Context.Provider>
    )
}

export default Context

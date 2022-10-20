import React,{useState} from 'react'

const Context = React.createContext({})

export const UserProvider =({children})=>{

    const [state,setState] = useState(null)

    const intial  = {
        car:[
            {
                "identification": "484884",
                "numero_name": "278562949614",
                "saldo": "49494944",
                "titular": "carlos",
              },
        ]
      }

    const [save,setSave] =useState(intial)

    const [rol,setRol] =useState(null)

    const [selectedLanguage, setSelectedLanguage] = useState();


    return (
        <Context.Provider value={{state,setState,save,setSave,rol,setRol,selectedLanguage, setSelectedLanguage}}>
            {children}
        </Context.Provider>
    )
}

export default Context

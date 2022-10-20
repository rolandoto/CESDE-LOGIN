import {useContext,useState} from 'react'
import  UserProvider  from '../Context/Context'

const UseUsers =() =>{

    const {state,setState,save,setSave,rol,setRol,selectedLanguage, setSelectedLanguage} = useContext(UserProvider)
    const [loading,setLoading] = useState(false)


    const handSubmit =(values) =>{
        setLoading(true)
        if(values.username =='vargas' && selectedLanguage==1 ){
            setRol(1)
            setTimeout(() =>{
                 setState('hola')
                setLoading(false)
            },4000)
           
        }else if(values.username && selectedLanguage==2){
            setRol(values.username)
            setTimeout(() =>{
                setState('hola')
               setLoading(false)
           },4000)
        }else {
            alert('no registrado')
            setLoading(false)
        }
    }
    
    return {state,
        handSubmit,
        loading,
        save,
        setSave,
        rol,
        selectedLanguage, 
        setSelectedLanguage
    }
}
export default UseUsers
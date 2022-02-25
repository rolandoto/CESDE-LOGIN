import {useContext,useState} from 'react'
import  UserProvider  from '../Context/Context'

const UseUsers =() =>{

    const {state,setState} = useContext(UserProvider)
    const [loading,setLoading] = useState(false)

    const handSubmit =(values) =>{
        setLoading(true)
        if(values.username =='rolando'){
            setTimeout(() =>{
                 setState('hola')
                setLoading(false)
            },4000)
           
        }else {
            alert('incorret')
            setLoading(false)
        }
    }

    return {state,
        handSubmit,
        loading
    }
}
export default UseUsers
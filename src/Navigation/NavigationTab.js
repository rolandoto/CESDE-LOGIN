import React,{useEffect} from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Panel from '../Screens/Panel'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Account from '../Screens/Account'
import Movimiento from '../Screens/Movimiento'

const Tab = createBottomTabNavigator()


const NavigationTitle =(props) =>{

    const {navigation} = props

    const logo ='https://github.com/rolandoto/gifs-complete/blob/mora/src/Imagenes/Img_Elda/img_logo%20Grande.png?raw=true'
    
    useEffect(() =>{
        navigation.setOptions({
            headerRigth:() =>  <Image style={{width:100,height:100}} source={{uri:logo}} />
        })
    },[])

    return(
        <Tab.Navigator initialRouteName='account' >
            <Tab.Screen name='panel' component={Account}
            options={{
                  tabBarLabel:"Iniciar sesion",
                  tabBarIcon:({color,size}) =><Icon name="user" color={color} size={size}  /> 
            }} 
             />  
            <Tab.Screen name='account' component={Account} 
            options={{
                tabBarLabel:"Cuentas",
                tabBarIcon:({color,size}) =><Icon name="user" color={color} size={size}  /> 
            }} 
             />  
            <Tab.Screen name="Movimiento" component={Movimiento} 
            options={{
                  tabBarLabel:"Movimiento",
                  tabBarIcon:({color,size}) =><Icon name="user" color={color} size={size}  /> 
            }} 
            />  
        </Tab.Navigator>
    )
} 

export default NavigationTitle
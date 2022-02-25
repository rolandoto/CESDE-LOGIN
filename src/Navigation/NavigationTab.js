import React,{useEffect} from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Panel from '../Screens/Panel'
import Icon from 'react-native-vector-icons/FontAwesome5'

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
        <Tab.Navigator initialRouteName='panel'>
            <Tab.Screen name='panel' component={Panel} 
            options={{
                  tabBarLabel:"INICIO",
                 tabBarIcon:({color,size}) => <Icon name='heart'  color={color} size={size}  />
            }} />  
            <Tab.Screen name='ro' component={Panel} 
            options={{
                  tabBarLabel:"SUPPORT",
                 tabBarIcon:({color,size}) => <Icon name='heart'  color={color} size={size}  />
            }} />  
            <Tab.Screen name='re' component={Panel} 
            options={{
                  tabBarLabel:"PERFIL",
                 tabBarIcon:({color,size}) => <Icon name='user'  color={color} size={size}  />
            }} />  
        </Tab.Navigator>
    )
} 

export default NavigationTitle
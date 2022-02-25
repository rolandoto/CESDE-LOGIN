import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import LoginForm from '../Screens/Login'
import UseUsers from '../hooks/UseUsers';
import Register from '../Screens/Register';
import Panel from '../Screens/Panel';
import Qualify from '../Screens/Qualify';
import Gestos from '../Screens/Gestos';
import Person from '../Screens/Person';
import Analitica from '../Screens/Analitica';
import Home from '../Screens/Home';
import PreRegister from '../Screens/PreRegister';
import ProductInfo from '../Screens/Prueba';
import Slash from '../Screens/Slash';
import NavigationTitle from './NavigationTab';

const NavigationHome =() =>{

    const Stack = createStackNavigator()
    
    const {state} = UseUsers()
    
    return (
        <NavigationContainer>
        {state ? 
            <Stack.Navigator initialRouteName='nav' >
               
                <Stack.Screen  
                            name='nav' 
                            component={NavigationTitle}
                            options={{title:"",headerTransparent:true  }} />  
                <Stack.Screen  
                            name='Qualify' 
                            component={Qualify}
                            options={{title:"",headerTransparent:true  }} /> 
                <Stack.Screen  
                            name='Gestos' 
                            component={Gestos}
                            options={{title:"",headerTransparent:true  }} />
                 <Stack.Screen  
                            name='Person' 
                            component={Person}
                            options={{title:"",headerTransparent:true  }} />  
                <Stack.Screen  
                            name='Analitica' 
                            component={Analitica}
                            options={{title:"",headerTransparent:true  }} />       
         </Stack.Navigator>
        :
         <Stack.Navigator initialRouteName='Login' >
                <Stack.Screen   name='Login' 
                                component={LoginForm}
                                options={{title:"",headerTransparent:true  }} />    
                <Stack.Screen   name='Register' 
                                component={Register}
                                options={{title:"",headerTransparent:true  }} />  
                <Stack.Screen   name='Home' 
                                component={Home}
                                options={{title:"",headerTransparent:true  }} /> 
                <Stack.Screen   name='PreRegister' 
                                component={PreRegister}
                                options={{title:"",headerTransparent:true  }} />  
                <Stack.Screen   name='prueba' 
                                component={ProductInfo}
                                options={{title:"",headerTransparent:true  }} /> 
                <Stack.Screen   name='Slash' 
                                component={Slash}
                                options={{title:"",headerTransparent:true  }} />    
         </Stack.Navigator>
        }
    </NavigationContainer>
    )

}
export default NavigationHome
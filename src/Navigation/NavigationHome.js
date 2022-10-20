import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import LoginForm from '../Screens/Login'
import NavigationTitle from './NavigationTab';
import UseUsers from '../hooks/UseUsers';

const NavigationHome =() =>{

    const Stack = createStackNavigator()

    const  {state} = UseUsers()
    
    return (
        <NavigationContainer>
        {state ? 
            <Stack.Navigator initialRouteName='nav' >
               
            <Stack.Screen  
                        name='nav' 
                        component={NavigationTitle}
                        options={{title:"",headerTransparent:true  }} /> 
             
            </Stack.Navigator>
        :
         <Stack.Navigator initialRouteName='Login' >
                <Stack.Screen   name='Login' 
                                component={LoginForm}
                                options={{title:"",headerTransparent:true  }} />      
         </Stack.Navigator>
        }
    </NavigationContainer>
    )
}
export default NavigationHome
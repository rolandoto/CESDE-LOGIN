import React,{useEffect} from 'react'
import {Text,View,StyleSheet,SafeAreaView, Image,TouchableOpacity }  from 'react-native'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import FormRegister from '../Component/FormRegister'

const Register =(props) =>{

    const {navigation} = props
    
    useEffect(() =>{
        navigation.setOptions({
            headerRight:() =>  <Image style={styles.icon} source={{uri:logo}} />
        })
    },[])
    
    const logo ='https://github.com/rolandoto/gifs-complete/blob/mora/src/Imagenes/Img_Elda/img_logo%20Grande.png?raw=true'
    
    return (
                  <FormRegister/>
      )      
    }

export default Register

const styles = StyleSheet.create({
    icon :{
        width:90,
        height:90,
        marginRight:40,
        marginTop:100
    },
    title:{
        marginTop:50,
        marginBottom:15,
        color:"gray",
         marginLeft:40,
        marginRight:50,  
    },
    
  container:{
        marginTop:300
  },
   buttonOne: {
         width: '90%',
          height: '90%',
          color: "blue",
          borderRadius: 12,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor:"#ed7f3d"
    },
    header:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
    }
})  
import React,{useEffect} from 'react'
import {StyleSheet,View,Text,SafeAreaView,Image} from 'react-native'
import FomrLogin from '../Component/FormLogin'

const LoginForm =(props) =>{

    const {navigation}  = props
   
    
    
    return (
        <SafeAreaView> 
            <View  style={styles.container}  >
                <FomrLogin /> 
            </View>
    </SafeAreaView>
    )
}

export default LoginForm

const styles = StyleSheet.create({
     icon :{
        width:90,
        height:90,
        marginLeft:40,
        marginTop:100
    },
    title:{
        textAlign:"center",
        marginTop:50,
        marginBottom:15,
        color:"gray",
        marginRight:180
    },
    input:{
        height:40,
        margin:12,
        borderWidth:1,
        borderRadius:10,
        padding:10
    },
        button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 5,
        borderRadius:10,
        elevation: 1,
        backgroundColor: 'black',
        margin:12
  },
  text: {
    fontSize: 16,
    lineHeight: 19,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  container:{
    height:"100%",
    paddingTop:'10%',
    display:"flex",
    flexDirection:"column",
    justifyContent:"center"
  },
   
})
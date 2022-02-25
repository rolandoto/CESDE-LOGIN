import React,{useEffect} from "react";
import {View, Text,StyleSheet, TouchableOpacity,Image} from 'react-native'
import {useNavigation} from '@react-navigation/native'

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const  Panel =() =>{

    const navigation = useNavigation()

    
    const handPersonalist =() =>{
        navigation.navigate('Qualify')
    }

     const handAnalitica =() =>{
        navigation.navigate('Analitica')
    }

    const logo ='https://github.com/rolandoto/gifs-complete/blob/mora/src/Imagenes/Img_Elda/img_logo%20Grande.png?raw=true'
    
    useEffect(() =>{
        navigation.setOptions({
            headerRigth:() =>  <Image style={styles.icon} source={{uri:logo}} />
        })
    },[])

    return (
        <View style={styles.container} >
            <View style={styles.containerButton}>
                <TouchableOpacity style={styles.button}  onPress={handPersonalist}  >
                        <Text style={{color:"white",fontWeight:"800"}} >Personalizar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button2}   onPress={handAnalitica}  >
                        <Text style={{color:"white",fontWeight:"800"}} >Analitica</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button2}   onPress={handAnalitica}  >
                        <Text style={{color:"white",fontWeight:"800"}} >Analitica</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default  Panel

const styles =  StyleSheet.create({
    icon :{
        width:90,
        height:90,
        marginLeft:40,
        marginTop:100
    },
    title:{
       textAlign:"center",
       fontSize:30
    },

    containerButton:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },
    button: {
          alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 25,
        paddingHorizontal: 6,
        borderRadius:10,
        elevation: 1,
        backgroundColor: '#ed7f3d',
        margin:12,
        width:"60%",
    },
    button2: {
          alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 25,
        paddingHorizontal: 5,
        borderRadius:10,
        elevation: 1,
        backgroundColor: '#ed7f3d',
        margin:12,
        width:"60%",
    },
    container:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        height:"100%"
    }
})

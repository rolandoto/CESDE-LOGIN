import React from 'react'
import {Text,StyleSheet, View,TouchableOpacity} from 'react-native'

const Qualify = (props) =>{
    const {navigation} =props

    const handGesto =() =>{
        navigation.navigate('Gestos')
    } 

    const handSubmitNextPerson =() =>{
        navigation.navigate('Person')
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.ButtonOne} onPress={handGesto} >
                <Text style={styles.title}>Gestos</Text>
            </TouchableOpacity>
             <TouchableOpacity style={styles.ButtonTwo} onPress={handSubmitNextPerson} >
                <Text style={styles.title}>Personas</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.ButtonThree}>
                <Text style={styles.title}>Estrellas</Text>
            </TouchableOpacity>
        </View>
    )
}

export default  Qualify

const styles = StyleSheet.create({

    title:{
        textAlign:"center",
        color:"white",
        fontSize:15,fontWeight:"600"
    },  
    container:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        height:"100%"
    }, 
    ButtonOne:{
        backgroundColor:"#0070f3",
        paddingVertical:12,
        paddingHorizontal:5,
        justifyContent:"center",
        textAlign:"center",
        alignItems:"center",
        margin:12,
        borderRadius:10,
        elevation:1
    },
    ButtonTwo:{
        backgroundColor:"black",
        paddingVertical:12,
        paddingHorizontal:5,
        justifyContent:"center",
        textAlign:"center",
        alignItems:"center",
        margin:12,
        borderRadius:10,
        elevation:1
    },
     ButtonThree:{
        backgroundColor:"#0070f3",
        paddingVertical:12,
        paddingHorizontal:5,
        justifyContent:"center",
        textAlign:"center",
        alignItems:"center",
        margin:12,
        borderRadius:10,
        elevation:1
    }
})

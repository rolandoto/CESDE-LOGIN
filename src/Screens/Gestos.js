import React from 'react'
import {View, Text,StyleSheet} from 'react-native'
import ListGestos from '../Component/ListGesto';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import ListStrellas from '../Component/ListStrellas';
import FormGestos from '../Component/FormGestos';

const Gestos =() =>{

    return (
            <KeyboardAwareScrollView style={{marginTop:40}}>
                    <View>
                      <Text style={styles.title} >HAS TU PREGUNTA</Text>
                        <FormGestos />
                    </View>
                       <ListGestos />
                       <ListStrellas />
            </KeyboardAwareScrollView>
    )
}

export default Gestos 

const styles = StyleSheet.create({
    container:{
        display:"flex",
        justifyContent:"space-evenly",
        flexDirection:"row",
        height:"100%",
        padding:20
    },
    title:{
        fontWeight:"700", 
        textAlign:"center",
        fontSize:20,
        color:"black"
    }
})
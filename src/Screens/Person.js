import React from 'react'
import {Text} from 'react-native'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import FormPerson from '../Component/FormPerson';
import ImageCamera from '../Component/ImageCamera';

const Person =() =>{

    return(
        <KeyboardAwareScrollView style={{marginTop:40}}>
             <Text style={{fontWeight:"700", textAlign:"center",fontSize:20,color:"black"}} >HAS TU PREGUNTA</Text>
                <FormPerson />  
                <ImageCamera />
        </KeyboardAwareScrollView>
    )
}

export default Person


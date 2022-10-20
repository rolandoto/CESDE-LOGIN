import React, { useState } from 'react'
import {TextInput,View,ActivityIndicator,TouchableOpacity,Text,StyleSheet,ScrollView} from 'react-native'
import {Formik} from 'formik'
import UseUsers from '../hooks/UseUsers'
import UseValidation from '../hooks/UseValidation'
import Icon from 'react-native-vector-icons/AntDesign'
import {Picker} from '@react-native-picker/picker';
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view"

const FomrLogin =() =>{

    const {loading,handSubmit,selectedLanguage, setSelectedLanguage} = UseUsers() 
    const {LoginSchema} = UseValidation()
    
    return (
       <KeyboardAwareScrollView style={{paddingVertical: "20%"}} >
        <Formik 
                initialValues={{username:"",
                                password:""}}
                        validationSchema={LoginSchema}
                        onSubmit={(e) =>handSubmit(e)}>
                            {({handleChange,handleSubmit,values,handleBlur,setFieldValue,errors}) =>(
                                <View  style={{
                                        width: '100%',
                                        height: '100%',
                                        position: 'relative',
                                        flexDirection:"column",
                                        justifyContent:"center",}} >

                                 <Text style={{marginLeft:55,color:"gray",margin:15}}>INICIAR SESION</Text>   
                                 <TextInput 
                                placeholder='CELULAR' 
                                style={styles.input}
                                autoCapitalize='none'
                                value={values.username}
                                onBlur={handleBlur('username')}
                                onChangeText={handleChange('username')}  
                        />
                        {errors.username && <Text style={{textAlign:"center",color:"red" }} >Usuario no Registrado</Text>}
                        
                        <Picker
                            style={{paddingHorizontal:50}}
                            selectedValue={selectedLanguage}
                            onValueChange={(itemValue, itemIndex) =>
                                setSelectedLanguage(itemValue)
                            }>
                                <Picker.Item label="Rol" value="" />
                            <Picker.Item label="Administractivo" value="1" />
                            <Picker.Item label="Usuario" value="2" />
                            </Picker>

                        <TextInput  
                                    placeholder='CONTRASEÑA'
                                    secureTextEntry={true}
                                    style={styles.input}
                                    autoCapitalize='none'
                                    value={values.password}
                                    onBlur={handleBlur('password')}
                                    onChangeText={handleChange('password')}
                                    />
                        {errors.password && <Text style={{textAlign:"center",color:"red" }} >Contraseña Invalida</Text>}
                        {!loading ? (
                            <View style={{alignContent:"center",alignItems:"center",marginTop:30}}>
                            <TouchableOpacity style={styles.button} onPress={handleSubmit}  >
                                <Text style={{color:"white",fontWeight:"600"}}>ENTRAR</Text>
                            </TouchableOpacity> 
                            </View>  
                            
                            ): <ActivityIndicator color='black' size={60}/>}
                            </View>   
                            )}
                </Formik>
           </KeyboardAwareScrollView>
    )
}
export default FomrLogin


const styles =  StyleSheet.create({
     input:{
        height:40,
        margin:3,
        borderWidth:1,
        padding:5,
        marginLeft:50,
        marginRight:50,
        color:"black"
    },
        button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
        paddingHorizontal: 5,
        elevation: 1,
        backgroundColor: 'black',
        margin:12,
        width:"75%",
         
  },
   clearOne: {
    left: Platform.OS=='android'?320:285,
    top:55,
    position:"absolute",
    zIndex:1,
    fontSize:20,
    padding:10,
    color:"orange"
    },
    clearTwo: {
    left: Platform.OS=='android'?320:285,
    top:110,
    position:"absolute",
    zIndex:1,
    fontSize:20,
    padding:10,
    color:"orange"
    },
    select:{
        margin:200
    }
})
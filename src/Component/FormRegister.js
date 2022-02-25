import React, { useState } from 'react'
import {TextInput,StyleSheet,View,ActivityIndicator,TouchableOpacity,Text,ScrollView} from 'react-native'
import {Formik} from 'formik'
import UseValidation from '../hooks/UseValidation'
import Icon from 'react-native-vector-icons/AntDesign'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import  {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
const FormRegister =(props) =>{

    const [checkboxState, setCheckboxState] = React.useState(false);
    const {navigation} = props
    const {RegisterSchema} = UseValidation()
    const [loading,setLoading] = useState(false)

    const handRegister =(vt) =>{
        setLoading(true)
       if(vt.username =='rolando'){
        setTimeout(() =>{
            setLoading(false)
            navigation.navigate('Login')
        },4000)
       } else{
           setLoading(false)
       }
    }


    return (
    
         <Formik    
                    initialValues={{username:'',
                                    password:'',
                                    email:'', 
                                    numbers:'',
                                    country:''}}
                    validationSchema={RegisterSchema}
                    onSubmit={(e) =>handRegister(e)}>
                    {({handleChange,handleSubmit,values,handleBlur,setFieldValue})  => (
                      
                      <View  style={{
                                        width: '100%',
                                        height: '100%',
                                        position: 'relative',
                                        flexDirection:"column",
                                        justifyContent:"center",}} >
                                              <KeyboardAwareScrollView style={{paddingVertical: "50%"}} >
                        {values.username.length>0 && (<Icon style={styles.clearOne} onPress={() =>setFieldValue('username','')} name='closecircle' />)}
                        {values.password.length>0 && (<Icon style={styles.clearTwo} onPress={() =>setFieldValue('password','')} name='closecircle' />)}
                        {values.email.length>0 && (<Icon style={styles.clearThree} onPress={() =>setFieldValue('email','')} name='closecircle' />)}
                        {values.numbers.length>0 && (<Icon style={styles.clearFour} onPress={() =>setFieldValue('numbers','')} name='closecircle' />)}
                        {values.country.length>0 && (<Icon style={styles.clearFive} onPress={() =>setFieldValue('country','')} name='closecircle' />)}
                          
                            <Text style={{marginLeft:55,color:"gray",margin:15}}>REGISTRATE Y PERSONALIZA Y MIDE</Text>
                           
                            <TextInput
                                style={styles.input}
                                placeholder='CORREO ELECTRONICO' 
                                autoCapitalize='none'
                                value={values.username}
                                onBlur={handleBlur('username')}
                                onChangeText={handleChange('username')}
                                />
                            <TextInput
                                style={styles.input}
                                placeholder='NUMERO CELULAR'
                                autoCapitalize='none'
                                value={values.password}
                                onBlur={handleBlur('password')}
                                onChangeText={handleChange('password')}
                                />
                            <TextInput 
                                style={styles.input}
                                placeholder='CONTRASEÑA'
                                autoCapitalize='none'
                                value={values.email}
                                onBlur={handleBlur('email')}
                                onChangeText={handleChange('email')} />

                            <TextInput 
                                style={styles.input}
                                placeholder='CELULAR'
                                autoCapitalize='none'
                                value={values.numbers}
                                onBlur={handleBlur('numbers')}
                                onChangeText={handleChange('numbers')} />
                            </KeyboardAwareScrollView>
                        <View style={styles.containercheckbox} >
                            
                            <View  style={styles.checkbox} > 
                              <BouncyCheckbox
                              style={{width:30}}
                              bounceFriction={2}
                             iconStyle={{borderRadius: 7, borderWidth:5}}
                              isChecked={checkboxState}
                                size={30}
                                fillColor="orange"
                                unfillColor="#FFFFFF"
                                text="" 
                                 onPress={() => setCheckboxState(!checkboxState)}
                                />
                                <Text style={{color:"gray",fontSize:10,textAlign:"center",width:259,alignItems:"center"}} >ESTOY DE ACUERDO CON LOS TERMINOS Y CON LA POLITICA DE PRIVACIDAD DE DARTOS DEL ELDA </Text>
                            </View>  
                        </View>                        
                            {loading ? <ActivityIndicator size={60}/>:
                                <View style={{ position: 'absolute',
                                bottom: 20,
                                height: '10%',
                                width: '100%',
                                justifyContent: 'center',
                                alignItems: 'center'}}>
                                    <TouchableOpacity style={styles.button} onPress={handleSubmit}  >
                                        <Text style={{color:"white",fontWeight:"600"}} >REGISTRATE</Text>
                                    </TouchableOpacity>
                                </View>
                             }
                        </View>
                    )} 
                    </Formik>
         
    )
}
export default FormRegister

const styles = StyleSheet.create({
    input:{
        height:50,
        margin:3,
        borderWidth:1,
        borderRadius:10,
        padding:10,
        marginLeft:50,
        marginRight:50,
        color:"black",
        borderColor:"orange"
    },
        checkbox: {
        alignSelf: "center",
    },
        button: {
            width: '75%',
          height: '80%',
          color: "blue",
          borderRadius: 12,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor:"#ed7f3d"
  },
  text: {
    fontSize: 16,
    lineHeight: 19,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  containercheckbox:{
        position: 'absolute',
        bottom: 90,
        height: '10%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        
  },
  checkbox:{
    flexDirection: "row",
    marginBottom: 10,
    alignItems:"center"
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
    top:109,
    position:"absolute",
    zIndex:1,
    fontSize:20,
    padding:10,
    color:"orange"
},
 clearThree: {
    left: Platform.OS=='android'?320:285,
    top:165,
    position:"absolute",
    zIndex:1,
    fontSize:20,
    padding:10,
    color:"orange"
},
 clearFour: {
    left: Platform.OS=='android'?320:285,
    top:224,
    position:"absolute",
    zIndex:1,
    fontSize:20,
    padding:10,
    color:"orange"
},
 clearFive: {
    left: Platform.OS=='android'?360:320,
    top:270,
    position:"absolute",
    zIndex:1,
    fontSize:20,
    padding:10,
    color:"#6663ba"
}
})
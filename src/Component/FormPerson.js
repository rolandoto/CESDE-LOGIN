import React from 'react'
import {TextInput,View,StyleSheet} from 'react-native'
import {Formik} from 'formik'
import UseValidation from '../hooks/UseValidation'
import Icon from 'react-native-vector-icons/AntDesign'

const FormPerson =() =>{

    const {PersonSchema} = UseValidation()
    
    return(
            <Formik 
                      initialValues={{
                                PersonOne:"",
                                PersonTwo:"",
                                PersonThree:"",
                                PersonFour:"",
                                PersonFive:"",
                      }}
                      validationSchema={PersonSchema}  >
                      {({handleChange,values,setFieldValue})  =>(
                        <View>
                      {values.PersonOne.length>0 && (<Icon style={styles.clearOne} onPress={() =>setFieldValue('PersonOne','')} name='closecircle' />)}
                      {values.PersonTwo.length>0 && (<Icon style={styles.clearTwo} onPress={() =>setFieldValue('PersonTwo','')} name='closecircle' />)}
                      {values.PersonThree.length>0 && (<Icon style={styles.clearThree} onPress={() =>setFieldValue('PersonThree','')} name='closecircle' />)}
                      {values.PersonFour.length>0 && (<Icon style={styles.clearFour} onPress={() =>setFieldValue('PersonFour','')} name='closecircle' />)}
                      {values.PersonFive.length>0 && (<Icon style={styles.clearFive} onPress={() =>setFieldValue('PersonFive','')} name='closecircle' />)}
                     <TextInput  
                            placeholder='preguntas 1'
                            style={styles.input} 
                            value={values.PersonOne}
                            onChangeText={handleChange('PersonOne')}
                                    />
                    <TextInput  
                            placeholder='preguntas 2'
                            style={styles.input} 
                            value={values.PersonTwo}
                            onChangeText={handleChange('PersonTwo')}
                                    />
                    <TextInput  
                            placeholder='preginta 3'
                            style={styles.input} 
                            value={values.PersonThree}
                            onChangeText={handleChange('PersonThree')}
                                    />
                    <TextInput  
                            placeholder='pregunta 4'
                            style={styles.input} 
                            value={values.PersonFour}
                            onChangeText={handleChange('PersonFour')}
                                    />
                    <TextInput  
                            placeholder='pregunta 5'
                            style={styles.input}
                            value={values.PersonFive}
                            onChangeText={handleChange('PersonFive')}
                                     />   
                      </View>  
                      )}
                </Formik>
         )
}
export default FormPerson

const styles = StyleSheet.create({
    container:{
        display:"flex",
        justifyContent:"space-evenly",
        flexDirection:"row",
        height:"100%",
        padding:20
    },
    cardContainer:{   
    },
     input:{
        height:40,
        margin:8,
        borderWidth:1,
        borderRadius:10,
        padding:10
     },
      clearOne: {
    left: Platform.OS=='android'?360:320,
    top:7,
    position:"absolute",
    zIndex:1,
    fontSize:20,
    padding:10
    },
    clearTwo: {
    left: Platform.OS=='android'?360:320,
    top:62,
    position:"absolute",
    zIndex:1,
    fontSize:20,
    padding:10
    },
    clearThree: {
    left: Platform.OS=='android'?360:320,
    top:120,
    position:"absolute",
    zIndex:1,
    fontSize:20,
    padding:10
    },
    clearFour: {
    left: Platform.OS=='android'?360:320,
    top:174,
    position:"absolute",
    zIndex:1,
    fontSize:20,
    padding:10
    },
    clearFive: {
    left: Platform.OS=='android'?360:320,
    top:230,
    position:"absolute",
    zIndex:1,
    fontSize:20,
    padding:10
    },
     
})



import React from 'react'
import {View,Button,TextInput,StyleSheet} from 'react-native'
import {Formik} from 'formik'
import Icon from 'react-native-vector-icons/AntDesign'
import UseValidation from '../hooks/UseValidation'

const FormGestos =()=>{

    const {handQuestion} = UseValidation()
    
    return (
        <Formik 
                 initialValues={{
                            questionOne:'',
                            questionTwo:'',
                            questionThree:'',
                            questionFour:'',
                            questionFive:''
                        }}
                        validationSchema={handQuestion}
                        onSubmit={(e) => console.log(e)}
                        >
                {({handleSubmit,values,handleChange,setFieldValue})  => (
                        <View>
                            {values.questionOne.length>0 && (<Icon style={styles.clearOne} onPress={() =>setFieldValue('questionOne','')} name='closecircle' />)}
                            {values.questionTwo.length>0 && (<Icon style={styles.clearTwo} onPress={() =>setFieldValue('questionTwo','')} name='closecircle' />)}
                            {values.questionThree.length>0 && (<Icon style={styles.clearThree} onPress={() =>setFieldValue('questionThree','')} name='closecircle' />)}
                            {values.questionFour.length>0 && (<Icon style={styles.clearFour} onPress={() =>setFieldValue('questionFour','')} name='closecircle' />)}
                            {values.questionFive.length>0 && (<Icon style={styles.clearFive} onPress={() =>setFieldValue('questionFive','')} name='closecircle' />)}
                    <TextInput  
                            autoCapitalize='none'
                            placeholder='preguntas 1'
                            style={styles.input}
                            value={values.questionOne}
                            onChangeText={handleChange('questionOne')}
                                    />
                    <TextInput  
                           autoCapitalize='none'
                           placeholder='preguntas 2'
                           style={styles.input} 
                           value={values.questionTwo}
                           onChangeText={handleChange('questionTwo')}
                                    />
                    <TextInput  
                            autoCapitalize='none'
                            placeholder='preginta 3'
                            style={styles.input} 
                            value={values.questionThree}
                            onChangeText={handleChange('questionThree')}
                                    />
                    <TextInput  
                            autoCapitalize='none'
                            placeholder='pregunta 4'
                            style={styles.input} 
                            value={values.questionFour}
                            onChangeText={handleChange('questionFour')}
                                    />
                    <TextInput 
                            autoCapitalize='none'
                            placeholder='pregunta 5'
                            style={styles.input}
                            value={values.questionFive}
                            onChangeText={handleChange('questionFive')} />
                        <Button title='Guardar' onPress={handleSubmit}  />
                        </View>
                        )}
                </Formik>
    )

}

export default FormGestos

const styles = StyleSheet.create({
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
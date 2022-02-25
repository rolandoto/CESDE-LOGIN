import React from 'react'
import {TextInput,View,ActivityIndicator,TouchableOpacity,Text,StyleSheet,ScrollView} from 'react-native'
import {Formik} from 'formik'
import UseUsers from '../hooks/UseUsers'
import UseValidation from '../hooks/UseValidation'
import Icon from 'react-native-vector-icons/AntDesign'

const FomrLogin =() =>{

    const {loading,handSubmit} = UseUsers() 
    const {LoginSchema} = UseValidation()
   
    return (
       <ScrollView style={{paddingVertical: "50%"}} >
        <Formik 
                initialValues={{username:"",
                                password:""}}
                        validationSchema={LoginSchema}
                        onSubmit={(e) =>handSubmit(e)}>
                            {({handleChange,handleSubmit,values,handleBlur,setFieldValue}) =>(
                                <View  style={{
                                        width: '100%',
                                        height: '100%',
                                        position: 'relative',
                                        flexDirection:"column",
                                        justifyContent:"center",}} >
                               
                                {values.username.length>0 && (<Icon style={styles.clearOne} onPress={() =>setFieldValue('username','')} name='closecircle' />)}
                                {values.password.length>0 && (<Icon style={styles.clearTwo} onPress={() =>setFieldValue('password','')} name='closecircle' />)}
                                 <Text style={{marginLeft:55,color:"gray",margin:15}}>INICIAR SESION</Text>   
                                 <TextInput 
                                placeholder='CELULAR' 
                                style={styles.input}
                                autoCapitalize='none'
                                value={values.username}
                                onBlur={handleBlur('username')}
                                onChangeText={handleChange('username')}  
                        />

                        <TextInput  
                                    placeholder='CONTRASEÑA'
                                    secureTextEntry={true}
                                    style={styles.input}
                                    autoCapitalize='none'
                                    value={values.password}
                                    onBlur={handleBlur('password')}
                                    onChangeText={handleChange('password')}
                                    />
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
           </ScrollView>
    )
}
export default FomrLogin


const styles =  StyleSheet.create({
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
        button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
        paddingHorizontal: 5,
        borderRadius:10,
        elevation: 1,
        backgroundColor: '#ed7f3d',
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
})
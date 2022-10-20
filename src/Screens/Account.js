import React, { useContext, useState } from "react";
import {View,Text,ScrollView,StyleSheet,TextInput,ActivityIndicator,TouchableOpacity,Button,SafeAreaView} from "react-native"
import UseValidation from "../hooks/UseValidation";
import {Formik} from 'formik'
import DatePicker from 'react-native-datepicker';
import { LogBox } from 'react-native';
import UseUsers from "../hooks/UseUsers";
import  UserProvider from "../Context/Context";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view"


const Account =() =>{

    const {save,setSave,selectedLanguage,rol} = UseUsers()


    var x = Math.ceil(Math.random()*318772123123);

    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);

    console.log(save)

    const loading = false

    const {handSend} = UseValidation()
    console.log(save)
    const handSubmit =(e) =>{
        alert("enviado")
        const val= {
            numero_name:e.numero_name,
            identification:e.identification,
            titular:e.titular,
            saldo:e.saldo
        }

        setSave({...save,
            car:[...save.car,val]})
    }

    const [date, setDate] = useState('09-10-2021');

    const fin = save?.car?.find(index => index.titular ==rol)


  const handleChange = (date) => {
    setDate(date);
  };
 
  const focus = () => {
    if (!dateInput) {
      return;
    }
 
    dateInput.focus();
  };

    return (
        <KeyboardAwareScrollView  style={{paddingVertical:"50%"}}  >
        {selectedLanguage ==1 &&
        <View style={styles.container} >
           <Formik 
                initialValues={{numero_name:`${Math.ceil(Math.random()*318772123123)}`,
                                identification:"",
                                titular:"",
                                saldo:""}}
                        
                        validationSchema={handSend}
                        onSubmit={(e) =>handSubmit(e)}>
                            {({handleChange,handleSubmit,values,handleBlur,setFieldValue,errors}) =>(
                                <View  style={{
                                        width: '100%',
                                        height: '100%',
                                        position: 'relative',
                                        flexDirection:"column",
                                        justifyContent:"center",}} >
                        <Text style={{marginLeft:55,color:"gray",margin:3}}>Numero de cuenta</Text>  
                        <TextInput 
                                style={styles.input}
                                autoCapitalize='none'
                                value={values.numero_name}
                                onBlur={handleBlur('numero_name')}
                                onChangeText={handleChange('numero_name')} 
                                placeholder="Useseles"/>
                    {errors.numero_name && <Text style={{textAlign:"center",color:"red" }} >completa numero de cuenta</Text>}

                         <Text style={{marginLeft:55,color:"gray",margin:3}}>Identificacion</Text>
                        <TextInput     
                                style={styles.input}
                                autoCapitalize='none'
                                value={values.identification}
                                keyboardType="numeric"
                                onBlur={handleBlur('identification')}
                                onChangeText={handleChange('identification')}/>
                        {errors.identification && <Text style={{textAlign:"center",color:"red" }} >completa todos la identificacion</Text>}

                        <Text style={{marginLeft:55,color:"gray",margin:3}}>titular de la cuenta</Text>
                        <TextInput   
                                style={styles.input}
                                autoCapitalize='none'
                                value={values.titular}
                                onBlur={handleBlur('titular')}
                                onChangeText={handleChange('titular')}
                                    /> 

                        {errors.titular && <Text style={{textAlign:"center",color:"red" }}>Completa la titular de la cuenta</Text>}

                        <Text style={{marginLeft:55,color:"gray",margin:3}}>saldo</Text>
                       <TextInput   
                                    
                                    style={styles.input}
                                    autoCapitalize='none'
                                    keyboardType="numeric"
                                    value={values.saldo}
                                    onBlur={handleBlur('saldo')}
                                    onChangeText={handleChange('saldo')}
                                    />

                        

                        {errors.saldo &&<Text style={{textAlign:"center",color:"red" }} >saldo minimo 1 millon</Text>}

                        {!loading ? (
                            <View style={{alignContent:"center",alignItems:"center",marginTop:30}}>
                            <TouchableOpacity style={styles.button} onPress={handleSubmit}  >
                                <Text style={{color:"white",fontWeight:"600"}}>Enviar</Text>
                            </TouchableOpacity> 
                            </View>  
                            
                            ): <ActivityIndicator color='black' size={60}/>}
                            </View>   
                            )}
                </Formik>
        </View>
          }

          {selectedLanguage ==2 &&
          <View  style={{marginTop:20}}  >
            <View style={{display:"flex",flexDirection:"row",justifyContent:"center",marginTop:20}} >
                <View style={{display:"flex",justifyContent:"flex-end",width:"50%"}}  >
                  <Text>numero de cuenta</Text>
                </View>
                <View style={{borderBottomWidth:1,color:"gray",width:101}}>
                  <Text>{fin?.numero_name}</Text>
                </View>
            </View>
      
            <View style={{display:"flex",flexDirection:"row",justifyContent:"center",marginTop:20}} >
                <View style={{display:"flex",justifyContent:"flex-end",width:"50%"}}  >
                  <Text>identificacion</Text>
                </View>
                <View style={{borderBottomWidth:1,color:"gray",width:100}}>
                  <Text>{fin?.identification}</Text>
                </View>
            </View>
           
            <View style={{display:"flex",flexDirection:"row",justifyContent:"center",marginTop:20}} >
                <View style={{display:"flex",justifyContent:"flex-end",width:"50%"}}  >
                  <Text>titular de la cuenta</Text>
                </View>
                <View style={{borderBottomWidth:1,color:"gray",width:100}}>
                  <Text>{fin?.titular}</Text>
                </View>
            </View>
      
                <View style={{display:"flex",flexDirection:"row",justifyContent:"center",marginTop:20}} >
                    <View style={{display:"flex",justifyContent:"flex-end",width:"50%"}}  >
                    <Text>saldo</Text>
                    </View>
                    <View style={{borderBottomWidth:1,color:"gray",width:100}}>
                    <Text>{fin?.saldo}</Text>
                    </View>
                </View>
                </View> 
            }
        </KeyboardAwareScrollView>
    )
}

export default Account

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
        backgroundColor: 'black',
        width:"60%",
    },
    button2: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 25,
        paddingHorizontal: 5,
        borderRadius:10,
        elevation: 1,
        backgroundColor: 'black',
        margin:12,
        width:"60%",
    },
    input:{
        height:50,
        margin:3,
        borderWidth:1,
        padding:10,
        marginLeft:50,
        marginRight:50,
        color:"black",
    },
    container:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        height:"100%"
    },
    datePickerStyle: {
        width: 200,
        marginTop: 20,
      },
})
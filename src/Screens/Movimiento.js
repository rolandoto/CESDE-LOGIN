import React, { useContext } from "react"
import {View,Text,TouchableOpacity,StyleSheet} from "react-native"
import  UserProvider  from "../Context/Context"
import UseUsers from "../hooks/UseUsers"
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view"

const Movimiento =() =>{

    const {setState} = useContext(UserProvider)
    const {save,selectedLanguage} = UseUsers()

    const handleSubmit =() =>{
        setState(null)
    }

    return (
        <KeyboardAwareScrollView>
            <View style={{alignContent:"center",alignItems:"center",marginTop:30}}>
                            <TouchableOpacity style={styles.button} onPress={handleSubmit}  >
                                <Text style={{color:"white",fontWeight:"600"}}>Cerrar sesion</Text>
                            </TouchableOpacity> 
                            </View>  

        {selectedLanguage ==1 &&
            save?.car?.map((index,e)  => (
          <View key={e} style={{marginTop:20}}  >
            <View style={{display:"flex",flexDirection:"row",justifyContent:"center",marginTop:20}} >
                <View style={{display:"flex",justifyContent:"flex-end",width:"50%"}}  >
                  <Text>numero de cuenta</Text>
                </View>
                <View style={{borderBottomWidth:1,color:"gray",width:101}}>
                  <Text>{index.numero_name}</Text>
                </View>
            </View>
      
            <View style={{display:"flex",flexDirection:"row",justifyContent:"center",marginTop:20}} >
                <View style={{display:"flex",justifyContent:"flex-end",width:"50%"}}  >
                  <Text>identificacion</Text>
                </View>
                <View style={{borderBottomWidth:1,color:"gray",width:100}}>
                  <Text>{index.identification}</Text>
                </View>
            </View>
           
            <View style={{display:"flex",flexDirection:"row",justifyContent:"center",marginTop:20}} >
                <View style={{display:"flex",justifyContent:"flex-end",width:"50%"}}  >
                  <Text>titular de la cuenta</Text>
                </View>
                <View style={{borderBottomWidth:1,color:"gray",width:100}}>
                  <Text>{index.titular}</Text>
                </View>
            </View>
      
                <View style={{display:"flex",flexDirection:"row",justifyContent:"center",marginTop:20}} >
                    <View style={{display:"flex",justifyContent:"flex-end",width:"50%"}}  >
                    <Text>saldo</Text>
                    </View>
                    <View style={{borderBottomWidth:1,color:"gray",width:100}}>
                    <Text>{index.saldo}</Text>
                    </View>
                </View>
                </View> 
           )) }
        </KeyboardAwareScrollView>
    )

}

export default Movimiento


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

})
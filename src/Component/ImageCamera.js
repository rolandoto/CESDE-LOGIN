import React from 'react'
import {View,TouchableOpacity,Image,StyleSheet, Button} from 'react-native'
import UsePikedImage from '../hooks/UsePikedimage'
import Font from 'react-native-vector-icons/EvilIcons'
import Photo from 'react-native-vector-icons/EvilIcons'

const ImageCamera =() =>{
       
    const {showImagePicker,openCamera,pickedImagePath} = UsePikedImage()
    
   
    return (
        <View>
                <View style={styles.constinerColor}  >
                        <TouchableOpacity onPress={openCamera}>
                                <View style={styles.containerCamera}>
                                        <Font name='camera'  style={styles.camera}  />  
                                </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={showImagePicker}>
                                <View style={styles.containerPhoto}>
                                        <Photo name='image'  style={styles.photo}  />
                                </View>
                        </TouchableOpacity>
                </View>
                        {pickedImagePath && (<View style={styles.ContainerPhotoCamera}>  
                                        <View  style={styles.PhotoCamera} > 
                                                <Image  source={{ uri: pickedImagePath }} style={{ width: 200, height: 200,alignItems:"center" }} />
                                    </View> 
                </View>)}

                <Button title='guardar' onPress={handleSubmit} />
    </View>
    )
}

export default ImageCamera

const styles = StyleSheet.create({

     constinerColor:{
        display:"flex",
        justifyContent:"space-around",
        flexDirection:"row",
        marginTop:10
    },
     containerCamera:{
        backgroundColor:"orange",
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        padding:16,
        borderRadius:10
    },

     camera:{
      textAlign:"center",
      fontSize:70,
      color:"black"
    },
     containerPhoto:{
        backgroundColor:"orange",
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around",
        padding:16,
        borderRadius:10,
    },
     photo:{
     textAlign:"center",
      fontSize:70,
      color:"black"
    },
    ContainerPhotoCamera:{
        display:"flex",
        justifyContent:"space-around",
        flexDirection:"row",
        marginTop:10
    },
     PhotoCamera:{
        backgroundColor:"orange",
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        padding:16,
        borderRadius:10  
    },
})
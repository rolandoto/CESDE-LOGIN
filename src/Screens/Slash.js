import React from 'react-native'
import {Text,View,Image} from 'react-native'

const Slash =() =>{
const logo = 'https://github.com/rolandoto/gifs-complete/blob/mora/src/Imagenes/Img_Elda/img_logo%20Grande.png?raw=true'

    return (
        <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
            <Image source={{uri:logo}} style={{width:200,height:200}}   />
        </View>
    )   
}

export default Slash
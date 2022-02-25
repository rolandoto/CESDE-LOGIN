import React from 'react'
import {StyleSheet,View,Text,TouchableOpacity} from 'react-native'

const ListGestos =() =>{



    const DATA = [
  {
    url: '😭'
  },
  {
    url: '🙁'
  },
  {
    url:"😀"
  },
  {
    url: '🤩'
  },
];
    
    return (
        <View style={styles.container}>
          {DATA.map((index,i) =>(
            <TouchableOpacity key={i}>
            <Text key={index.url} style={styles.square} >{index.url}</Text>
            </TouchableOpacity>
          ))}
        </View>
    )  
}

export default ListGestos

const styles = StyleSheet.create({
    container:{
      display:"flex",
      alignItems: "center",
      justifyContent: "center", 
      flexDirection: "row"
    },

    square: {
    margin: 6,
    fontSize:40,
  },
    
})

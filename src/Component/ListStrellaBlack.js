import React from 'react'
import {StyleSheet,View,Text,FlatList} from 'react-native'

const ListStrellasBlack =() =>{



    const DATA = [
  {
    id:1,
    url: '☆',
  },
  {
    id:2,
    url: '☆'
  },
  {
     id:3,  
    url:"☆"
  },
  {
     id:4,
    url:'☆'
  },
];
    
    return (
        <View style={styles.container}>
          {DATA.map((index) =>(
            <Text key={index.id} style={styles.square} >{index.url}</Text>
          ))}
      </View>
    )  
}

export default ListStrellasBlack

const styles = StyleSheet.create({
    container:{
      display:"flex",
      alignItems: "center", // ignore this - we'll come back to it
      justifyContent: "center", // ignore this - we'll come back to it
      flexDirection: "row"
    },

    square: {
    margin: 6,
    fontSize:40,
  },
    
})

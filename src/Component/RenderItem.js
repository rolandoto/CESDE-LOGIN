import React from 'react'
import {TouchableOpacity,StyleSheet,ImageBackground,View, Image} from 'react-native'

const RenderItem =({item, index,carouselRef}) => {
    
    const {uri} = item.item;
    return (
      <View
        activeOpacity={1}
        style={styles.item}
        onPress={() => {
          carouselRef.current.scrollToIndex(index)}}>
            <View style={{flex:1,margin:20}}>
              <Image source={{uri: uri}} style={styles.imageBackground}   /> 
         </View>
      </View>
    );
  }


  export default RenderItem


  const styles = StyleSheet.create({
      item: {
      flex: 2,
      borderColor: 'transparent',
      elevation: 9,
      shadowColor:"white",
      shadowOffset: { height: 0, width: 0 },
      shadowOpacity: 0,
      shadowRadius: 0,
  },  

   imageBackground: {
    flex:2,
    alignItems:"flex-start",
    flexDirection:"row",
    marginTop:-5
  },
  })
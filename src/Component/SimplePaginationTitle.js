import React from 'react';
import {View, StyleSheet} from 'react-native';

function genCircleStyle(size) {
  if (!size) {
    return {};
  }
  return {width: size, height: size, borderRadius: size / 2};
}

function Dot({isActive, color, activeDotSize, inActiveDotSize, dotSeparator}) {
  const processedActiveDotStyle = [
    styles.activeDot,
    {
      backgroundColor: color,
      borderColor: color,
      marginHorizontal: dotSeparator / 2,
      ...genCircleStyle(activeDotSize),
    },
  ];
  const processedInActiveDotStyle = [
    styles.inActiveDot,
    {
      backgroundColor: 'transparent',
      borderColor: color,
      marginHorizontal: dotSeparator / 2,
      ...genCircleStyle(inActiveDotSize),
    },
  ];
  return (
    <View
      style={[
        styles.baseDot,
        isActive ? processedActiveDotStyle : processedInActiveDotStyle,
      ]}
    />
  );
}

const SimplePaginationTitleDo= (props) =>{
    const {
    style,
    length,
    currentIndex = 0,
    color = '#eda068',
    activeDotSize = 8,
    inActiveDotSize = 10,
    dotSeparator = 2,
  } = props;

  const renderItem=(item, index)  =>{
    return (
      <Dot
        key={index}
        isActive={index === currentIndex}
        color={color}
        activeDotSize={activeDotSize}
        inActiveDotSize={inActiveDotSize}
        dotSeparator={dotSeparator}
      />
    );
  }

  return (
    <View style={[styles.container, style]}>
      {Array(length).fill(0).map(renderItem)}
    </View>
  );
}
export default SimplePaginationTitleDo

const styles = StyleSheet.create({
  container: {
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    bottom:120,
    position:"absolute",
    alignItems:"center",
    left:0,
    right:0
  },
  baseDot: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
  },
  activeDot: {
    backgroundColor: 'black',
  },
  inActiveDot: {
    
  },
});
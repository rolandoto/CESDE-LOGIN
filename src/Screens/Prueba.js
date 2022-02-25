import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
  Animated,
  ToastAndroid,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ProductInfo = () => {
  
  
  //get product data by productID

  //product horizontal scroll product card
  const renderProduct = ({item, index}) => {
    return (
      <View
        style={{
          width: width,
          height: 240,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={item}
          style={{
            width: '100%',
            height: '100%',
            resizeMode: 'contain',
          }}
        />
      </View>
    );
  };

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'red',
        position: 'relative',
      }}>
      <StatusBar
        backgroundColor='red'
        barStyle="dark-content"
      />
      <View
        style={{
          position: 'absolute',
          bottom: 10,
          height: '8%',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
        
          style={{
            width: '86%',
            height: '90%',
             color: "blue",
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor:"blue"
          }}>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '500',
              letterSpacing: 1,
              color: "green",
              textTransform: 'uppercase',
            }}>
           add cart
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductInfo;

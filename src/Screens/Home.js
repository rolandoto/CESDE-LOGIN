import React,{useRef,useState,useEffect} from 'react'
import {  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions, Image} from 'react-native'
import Carousel from 'react-native-anchor-carousel';
import RenderItem from '../Component/RenderItem';
import SimplePaginationDo from '../Component/SimplePaginationDo';

const INITIAL_INDEX = 0;
const   Home =(props) =>{

    const {navigation} = props 

    const handNextRegister =() =>{
        navigation.navigate('Register')
    }

    const HandNextLogin =() =>{
       navigation.navigate('Login')
    }
   
    const [currentIndex, setCurrentIndex] = useState(INITIAL_INDEX);
    const carouselRef = useRef(null);
   
    function handleCarouselScrollEnd(item, index) {
      setCurrentIndex(index);
    }

    const data = [
  {
    uri: 'https://github.com/rolandoto/gifs-complete/blob/mora/src/Imagenes/Img_Elda/img-06.png?raw=true',
    title: 'Lorem ipsum dolor sit amet',
    content:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
  },
  {
    uri: 'https://github.com/rolandoto/gifs-complete/blob/mora/src/Imagenes/Img_Elda/img-07.png?raw=true',
    title: 'Lorem ipsum ',
    content: 'Neque porro quisquam est qui dolorem ipsum ',
  },
  {
    uri: 'https://github.com/rolandoto/gifs-complete/blob/mora/src/Imagenes/Img_Elda/img-05.png?raw=true',
    title: 'Lorem ipsum dolor',
    content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet',
  }
];

const logo = 'https://github.com/rolandoto/gifs-complete/blob/mora/src/Imagenes/Img_Elda/img_logo%20Grande.png?raw=true'
const {width: windowWidth} = Dimensions.get('window');

        return (
            <View
              style={{
                width: '100%',
                height: '100%',
                position: 'relative',
                flexDirection:"column",
                justifyContent:"center",
                
              }}>
                <View style={{position:'absolute',
                  top:161,
                  height: '8%',
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center'}}>
                  
                    <Image source={{uri: logo}} style={{width:200,height:200}} />
                </View>
                <View style={{marginTop:150 ,margin:1}}>
                        <Text style={styles.subtitle}>CONECTATE CON EL MUNDO</Text>
                        <Text style={styles.subtitle}>REAL MIDE LA EXPERIENCIA CON LA QUE VALORAN</Text>
                        <Text style={styles.subtitle}>TUS PRODUCTOS</Text>
                      </View>
                <View >
                <Carousel
                    style={styles.carousel}
                    data={data}
                    renderItem={(e) => <RenderItem item={e} carouselRef={carouselRef} /> }
                    itemWidth={1 * windowWidth}
                    inActiveOpacity={0.1}
                    containerWidth={windowWidth}
                    onScrollEnd={handleCarouselScrollEnd}
                    ref={carouselRef}
                />
                <SimplePaginationDo currentIndex={currentIndex} length={data.length} /> 
                </View>
               
                <View style={{
                   position: 'absolute',
                  bottom: 50,
                  height: '8%',
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center'}}>
                    <TouchableOpacity style={styles.button} onPress={HandNextLogin}  >
                        <Text style={{color:"gray",fontWeight:"600"}}>YA TENGO CUENTA</Text>
                    </TouchableOpacity>     
                    <TouchableOpacity  style={styles.buttonOne}  onPress={handNextRegister}>
                        <Text style={{color:"white",fontWeight:"600"}} >CREA UNA TU CUENTA</Text>
                    </TouchableOpacity>
                </View>
      </View>
        )
}
export default Home


const styles = StyleSheet.create({

  container:{
     marginHorizontal:0,
    marginTop:70
  },
  
  title:{
      textAlign:"center",
      marginTop:10,
      fontSize:12,
      color:"#6663ba",
      fontWeight:"300"
  },
  
  carousel: {
    aspectRatio: 1.4,
    flexGrow: 14,
    marginBottom:1,
  },
  subtitle:{
      textAlign:"center",
      color:"gray",
      fontSize:13,
      fontWeight:"300"
  },
  
  rightTextContainer: {
    marginLeft: 'auto',
    marginRight: 0,
    backgroundColor: 'rgba(49, 49, 51,0.5)',
    padding: 3,
    marginTop: 3,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  rightText: {
      color: 'white'},
      lowerContainer: {
      flex: 1,
      margin: 0,
    },
  titleText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  contentText: {
    marginTop: 10,
    fontSize: 12,
  },
  button: {
     width: '90%',
    height: '70%',
    color: "blue",
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    },
    buttonOne: {
         width: '90%',
          height: '90%',
          color: "blue",
          borderRadius: 12,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor:"#ed7f3d"
    },
    header:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
    }
});





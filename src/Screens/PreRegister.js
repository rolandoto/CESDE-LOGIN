import React,{useEffect,useState,useRef} from 'react'
import {Text,Image,StyleSheet,View,TouchableOpacity,Dimensions} from 'react-native'
import Carousel from 'react-native-anchor-carousel';
import RenderItemTitle from '../Component/RenderItemTitle';
import SimplePaginationDo from '../Component/SimplePaginationDo';
import SimplePaginationTitleDo from '../Component/SimplePaginationTitle';

const INITIAL_INDEX = 0;
const PreRegister =(props) =>{

    const [currentIndex, setCurrentIndex] = useState(INITIAL_INDEX);
    const carouselRef = useRef(null);
   
    function handleCarouselScrollEnd(item, index) {
      setCurrentIndex(index);
    }

    const {width: windowWidth} = Dimensions.get('window');

    const {navigation} = props

    const data = [
  {
    uri: 'askldkalsmdksam',
    title: 'CONECTATE CON EL MUNDO Y EN TIEMPO REAL MIDE LA EXPERIENCIA CON LA QUE VALORAN TUS PRODUCTOS',
    content:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
  },
  {
    uri: 'mnkankasndklasnldkasndlkasnldanskldansd',
    title: 'CONECTATE CON EL MUNDO Y EN TIEMPO REAL MIDE LA EXPERIENCIA CON LA QUE VALORAN TUS PRODUCTOS',
    content: 'Neque porro quisquam est qui dolorem ipsum ',
  },
  {
    uri: 'as,md asmd salmdnsalkdnkalsndklas',
    title: 'CONECTATE CON EL MUNDO Y EN TIEMPO REAL MIDE LA EXPERIENCIA CON LA QUE VALORAN TUS PRODUCTOS',
    content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet',
  }
];
     useEffect(() =>{
        navigation.setOptions({
            headerRight:() =>  <Image style={styles.icon} source={{uri:logo}} />
        })
    },[])

    const logo ='https://github.com/rolandoto/gifs-complete/blob/mora/src/Imagenes/Img_Elda/img_logo%20Grande.png?raw=true'
    
    return(
           <View style={styles.container} >
                <Text style={{color:"gray",margin:27,marginTop:200}}>YA CASI TERMINAMOS</Text>
            <View style={styles.containerButton}>
                <TouchableOpacity style={styles.button}   >
                        <Text style={{color:"white",fontWeight:"600",marginRight:80}} >00.0000 MES</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                        <Text style={{color:"white",fontWeight:"600",marginRight:80}} >00.0000 AÑO</Text>
                </TouchableOpacity>
                 <TouchableOpacity style={styles.button}    >
                        <Text style={{color:"white",fontWeight:"600",marginRight:80}} >00.000 PRUEBA</Text>
                </TouchableOpacity>
            </View>
            <View >
                
            <Carousel
                    style={styles.carousel}
                    data={data}
                    renderItem={(e) => <RenderItemTitle {...e} /> }
                    itemWidth={1 * windowWidth}
                    inActiveOpacity={0.1}
                    containerWidth={windowWidth}
                    onScrollEnd={handleCarouselScrollEnd}
                    ref={carouselRef}
                />
             <SimplePaginationTitleDo currentIndex={currentIndex} length={data.length} /> 
            </View>
            <View style={{position: 'absolute',
                  bottom: 25,
                  height: '8%',
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center'}}>
                <TouchableOpacity  style={styles.buttonOne} >
                        <Text style={{color:"white",fontWeight:"600"}} >PAGAR</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default PreRegister

const styles = StyleSheet.create({
    icon:{
        width:90,
        height:90,
        marginRight:40,
        marginTop:100
    },
    title:{
       textAlign:"center",
       fontSize:30
    },
    containerButton:{
        display:"flex",
        justifyContent:"center"
    },
        button: {
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 20,
            paddingHorizontal: 5,
            borderRadius:10,
            elevation: 1,
            backgroundColor: '#ed7f3d',
            margin:5,
            marginRight:20,
            marginLeft:20
    },
    container:{
        width: '100%',
        height: '100%',
        position: 'relative',
        flexDirection:"column",
        justifyContent:"center",
    },
    carousel: {
        aspectRatio: 1.4,
        flexGrow: 14,
        marginBottom:1,
  },
    buttonOne:{
        width: '90%',
        height: '90%',
        color: "blue",
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:"#ed7f3d"
    }
})
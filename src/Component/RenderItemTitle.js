import React from 'react'
import {Text} from 'react-native'

const RenderItemTitle=(props) =>{
    const  {title} = props.item
    return (
        <Text style={{color:"gray",textAlign:"center",margin:45,marginTop:0}} >{title}</Text>
    )
 
}
export default RenderItemTitle
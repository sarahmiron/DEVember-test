import { View, Text } from 'react-native'
import React from 'react'
import { Marker } from 'react-native-maps'

const CustomMarker = ({appartment}) => {
  return (
    <Marker 
    coordinate={{
     latitude:appartment.latitude,
     longitude:appartment.longitude
   }} 
    >
     <View style={{
       backgroundColor:'white',
       padding: 5,
       paddingHorizontal:18,
       borderWidth:1,
       borderColor:'gray',
       borderRadius:20,
     }}>
   <Text style={{fontFamily:'InterBold'}}>{appartment.price}</Text>
   </View>
    </Marker>
  )
}

export default CustomMarker
import { View, Text,StyleSheet} from 'react-native'
import React from 'react'
import MapView, {Marker} from 'react-native-maps'
import { ScreenStack } from 'react-native-screens';
import { Stack } from 'expo-router';
import appartment from '@assets/data/day5/appartment.json'
import CustomMarker from '@components/day5/CustomMarker';
import AppartmentListItem from '@components/day5/AppartmentListItem';

export default function AirbnbScreen(){
  return (
    <View>
     <Stack.Screen options={{headerShown:false}}/>

     <MapView 
     style={styles.map}
     initialRegion={{
        latitude:37.78825,
        longitude:-122.4324,
        latitudeDelta:0.0922,
        longitudeDelta:0.0421,
     }}
     >

      {appartment.map((appartment)=> (
      <CustomMarker key={appartment.id} appartment={appartment}/>))}
       </MapView>
       <AppartmentListItem apartment={appartment[0]}/>
    </View>
  );
};
const styles =StyleSheet.create({
    map:{
        width:'100%',
        height:'100%',
    },
});
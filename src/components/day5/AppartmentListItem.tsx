import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'

const AppartmentListItem = ({apartment}) => {
    return (
        <View style={styles.card}>
            <Image source={{ uri: apartment.image }} style={styles.image} />
           <View style={styles.rightContainer}>
           <Text style={styles.title}>{apartment.title}</Text>
           <Text style={styles.price}>{apartment.price}</Text>
           </View>
        </View>
    );
}
const styles =StyleSheet.create({
    card:{
        backgroundColor:'white',
        position:'absolute',
        bottom:50,
        left:10,
        right:10,

        flexDirection:'row',
    },
    title:{
    fontFamily:'InterBold',
    marginBottom:10,
    
    },

    image:{
        width:150,
        aspectRatio:1,
        },
        price:{

        },
        rightContainer:{
            padding:10,
        },
});
export default AppartmentListItem
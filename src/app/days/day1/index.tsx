import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router';

const DayDetailsScreen = () => {
    return (
        <View>
            <Stack.Screen options={{ title: 'Day1' }} />
            <Text> DayDetailsScreen</Text>
        </View >
    );
};

export default DayDetailsScreen;
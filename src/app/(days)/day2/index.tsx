import { View, Text, Button } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router';

const DayDetailsScreen = () => {
    return (
        <View>
            <Stack.Screen options={{ title: 'Day2:Onboarding' }} />
            <Text style={{ fontFamily: 'AmaticBold', fontSize: 100 }}> DayDetailsScreen</Text>
            <Link href="/day2/onboarding" asChild>
                <Button title="Go to onboarding" />
            </Link>


        </View >
    );
};

export default DayDetailsScreen;
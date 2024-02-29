import { Text, View, StyleSheet, Pressable } from "react-native"
import React, { useState } from "react";
import { Link, Stack, router } from "expo-router";
import { FontAwesome5 } from '@expo/vector-icons';
import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { GestureDetector, Gesture, Directions } from "react-native-gesture-handler";
import Animated, { FadeIn, FadeOut, BounceInRight, BounceOutLeft, SlideInDown, SlideInLeft, SlideOutRight, SlideOutLeft, SlideInRight } from 'react-native-reanimated'


const onboardingSteps = [{
    title: "Welcome #DEVember",
    description: 'Daily React Natuve tutorials during December',
    icon: 'snowflake',
},
{
    title: "Learn and Grow together",
    description: 'Learn by building 24 projects with React Native and Expo',
    icon: 'book-reader',
},
{
    title: "Education for Children",
    description: 'Contribute to the fundraiser "Education for Children" to help Save the Children in their effort of providing education to every child ',
    icon: 'people-arrows'
},
]

export default function OnboardingScreen() {
    const [screenIndex, setScreenIndex] = useState(0);

    const data = onboardingSteps[screenIndex];

    const onContinue = () => {
        const isLastScreen = screenIndex == onboardingSteps.length - 1;
        if (isLastScreen) {
            endOnboarding;
        } else {
            setScreenIndex(screenIndex + 1);

        }

    };

    const onBack = () => {
        const isFirstScreen = screenIndex == 0;
        if (isFirstScreen) {
            endOnboarding;
        } else {
            setScreenIndex(screenIndex - 1);

        }

    };

    const endOnboarding = () => {
        setScreenIndex(0);
        router.back();
    }


    const swipes = Gesture.Simultaneous(Gesture.Fling()
        .direction(Directions.RIGHT)
        .onEnd(onBack), Gesture.Fling()
            .direction(Directions.LEFT)
            .onEnd(onContinue));



    return (
        <SafeAreaView style={styles.page}>
            <Stack.Screen options={{ headerShown: false }} />
            <StatusBar style="light" />
            <View style={styles.stepIndicatorContainer}>
                {onboardingSteps.map((step, index) => (
                    <View key={index} style={[styles.stepIndicator, { backgroundColor: index == screenIndex ? '#CEF202' : 'gray' },]} />
                ))}
            </View>
            <GestureDetector gesture={swipes}>
                {/* <Animated.View
                    entering={BounceInRight}
                    exiting={BounceOutLeft}
                    style={styles.pageContent}
                    > */}
                <View style={styles.pageContent} key={screenIndex}>
                    <Animated.View entering={FadeIn} exiting={FadeOut}>
                        <FontAwesome5 style={styles.image} name={data.icon} size={200} color="#CEF202" />
                    </Animated.View>

                    <View style={styles.footer}>
                        <Animated.Text entering={SlideInRight} exiting={SlideOutLeft}
                            style={styles.title} > {data.title}</Animated.Text>
                        <Animated.Text entering={SlideInRight.delay(50)} exiting={SlideOutLeft} style={styles.description}>{data.description}</Animated.Text>

                        <View style={styles.buttonsRow}>
                            <Text onPress={endOnboarding} style={styles.buttonText}>Skip</Text>


                            <Pressable onPress={onContinue} style={styles.button}>
                                <Text style={styles.buttonText}>
                                    Continue
                                </Text>
                            </Pressable>
                        </View>


                    </View>
                </View>
            </GestureDetector>
        </SafeAreaView >
    );
}
const styles = StyleSheet.create({
    page: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#15141A',

        padding: 20,
    },
    title: {
        color: '#FDFDFD',
        fontSize: 50,
        fontFamily: 'InterBlack',
        letterSpacing: 1.3,
        marginVertical: 10,
    },
    image: {
        alignSelf: 'center',
        margin: 20,
        marginTop: 70,
    },
    description: {
        color: 'gray',
        fontSize: 20,
        fontFamily: 'Inter',
        lineHeight: 28,
    },
    footer: {
        marginTop: 'auto',
    },
    pageContent: {
        padding: 20,
        flex: 1,
    },
    buttonsRow: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
    },
    button: {
        backgroundColor: '#302E38',
        borderRadius: 50,
        alignItems: 'center',
        flex: 1,

    },
    buttonText: {
        color: '#FDFDFD',
        fontFamily: 'InterSemi',
        fontSize: 16,
        padding: 15,
        paddingHorizontal: 25,
    },
    stepIndicatorContainer: {
        flexDirection: 'row',
        gap: 8,
        marginHorizontal: 15,
    },
    stepIndicator: {
        flex: 1,
        height: 3,
        backgroundColor: 'gray',
        borderRadius: 10,
    },
});
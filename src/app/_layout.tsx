import { Stack } from 'expo-router'
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { AmaticSC_400Regular, AmaticSC_700Bold } from '@expo-google-fonts/amatic-sc'

SplashScreen.preventAutoHideAsync();


export default function RootLayout() {
    const [fontsLoaded, fontError] = useFonts({
        Inter: Inter_900Black,
        Amatic: AmaticSC_400Regular,
        AmaticBold: AmaticSC_700Bold,

    });

    useEffect(() => {
        const hideSplashScreen = async () => {
            if (fontsLoaded || fontError) {
                await SplashScreen.hideAsync();
            }
        };

        hideSplashScreen(); // Call the async function
    }, [fontsLoaded, fontError]);

    if (!fontsLoaded && !fontError) {
        return null;
    }
    return (
        <Stack screenOptions={{}}>
            <Stack.Screen name="index" options={{ title: 'DEVember' }} />
        </Stack>

    );
}
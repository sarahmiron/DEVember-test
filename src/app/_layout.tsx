import { Stack } from 'expo-router'

export default function RootLayout() {
    return (
        <Stack screenOptions={{
            title: 'DEVember',
            headerStyle: { backgroundColor: '#F9EDE3' }
        }}>
            <Stack.Screen name='index' options={{ title: 'DEVember' }} />
        </Stack>

    );
}
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';
const days = [...Array(24)].map((val, index) => index + 1);
import DayListitem from '@components/core/DayListitem';


export default function HomeScreen() {

    return (
        <View style={styles.container}>
            <FlatList
                data={days}
                contentContainerStyle={styles.content}
                columnWrapperStyle={styles.column}
                numColumns={2}
                renderItem={({ item }) => <DayListitem day={item} />}
            />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content:
    {
        gap: 10,
        padding: 10,
    },
    column: {
        gap: 10,

    }

});

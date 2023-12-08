import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const days = [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={days}
        renderItem={({ item }) => (<View style={styles.box}>
          <Text style={styles.text}>{item}
          </Text>
        </View>)}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },

  box:
  {
    backgroundColor: '#F9EDE3',
    width: 300,
    height: 300,

    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#9b4521',
    borderRadius: 20,

    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#9b4521',
    fontSize: 50,
  },


});

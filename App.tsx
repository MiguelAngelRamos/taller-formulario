import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FirstTry from './src/screens/FirstTry';
import NaiveLoginScreen from './src/screens/NaiveLoginScreen';
export default function App() {
  return (
    <View style={styles.container}>
      <NaiveLoginScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

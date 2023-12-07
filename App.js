import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Components/Header';
import Login from './Components/Login';
import Search from './Components/Search';

export default function App() {

  return (
    <View style={styles.container}>
      {/* <Header/> */}
      {/* <Search/> */}
      <Login/>
      <StatusBar style="auto" />
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

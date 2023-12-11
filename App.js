import { StatusBar } from "expo-status-bar";
import Header from "./Components/Header";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import Login from "./Components/Login";
import Search from "./Components/Search";
import { FontAwesome5 } from "@expo/vector-icons";
import Navigator from './Routes/HomeStack';
import Profile from "./Components/Profile";
import FlightList from "./Components/flightList";
export default function App() {
  return (
    <View style={styles.container}>
      {/* <Navigator/> */}
      {/* <FlightList/> */}
      <Search/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },

});


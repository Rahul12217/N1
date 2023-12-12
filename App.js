import 'react-native-gesture-handler';
import { StatusBar } from "expo-status-bar";
import Header from "./Components/Header";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import Login from "./Components/Login";
import Search from "./Components/Search";
import { FontAwesome5 } from "@expo/vector-icons";
import Profile from "./Components/Profile";
import FlightList from "./Components/flightList";
import MyTickets from "./Components/MyTickets";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Screen name='Login' component={Login}/>
      <Stack.Screen name='Search' component={Search}/>
      <Stack.Screen name='Search_Reasults' component={FlightList}/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },

});


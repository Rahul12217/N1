import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import Header from "../Components/Header";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import Login from "../Components/Login";
import Search from "../Components/Search";
import { FontAwesome5 } from "@expo/vector-icons";
import Profile from "../Components/Profile";
import FlightList from "../Components/flightList";
import MyTickets from "../Components/MyTickets";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from '@expo/vector-icons';

export const TabNav = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{
      tabBarActiveTintColor: '#05203c',
      tabBarLabelStyle: {
        fontSize: 15,
      }
    }}>
      <Tab.Screen name="Search" component={Search} options={{
        headerShown: false,
        tabBarIcon: ({ color }) => <FontAwesome name="search" size={20} color={color} />
      }} />
      <Tab.Screen name="My Bookings" component={MyTickets} options={{
        headerShown: false,
        tabBarIcon: ({ color }) => <FontAwesome name="list" size={20} color={color} />

      }} />
      <Tab.Screen name="Profile" component={Profile} options={{
        headerShown: false,
        tabBarIcon: ({ color }) => <FontAwesome name="user" size={20} color={color} />

      }} />
    </Tab.Navigator>

  )
}

export default function App() {
  const Stack = createNativeStackNavigator();


  return (
    <NavigationContainer>
      <TabNav />
    </NavigationContainer>

    // <NavigationContainer>
    //   <Stack.Navigator
    //     initialRouteName="Login"
    //     screenOptions={{
    //       headerStyle: {
    //         backgroundColor:"#05203c",
    //       },
    //       headerTintColor:"#fff",
    //       headerTitle:'AirTicket',
    //       headerTitleAlign:'center',
    //     }}
    //   >
    //     <Stack.Screen name="Login" component={Login} />
    //     <Stack.Screen name="Search" component={Search} options={
    //       {
    //         title:'Search'
    //       }
    //     } />
    //     <Stack.Screen name="Search_Reasults" component={FlightList} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

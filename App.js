import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import "react-native-gesture-handler";
import { TabNav } from "./AppDrawer";
import FlightList from "./Components/flightList";
import Login from "./Components/Login";
import MyTickets from "./Components/MyTickets";
import Profile from "./Components/Profile";
import Search from "./Components/Search";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();


export default function App() {
  return (
        <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerStyle: {
              backgroundColor:"#05203c",
            },
            headerTintColor:"#fff",
            headerTitle:'AirTicket',
            headerTitleAlign:'center',
          }}
        >
          <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Tab" component={TabNav} options={
            {
              title:'Tab'
            }
          } />
          <Stack.Screen name="Search_Results" component={FlightList} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

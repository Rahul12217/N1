import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Search from '../Components/Search'
import FlightList from '../Components/flightList';
import { createAppContainer } from 'react-navigation';
import Login from '../Components/Login';
import TicketDetails from '../Components/ticketDetails';

const screens = {

  Search: {
    screen: Search,
    navigationOptions: {
      title: 'AirTicket',
    }
  },
  FlightList: {
    screen: FlightList,
    navigationOptions: {
        title: 'AirTicket',
      }
  },
  TicketDetails: {
    screen:   TicketDetails,
    navigationOptions: {
        title: 'AirTicket',
      }
  },
};

const HomeStack = createStackNavigator(screens,{
  defaultNavigationOptions: {
    headerTintColor: 'white',
    headerTitleAlign:'center',
    headerStyle: { backgroundColor: '#05203c', height: 70 }
  }
});

export default createAppContainer(HomeStack); 
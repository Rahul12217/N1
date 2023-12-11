import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Search from '../Components/Search'
import FlightList from '../Components/flightList';
import { createAppContainer } from 'react-navigation';
import Login from '../Components/Login';
import Profile from '../Components/Profile';
import MyTickets from '../Components/MyTickets';

const screens = {

  Profile: {
    screen: Profile,
    navigationOptions: {
      title: 'AirTicket',
    }
  },
  MyTickets: {
    screen: MyTickets,
    navigationOptions: {
        title: 'AirTicket',
      }
  },
};

const ProfileStack = createStackNavigator(screens,{
  defaultNavigationOptions: {
    headerTintColor: 'white',
    headerTitleAlign:'center',
    headerStyle: { backgroundColor: '#05203c', height: 70 }
  }
});

export default createAppContainer(ProfileStack); 
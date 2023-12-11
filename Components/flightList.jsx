import { useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity } from "react-native";
import { View } from "react-native";
import React from 'react';
import Card from "./card";

const FlightList = ({navigation}) => {
    const [flights, setFlights] = useState([
        { from: 'Chennai', to: 'Vizag', date: '22-12-2023', key: '1' },
        { from: 'Chennai', to: 'Vizag', date: '22-12-2023', key: '2' },
        { from: 'Chennai', to: 'Vizag', date: '22-12-2023', key: '3' },
      ]);
    
  return (
    <View style={styles.container}>
      <FlatList data={flights} renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('TicketDetails', item)}>
          <Card>
            <Text>{ item.from }</Text>
            <Text>{ item.to }</Text>
            <Text>{ item.date }</Text>
          </Card>
        </TouchableOpacity>
      )} />
    </View>
  );
};

export default FlightList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

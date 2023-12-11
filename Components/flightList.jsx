import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity } from "react-native";
import { View } from "react-native";
import React from 'react';
import Card from "./card";
import { FontAwesome5 } from "@expo/vector-icons";


const FlightList = ({ navigation }) => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https:///localhost:44351/api/Flights");
        const result = await response.json();
        setFlights(result);
        console.log("hi");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  console.log(flights)
  return (
    <View style={styles.container}>
      <FlatList data={flights} renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('TicketDetails', item)}>
          <Card >
              <View style={styles.airline}>
                <Text>{item.airline}</Text>
              </View>
              <View style={styles.time}>
                <Text style={styles.fields}>{item.arrivalTime}</Text>
                {/* <Text style={styles.fields}>--</Text> */}
                <FontAwesome5 name="arrow-right" size={14} color="#05203c" style={styles.icon} />
                <Text style={styles.fields}>{item.departureTime}</Text>
              </View>
              <Text style={styles.fields}>₹ {item.fare}</Text>
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
  cardContainer:{
    flexDirection:'row',
  },
  fields: {
    fontSize:17,
    fontWeight: 'bold'
  },
  time: {
    gap: 5,
    flexDirection: 'row',
    alignItems:'center',
  },
  airline: {

  }
});

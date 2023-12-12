import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity } from "react-native";
import { View } from "react-native";
import React from 'react';
import Card from "./card";
import { FontAwesome5 } from "@expo/vector-icons";
import { Image } from "react-native";


const FlightList = () => {
  // const [flights, setFlights] = useState([]);

  const [flights, setFlights] = useState([
    { airline:'Indigo',arrivalTime: 'Chennai', departureTime: 'Vizag', fare: '2000' },
    { airline:'AirAsia',arrivalTime: 'Chennai', departureTime: 'Vizag', fare: '2023'},
    { airline:'Vistara',arrivalTime: 'Chennai', departureTime: 'Vizag', fare: '2223' },
  ]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("https:///localhost:44351/api/Flights");
  //       const result = await response.json();
  //       setFlights(result);
  //       console.log("hi");
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  console.log(flights)
  return (
    <View style={styles.container}>
      <View style={styles.cardContent}>
        <FlatList data={flights} renderItem={({ item }) => (
          <TouchableOpacity >
            <View style={styles.card}>
              <View style={styles.alogo}>
                <Image source={styles.airline[item.airline]} style={{ height: 30, width: 40 }} />
                <Text>{item.airline}</Text>
              </View>
              <View style={styles.time}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }} >
                  <Text style={styles.fields}>{item.arrivalTime}</Text>
                  <FontAwesome5 name="arrow-right" size={14} color="#05203c" style={styles.icon} />
                  <Text style={styles.fields}>{item.departureTime}</Text>
                </View>
                <View>
                  <Text>
                    1h 10m | Non-stop
                  </Text>
                </View>
              </View>
              <Text style={styles.fields}>₹ {item.fare}</Text>
            </View>
          </TouchableOpacity>
        )} />
      </View>
    </View>
  );
};

export default FlightList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    flexDirection: 'row',
  },
  fields: {
    fontSize: 17,
    fontWeight: 'bold'
  },
  time: {
    gap: 5,
    alignItems: 'center',
  },
  alogo: {
    // backgroundColor:'red',
  },
  airline: {
    'Indigo': require('../imges/indigo.jpg'),
    'AirIndia': require('../imges/airindia.jpg'),
    'AirAsia': require('../imges/airasia.jpg'),
    'Vistara': require('../imges/vistara.jpg'),
    'SpiceJet': require('../imges/spicejet.jpg'),
  },
  card: {
    borderColor:'lightgrey',
    borderWidth:1,
    borderRadius: 6,
    elevation: 1,
    backgroundColor: '#fff',
    // shadowOffset: { width: 1, height: 1 },
    // shadowColor: '#333',
    // shadowOpacity: 0.3,
    // shadowRadius: 2,
    marginHorizontal: 10,
    marginVertical: 6,
    height:70,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around'
  },
  cardContent: {
    justifyContent:'space-between',
    flexDirection:'row',
    alignItems:'center',
    marginHorizontal: 18,
    marginVertical: 20,
  }
});

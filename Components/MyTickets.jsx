import { useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity } from "react-native";
import { View } from "react-native";
import React from 'react';
import Card from "./card";
import { FontAwesome5 } from "@expo/vector-icons";


const FlightList = ({ navigation }) => {
    const [flights, setFlights] = useState([
        { from: 'Chennai', to: 'Vizag', date: '22-12-2023', departureTime:'2:30 PM',arrivalTime : '3:40 PM' },
        { from: 'Chennai', to: 'Vizag', date: '22-12-2023',departureTime:'2:30 PM',arrivalTime : '3:40 PM' },
        { from: 'Chennai', to: 'Vizag', date: '22-12-2023',departureTime:'2:30 PM',arrivalTime : '3:40 PM' },
    ]);

    return (
        <View style={styles.container}>
            <FlatList data={flights} renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate('TicketDets', item)}>
                    <Card>
                        <View style={styles.time}>
                            <Text style={styles.text}>{item.departureTime} - </Text>
                            <Text style={styles.text}>{item.arrivalTime}</Text>
                        </View>
                        <View style={styles.places}>
                            <Text style={styles.text}>{item.from}</Text>
                            <FontAwesome5 name="arrow-right" size={14} color="#05203c" style={styles.icon} />
                            <Text style={styles.text}>{item.to}</Text>
                        </View>
                        <Text style={styles.text}>{item.date}</Text>
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
    places:{
        flexDirection:'row',
        gap:10,
        alignItems:'center',
    },
    time:{
        flexDirection:'row'
    },
    text:{
        fontWeight:'bold',
    },
});
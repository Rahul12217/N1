import React, { useEffect } from "react";
import { StyleSheet, Button, TextInput, View, Text } from "react-native";
import { Formik } from "formik";
import { RadioButton } from "react-native-paper";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export default function TicketDetails({ navigation, route }) {

  const [checked, setChecked] = React.useState('first');
  const [gender, setGender] = useState('Male');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [age,setAge] = useState(0);

  const [flight, setFlight] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    const getFlight = async () => {
      await AsyncStorage.getItem('flight', (error, result) => {
        if (result) {
          console.log(JSON.parse(result));
          setFlight(JSON.parse(result))
        } else {
          console.log(JSON.stringfy(error));
        }
      });

    }
    const getUser = async () => {
      await AsyncStorage.getItem('user', (error, result) => {
        if (result) {
          console.log(JSON.parse(result));
          setUser(JSON.parse(result))
        } else {
          console.log(JSON.stringfy(error));
        }
      });

    }
    getFlight();
    getUser();
  }, []);

  console.log(user.userId)

  const onSubmit = () => {
    const data = {
      UserId: user.userId,
      From: flight.from,
      To: flight.to,

      DepartureDate: flight.departureDate,
      DepartureTime: flight.departureTime,
      ArrivalTime: flight.arrivalTime,
      Airline: flight.airline,
      Fare: flight.fare,
      PassengerName: name,
      Age: parseInt(age),
      Gender: gender,
      PassengerEmail: email,
      PassengerPhone: phone,
      Flight_number: flight.flight_number
    }
    axios.post('https://localhost:44351/api/Ticket',data)
    .then(result =>{
      console.group(result)
      navigation.navigate('Tab')
    })
    .catch(error=>{
      console.log(error)
    })
    console.log(data)
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>
          Passenger Details
        </Text>

      </View>
      <View style={styles.gender_fields}>
        <View style={styles.gender}>
          <RadioButton
            value="first"
            status={checked === 'first' ? 'checked' : 'unchecked'}
            onPress={() => { setChecked('first'); setGender('Male') }}
          />
          <Text> Mr </Text>
        </View>
        <View style={styles.gender}>
          <RadioButton
            value="second"
            status={checked === 'second' ? 'checked' : 'unchecked'}
            onPress={() => { setChecked('second'); setGender('Female') }}
          />
          <Text> Ms </Text>
        </View>
        <View style={styles.gender}>
          <RadioButton
            value="third"
            status={checked === 'third' ? 'checked' : 'unchecked'}
            onPress={() => { setChecked('third'); setGender('Female') }}
          />
          <Text> Mrs </Text>
        </View>
      </View>

      <View>
        <TextInput
          style={styles.input1}
          placeholder="Name"
          onChangeText={(value) => setName(value)}
        />

        <TextInput
          style={styles.input1}
          multiline
          placeholder="Email"
          onChangeText={(v) => setEmail(v)}
        />

        <TextInput
          style={styles.input1}
          placeholder="Phone"
          onChangeText={(value) => setPhone(value)}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input1}
          placeholder="Age"
          onChangeText={(value) => setAge(value)}
          keyboardType="numeric"
        />

        <View style={styles.button}>
          <TouchableOpacity onPress={()=> onSubmit()}>
            <Text style={{ color: 'white', textAlign: 'center', fontSize: 23 }}>Submit</Text>
          </TouchableOpacity>
        </View>

      </View>

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 23,
    textAlign: 'center',
    marginTop: 10,
  },
  input1: {
    margin: 10,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    width: "90%",
    height: 60,
    marginRight: "auto",
    marginLeft: "auto",
    fontSize: 23,
  },
  button: {
    margin: 10,
    padding: 10,
    fontSize: 23,
    borderRadius: 10,
    borderWidth: 1,
    width: "90%",
    height: 60,
    marginRight: "auto",
    marginLeft: "auto",
    backgroundColor: '#05203c'
  },
  gender_fields: {
    flexDirection: 'row',
    margin: 20,
    marginBottom: 0,
    padding: 10,
    justifyContent: 'space-between',
    // backgroundColor:'red',
    alignItems: 'center',
  },
  gender: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});  
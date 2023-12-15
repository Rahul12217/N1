import React, { useEffect } from "react";
import { StyleSheet, Button, TextInput, View, Text } from "react-native";
import { Formik } from "formik";
import { RadioButton } from "react-native-paper";
import { useState } from "react";
import { TouchableOpacity } from "react-native";

export default function TicketDetails({ navigation }) {

  const [checked, setChecked] = React.useState('first');
  const [gender, setGender] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const onSubmit = () => {

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
          onChangeText={() => setEmail()}
        />

        <TextInput
          style={styles.input1}
          placeholder="Phone"
          onChangeText={(value) => setPhone(value)}
          keyboardType="numeric"
        />

        <View style={styles.button}>
          <TouchableOpacity onPress={() => navigation.navigate('Tab')}>
            <Text style={{color:'white',textAlign:'center',fontSize:23}}>Submit</Text>
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
    fontSize:23,
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
    backgroundColor:'#05203c'
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
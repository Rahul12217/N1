import React, { useEffect, useState } from "react";
import { StyleSheet, TextInput, View, Text, Button } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Formik } from "formik";
import { TouchableOpacity } from "react-native-gesture-handler";
import DateTimePicker from '@react-native-community/datetimepicker';

const Search = ({route,navigation}) => {
  const presshandler = () => {
  };


  const [from,setFrom] = useState('');
  const [to,setTo] = useState('');
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const onSubmit=() => {
    navigation.navigate('Search_Results',{
      from:from,
      to:to,
      date:`${date.getFullYear()}-${parseInt(date.getMonth() + 1)}-${date.getDate()}`
    })
  }


  return (
    <View style={styles.container}>

        
          <View style={styles.search_fields}>
            <TextInput
              style={styles.search}
              placeholder="From"
              onChangeText={(v)=>setFrom(v)}
              value={from}
            />
            <TextInput
              style={styles.search}
              placeholder="To"
              onChangeText={(v)=>setTo(v)}
              value={to}
            />
            {/* <TextInput
              style={styles.search}
              placeholder="Date"
              onChangeText={props.handleChange("date")}
              value={props.values.date}
            /> */}
            {/* <Button onPress={showDatepicker} title="Show date picker!" /> */}
            <TouchableOpacity onPress={showDatepicker}>
              <View style={styles.search}>
                <Text style={styles.date}>{date.toLocaleString().slice(0,10)}</Text>
              </View>
            </TouchableOpacity>

            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                dateFormat="day dayofweek month"
                onChange={onChange}
              />
            )}
            <TouchableOpacity
              onPress={() => {
                presshandler();
                onSubmit();
              }}>
              <View style={styles.search_button}>
                <Text style={styles.search_text}>Search</Text>
              </View>
            </TouchableOpacity>
          </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },

  header: {
    backgroundColor: "#05203c",
    height: "10%",
  },

  title: {
    textAlign: "center",
    color: "white",
    paddingTop: 40,
    fontSize: 23,
    fontWeight: "bold",
  },

  search_fields: {
    top: "10%",
  },
  search: {
    margin: 5,
    padding: 10,
    fontSize: 23,
    borderWidth: 1,
    borderRadius: 10,
    // borderColor: 'rgb(245, 243, 243)',
    width: '85%',
    height: 60,
    marginRight: "auto",
    marginLeft: "auto",
  },
  search_button: {
    marginRight: 'auto',
    marginLeft: 'auto',
    width: "85%",
    backgroundColor: '#05203c',
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
  },
  search_text: {
    color: 'white',
    textAlign: "center",
    fontSize: 20,
    padding: 10,
  },
  date: {
    color: 'black',
    fontSize: 20,
    // padding: 10,
    justifyContent: 'center'
  },
});

export default Search;

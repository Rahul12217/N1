import React, { useEffect } from "react";
import { StyleSheet, TextInput, View, Text, Button } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Formik } from "formik";
import { TouchableOpacity } from "react-native-gesture-handler";

const Search = () => {
  const presshandler = () => {
  };



  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ from: "", to: "", date: "" }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(props) => (
          <View style={styles.search_fields}>
            <TextInput
              style={styles.search}
              placeholder="From"
              onChangeText={props.handleChange("from")}
              value={props.values.from}
            />
            <TextInput
              style={styles.search}
              placeholder="To"
              onChangeText={props.handleChange("to")}
              value={props.values.to}
            />
            <TextInput
              style={styles.search}
              placeholder="Date"
              onChangeText={props.handleChange("date")}
              value={props.values.date}
            />
            <TouchableOpacity
              onPress={() => {
                presshandler();
                props.handleSubmit();
              }}>
              <View style={styles.search_button}>
                <Text style={styles.search_text}>Search</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
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
});

export default Search;

import React, { useEffect } from "react";
import { StyleSheet, TextInput, View, Text, Button } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Formik } from "formik";

const Search = ({ props, navigation }) => {
  const presshandler = () => {
    navigation.navigate("FlightList");
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
            <Button
              title="Search"
              style={styles.button}
              onPress={() => {
                presshandler();
                props.handleSubmit();
              }}
            />
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
    width: 350,
    height: 60,
    marginRight: "auto",
    marginLeft: "auto",
  },
});

export default Search;

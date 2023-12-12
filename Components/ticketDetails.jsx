import React, { useEffect } from "react";
import { StyleSheet, Button, TextInput, View, Text } from "react-native";
import { Formik } from "formik";

export default function TicketDetails() {


  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          Name: "",
          Email: "",
          Phone: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(props) => (
          <View>
            <TextInput
              style={styles.input1}
              placeholder="Name"
              onChangeText={props.handleChange("Name")}
              value={props.values.Name}
            />

            <TextInput
              style={styles.input1}
              multiline
              placeholder="Email"
              onChangeText={props.handleChange("Email")}
              value={props.values.Email}
            />

            <TextInput
              style={styles.input1}
              placeholder="Phone"
              onChangeText={props.handleChange("Phone")}
              value={props.values.Phone}
              keyboardType="numeric"
            />
            <Button
              color="grey"
              title="Proceed"
              
              onPress={props.handleSubmit}
            />
          </View>
        )}
      </Formik>
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    input1: {
        margin: 10,
        padding: 10,
        fontSize: 23,
        borderWidth: 0,
        borderRadius: 10,
        borderBottomWidth:1,
        width: "90%",
        height: 60,
        marginRight: "auto",
        marginLeft: "auto",
      },
});  
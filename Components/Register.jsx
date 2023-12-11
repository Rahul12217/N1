import React from "react";
import { StyleSheet, Button, TextInput, View, Text } from "react-native";
import { Formik } from "formik";

export default function Register() {
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
          phone: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(props) => (
          <View>
            <TextInput
              style={styles.input}
              placeholder="Name"
              onChangeText={props.handleChange("name")}
              value={props.values.name}
            />

            <TextInput
              style={styles.input}
              multiline
              placeholder="Email"
              onChangeText={props.handleChange("email")}
              value={props.values.email}
            />
            <TextInput
              style={styles.input}
              multiline
              placeholder="Password"
              onChangeText={props.handleChange("password")}
              value={props.values.password}
            />
            <TextInput
              style={styles.input}
              multiline
              placeholder="Confirm Password"
              onChangeText={props.handleChange("confirmPassword")}
              value={props.values.confirmPassword}
            />

            <TextInput
              style={styles.input}
              placeholder="Phone"
              onChangeText={props.handleChange("phone")}
              value={props.values.phone}
              keyboardType="numeric"
            />

            <Button
              color="#05203c"
              title="Register"
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
    input: {
        margin: 10,
        padding: 10,
        fontSize: 23,
        borderWidth: 1,
        borderRadius: 10,
        width: "90%",
        height: 60,
        marginRight: "auto",
        marginLeft: "auto",
      },
});  
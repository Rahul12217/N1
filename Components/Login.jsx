import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Modal } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import Register from "./Register";

const Login = ({navigation}) => {

  const [modal, setModal] = useState(false);

  const handleLogin = () => {
    navigation.navigate('Search')
  }

  return (
    <View style={styles.container}>
      <FontAwesome5 name="plane-departure" size={64} color="#05203c" style={styles.icon}/>
      <View style={styles.i_container}>
        <TextInput style={styles.input_fields} placeholder="Email" />
        <TextInput style={styles.input_fields} placeholder="Password" />
        <Button title="Log in" color="#05203c" onPress={handleLogin} />
        <Text style={styles.forgot}>Forgot Password?</Text>
        <Modal visible={modal} animationType="slide">
          <View style={styles.modalContent}>
            <MaterialIcons
              name="close"
              size={24}
              style={{ ...styles.modalToggle, ...styles.modalClose }}
              onPress={() => setModal(false)}
            />
            <Register />
          </View>
        </Modal>
        <Text style={styles.create} onPress={() => setModal(true)}>
          Create new account
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff'
  },
  icon:{
    backgroundColor:'white',
    marginRight:'auto',
    marginLeft:'auto',
    top: "20%",
    borderRadius:7,
    padding:10,
    elevation:5,
    shadowOffset: { width: 2, height: 2 },
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowRadius: 2,

  },

  i_container: {
    marginTop: 25,
    top: "20%",
  },

  input_fields: {
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

  login: {
    alignItems: "center",
    // top:'25%',
    marginTop: 20,
  },
  f_container: {
    top: "25%",
  },
  forgot: {
    fontSize: 18,
    marginTop: 15,
    color: "#05203c",
    textAlign: "center",
  },

  create: {
    marginRight: "auto",
    marginLeft: "auto",
    width: "90%",
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    padding: 3,
    top: "90%",
    fontSize: 23,
    color: "#05203c",
    textAlign: "center",
  },
  modalToggle: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#f2f2f2",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
  modalContent: {
    flex: 1,
  },
});

export default Login;

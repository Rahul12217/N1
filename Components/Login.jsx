import { Button, StyleSheet, Text, TextInput, View } from "react-native-web";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
    return (
        <View>
            <View style={styles.container}>
                <FontAwesomeIcon style={styles.icon} icon={faPlaneDeparture} />
                <View>
                    <TextInput style={styles.input_fields} placeholder='Email' />
                    <TextInput style={styles.input_fields} placeholder='Password' />
                </View>
                <View style={styles.login}>
                    <Button title='Log in' />
                </View>

                <View>
                    <Text style={styles.forgot}>Forgot Password?</Text>
                </View>
                <View style={styles.c}>
                    <Text style={styles.create} >Create new account</Text>
                </View>

                <Text style={styles.title} >AirTicket</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        borderWidth: 1,
        width: '100%',
        borderColor: 'rgb(255, 255, 255)',
        // backgroundColor:'red'
    },
    icon: {
        color: '#05203c',
        height: 80,
        width: 80,
        marginBottom: 20,
    },

    input_fields: {
        margin: 10,
        padding: 10,
        fontSize: 23,
        borderWidth: 1,
        borderRadius: 10,
        // borderColor: 'rgb(245, 243, 243)',
        width: 350,
        height: 60,
        marginRight: 'auto',
        marginLeft: 'auto',
        boxShadow: '0 1px 5px 0 rgba(37,32,31,.3)',
    },

    login: {
        marginTop: 20,
    },
    forgot: {
        fontSize: 23,
        marginTop: 15,
        color: 'blue',
    },
    c: {
        height: 40,
        top: '47%',
        backgroundColor: 'rgb(245, 243, 243)',
        width: 350,
        borderWidth: 1,
        borderColor: 'blue',
        fontSize: 23,
        borderRadius: 10,
        // justfyContent:'center',
        alignItems: 'center'
    },

    create: {
        fontSize: 23,
        color: 'blue',
    },
    title: {
        top: '50%',
        fontSize: 20,
        color: '#05203c',
    }
})

export default Login;

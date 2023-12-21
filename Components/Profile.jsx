import { Pressable, StyleSheet, Text } from "react-native";
import { View } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useEffect } from "react";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Profile = ({navigation}) => {

    const [user, setUser] = useState([]);
    const [name,setName] = useState('');

    useEffect(() => {

        const getUser = async () => {
            await AsyncStorage.getItem('user', (error, result) => {
                if (result) {
                    console.log(JSON.parse(result));
                    setUser(JSON.parse(result))
                    setName(JSON.parse(result).name)

                } else {
                    console.log(JSON.stringfy(error));
                }
            });

        }
        getUser();

    }, [])
    
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Profile</Text>
                <Text style={styles.username}>{name.slice(0,1)}</Text>
            </View>
            <View style={styles.manage}>
                <View>
                    <Text style={{ fontSize: 23, fontWeight: 500 }}>Manage your account</Text>
                </View>
                <View style={styles.b_container}>
                    <View style={styles.b1}>
                        <View style={styles.buttons}>
                            <Pressable onPress={()=>navigation.navigate('Details')}>
                                <MaterialCommunityIcons name="card-account-details" size={74} color="black" />
                                <Text style={{ fontSize: 18 }}>
                                    Your Details
                                </Text>
                            </Pressable>
                        </View>
                        <View style={styles.buttons}>
                            <Pressable onPress={()=>navigation.navigate('My Bookings')}>
                                <FontAwesome5 name="ticket-alt" size={74} color="black" />
                                <Text style={{ fontSize: 18 }}>
                                    My Tickets
                                </Text>
                            </Pressable>
                        </View>
                    </View>
                    <View style={styles.b2}>
                        <View style={styles.buttons}>
                            <Pressable onPress={()=>alert('Settings')}>
                                <Feather name="settings" size={74} color="black" />
                                <Text style={{ fontSize: 18 }}>
                                    Settings
                                </Text>
                            </Pressable>
                        </View>
                        <View style={styles.buttons}>
                            <Pressable onPress={()=>alert('Support')}>
                                <MaterialIcons name="support-agent" size={74} color="black" />
                                <Text style={{ fontSize: 18 }}>
                                    Support
                                </Text>
                            </Pressable>
                        </View>
                    </View>

                </View>
            </View>
        </View>
    );
}

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
    },
    username: {
        height:60,
        width:60,
        padding: 10,
        color: 'white',
        fontSize: 28,
        fontWeight: 400,
        backgroundColor: '#0062e3',
        borderRadius: '50%',
        textAlign:'center',
        alignItems:'center',
        justifyContent:'center'
    },
    manage: {
        margin: 20,
    },
    b_container: {
        marginTop: 20,
        alignItems: 'center',
        gap: 20,
    },
    b1: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    b2: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    buttons: {
        backgroundColor: 'white',
        // margin:10,
        alignItems: 'center',
        width: '43%',
        justifyContent: 'center',
        borderRadius: 10,
    },
});
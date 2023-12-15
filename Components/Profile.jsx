import { Pressable, StyleSheet, Text } from "react-native";
import { View } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const Profile = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Profile</Text>
                <Text style={styles.username}>Rahul Yamali</Text>
            </View>
            <View style={styles.manage}>
                <View>
                    <Text style={{ fontSize: 23, fontWeight: 500 }}>Manage your account</Text>
                </View>
                <View style={styles.b_container}>
                    <View style={styles.b1}>
                        <View style={styles.buttons}>
                            <Pressable onPress={()=>alert('Details')}>
                                <MaterialCommunityIcons name="card-account-details" size={74} color="black" />
                                <Text style={{ fontSize: 18 }}>
                                    Your Details
                                </Text>
                            </Pressable>
                        </View>
                        <View style={styles.buttons}>
                            <Pressable onPress={()=>alert('Tickets')}>
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
        padding: 5,
        color: 'white',
        fontSize: 23,
        fontWeight: 400,
        backgroundColor: '#0062e3',
        borderRadius: 7,
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
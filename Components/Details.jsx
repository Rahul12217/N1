import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const Details = ({navigation}) => {

    const [user, setUser] = useState([]);

    useEffect(() => {

        const getUser = async () => {
            await AsyncStorage.getItem('user', (error, result) => {
                if (result) {
                    console.log(JSON.parse(result));
                    setUser(JSON.parse(result))
                } else {
                    console.log(JSON.stringfy(error));
                }
            });

        }
        getUser();

    }, [])

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>
                Your Details
            </Text>
            <View style={styles.details}>
                <View style={styles.dets}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Email address</Text>
                    <Text style={{ fontSize: 20 }} >{user.email}</Text>
                </View>
                <View style={styles.dets}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Name</Text>
                    <Text style={{ fontSize: 20 }} >{user.name}</Text>
                </View>
                <View style={styles.dets}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Phone</Text>
                    <Text style={{ fontSize: 20 }} >{user.phone}</Text>
                </View>
            </View>
            <Pressable onPress={()=>navigation.navigate('Profile')} style={{alignItems:'center'}}>
                <Text style={{textAlign:'center',backgroundColor:'#0062e3',padding:10,borderRadius:8,color:'white',width:"50%",marginTop:'5%'}}>Back</Text>
            </Pressable>
        </View>
    );
}

export default Details;

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    details: {
        marginTop: '10%',
        borderTopWidth: 1,
        borderColor: 'grey',
    },
    dets: {
        marginTop:'5%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between'
    },
})
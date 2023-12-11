import { StyleSheet, Text } from "react-native";
import { View } from "react-native";

const Profile = () => {
    return ( 
        <View style={styles.container}>
            <Text>Flights List</Text>
        </View>
     );
}

export default Profile;

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
});
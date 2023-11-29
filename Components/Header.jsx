import React from 'react';
import { StyleSheet, Text, TextInput } from 'react-native';
import { View } from 'react-native-web';

const Header = () => {
    return ( 
        <View style={styles.container}>
            <Text style={styles.text} >AirTicket</Text>
        </View>
        
     );
}

const styles = StyleSheet.create({
    container: {
        width:'100%',
        marginBottom:'auto',
      backgroundColor: '#05203c',
    },
    text:{
        color:'white',
        fontSize:20,
        padding:10,

    }

  
  });

export default Header;
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
        height:'8%',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:'auto',
      backgroundColor: '#05203c',
    },
    text:{
        color:'white',
        fontSize:25,
        // padding:20,
        fontWeigh:'bold',
    }

  
  });

export default Header;
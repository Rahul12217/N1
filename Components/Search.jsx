import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

const Search = () => {
    return ( 
        <View >
            <TextInput style={styles.search} placeholder='From'/>
        </View>
     );
}

const styles= StyleSheet.create({
    search:{
        color:'red',
    },
})


export default Search;
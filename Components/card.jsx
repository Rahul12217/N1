import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Card(props) {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        { props.children }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderColor:'grey',
    borderWidth:1,
    borderRadius: 6,
    elevation: 1,
    backgroundColor: '#fff',
    // shadowOffset: { width: 1, height: 1 },
    // shadowColor: '#333',
    // shadowOpacity: 0.3,
    // shadowRadius: 2,
    marginHorizontal: 10,
    marginVertical: 6,
    height:70,
  },
  cardContent: {
    justifyContent:'space-between',
    flexDirection:'row',
    alignItems:'center',
    marginHorizontal: 18,
    marginVertical: 20,
  }
});
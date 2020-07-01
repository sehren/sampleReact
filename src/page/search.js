import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Search extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>This is Search Page!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text : {
    // fontFamily : 'Chatrik'
  }
});
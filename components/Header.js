import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
};

Header.defaultProps = {
    title: 'Grimaslek'
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 10,
    backgroundColor: 'pink',
    justifyContent: 'center'
  },
  text: {
    color: '#171719',
    fontSize: 24,
    textAlign: 'center'
  }
})

export default Header;
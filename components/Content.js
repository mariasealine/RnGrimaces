import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Content = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hej! Kom och öva på roliga miner. Härma bilden, ta ett kort och jämför </Text>
      <Image style={styles.img} source={{uri: 'https://picsum.photos/id/1025/300/200'}} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center',
    paddingTop: 100
  },
  text: {
    color: 'black', 
    fontSize: 24,
    alignSelf: 'center',
    textAlign: 'center',
    paddingTop: 32,
    paddingBottom: 24
  },
  img: {
    width: 200,
    height: 200,
    borderRadius: 200 / 2
  }
})

export default Content;
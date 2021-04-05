import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import grimaceImages from '../imagesApi/grimaceImages';

const Content = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hej! Kom och öva på roliga miner. Härma bilden, ta ett kort och jämför </Text>
      <Image style={styles.img} source={grimaceImages[0].uri} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20
  },
  text: {
    fontSize: 24,
    alignSelf: 'center',
    textAlign: 'center',
    padding: 32
  },
  img: {
    width: 200,
    height: 200,
    borderRadius: 200 / 2
  }
})

export default Content;
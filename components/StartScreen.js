import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Header from './Header';
import Content from './Content';
import Icon from 'react-native-vector-icons/FontAwesome5';

const StartScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Header title='Lek med grimaser' />
			<Content />
			<TouchableOpacity
				style={styles.startBtn}
				onPress={() => navigation.navigate('PlaySet')}
			>
				<Icon name="play" size={24} />
				<Text style={styles.text}>Sätt igång!</Text>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	startBtn: {
		backgroundColor: 'pink',
		justifyContent: 'center',
		borderWidth: 2,
		borderRadius: 5,
		padding: 15,
		marginBottom: 150,
		alignSelf: 'center',
		flexDirection: 'row',
		alignItems: 'center'
	},
	text: {
		marginHorizontal: 12,
		fontSize: 16
	}
})

export default StartScreen;
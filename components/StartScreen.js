import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Header from './Header';
import Content from './Content';

const StartScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Header title='Lek med grimaser' />
			<Content />
			<TouchableOpacity
				style={styles.startBtn}
				onPress={() => navigation.navigate('PlaySet')}
			>
				<Text style={styles.text}>Börja spela</Text>
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
		marginBottom: 100,
		alignSelf: 'center',
	},
	text: {
		fontSize: 16
	}
})

export default StartScreen;
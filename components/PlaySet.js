import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import grimaceImages from './../imagesApi/grimaceImages';

const PlaySet = () => {
	randomGrimace = () => {
		const randomElement = grimaceImages[Math.floor(Math.random() * grimaceImages.length)];
		console.log(randomElement.uri);
		return randomElement.uri;
	}

	const [takenPictureUri, setTakenPictureUri] = useState(null);
	const [grimaceUri, setGrimaceUri] = useState(randomGrimace());

	takePicture = async () => {
		try {
			if (this.camera) {
				const options = { quality: 0.5, base64: true };
				const { uri } = await this.camera.takePictureAsync(options);
				setTakenPictureUri(uri);
				console.log(uri);
			}
		} catch (err) {
			alert(err.message);
		}
	};

	return (
		takenPictureUri ?
			<View style={styles.previewContainer}>
				<Image
					style={styles.previewImg}
					source={{ uri: takenPictureUri }} />
				<Image style={styles.previewCompareImg} source={{ uri: grimaceUri }} />
				<Text style={styles.text}>Blev det likt?</Text>
				<TouchableOpacity onPress={() => setTakenPictureUri(null)} style={[styles.button, styles.buttonTop]}><Text style={styles.btn}>Nej, jag vill försöka igen!</Text></TouchableOpacity>
				<TouchableOpacity onPress={() => { setTakenPictureUri(null); setGrimaceUri(randomGrimace()); }} style={styles.button}><Text style={styles.btn}>Ja! Ge mig en ny grimas!</Text></TouchableOpacity>
			</View>
			:
			<View style={styles.container}>
				<Text style={styles.text}>Försök härma bilden!</Text>
				<RNCamera
					ref={ref => {
						this.camera = ref;
					}}
					style={styles.preview}
					type={RNCamera.Constants.Type.front}
					flashMode={RNCamera.Constants.FlashMode.on}
					captureAudio={false}
					androidCameraPermissionOptions={{
						title: 'Permission to use camera',
						message: 'We need your permission to use your camera',
						buttonPositive: 'Ok',
						buttonNegative: 'Cancel',
					}}
				/>
				<View style={styles.grimaceImage}>
					<Image style={styles.img} source={{ uri: grimaceUri }} />
				</View>
				<View style={styles.btnWrapper}>
					<TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.button}>
						<Text style={styles.btn}> Ta kort </Text>
					</TouchableOpacity>
				</View>
			</View>
	)
}

const styles = StyleSheet.create({
	previewContainer: {
		flex: 1,
		alignItems: 'center',
		paddingTop: 30
	},
	previewImg: {
		width: 200,
		height: 200,
		borderWidth: 2,
		borderColor: 'pink',
		borderRadius: 6
	},
	previewCompareImg: {
		width: 200,
		height: 200,
		borderWidth: 2,
		borderColor: 'pink',
		borderRadius: 6
	},
	container: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: 'white'
	},
	text: {
		fontSize: 24,
		alignSelf: 'center',
		paddingTop: 24,
		paddingBottom: 10
	},
	preview: {
		flex: 3,
		alignItems: 'center',
		borderWidth: 3,
		borderStyle: 'solid',
		borderColor: 'pink',
		borderRadius: 6,
		margin: 10
	},
	grimaceImage: {
		flex: 2,
		justifyContent: 'center',
		alignItems: 'center'
	},
	img: {
		height: 200,
		width: 200,
		borderRadius: 6
	},
	btnWrapper: {
		flex: 1,
		paddingTop: 24
	},
	button: {
		backgroundColor: 'pink',
		justifyContent: 'center',
		borderWidth: 2,
		borderRadius: 5,
		padding: 15,
		paddingHorizontal: 20,
		alignSelf: 'center',
	},
	buttonTop: {
		marginBottom: 10,
		marginTop: 10,
		backgroundColor: '#c32365'
	},
	btn: {
		fontSize: 16
	},

});

export default PlaySet;
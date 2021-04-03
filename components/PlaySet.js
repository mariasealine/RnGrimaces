import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import grimaceImages from './../imagesApi/grimaceImages';
import Header from './Header';

const PlaySet = () => {

	randomGrimace = (index) => {
		let currentImage = grimaceImages[index];
		return currentImage.uri;
	}

	const [takenPictureUri, setTakenPictureUri] = useState(null);
	const [grimaceIndex, setGrimaceIndex] = useState(1);
	const [grimaceUri, setGrimaceUri] = useState(randomGrimace(grimaceIndex));

	updateImage = (index) => {
		if (index < grimaceImages.length - 1) {
			setGrimaceIndex(index + 1);
		} else {
			setGrimaceIndex(0);
		}
	}

	useEffect(() => {
		if (grimaceIndex < grimaceImages.length) {
			setGrimaceUri(randomGrimace(grimaceIndex));
		} else {
			setGrimaceUri(randomGrimace(0));
		}
	})

	takePicture = async () => {
		try {
			if (this.camera) {
				const options = { quality: 0.5, base64: true };
				const { uri } = await this.camera.takePictureAsync(options);
				setTakenPictureUri(uri);
			}
		} catch (err) {
			alert(err.message);
		}
	};

	return (
		takenPictureUri ?
			<View style={styles.container}>
				<Header title={'Blev det likt?'} />
				<Image
					style={styles.previewImg}
					source={{ uri: takenPictureUri }} />
				<Image style={styles.img} source={grimaceUri} />
				<View style={styles.btnWrapper}>
					<TouchableOpacity onPress={() => setTakenPictureUri(null)} style={[styles.button, styles.buttonTop]}><Text style={styles.btnText}>Nej, jag vill försöka igen!</Text></TouchableOpacity>
					<TouchableOpacity onPress={() => { setTakenPictureUri(null); updateImage(grimaceIndex); }} style={styles.button}><Text style={styles.btnText}>Ja! Ge mig en ny grimas!</Text></TouchableOpacity>
				</View>
			</View>
			:
			<View style={styles.container}>
				<Header title={'Försök härma bilden!'} />
				<RNCamera
					ref={ref => {
						this.camera = ref;
					}}
					style={styles.cameraview}
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
				<View style={styles.grimaceImageWrapper}>
					<Image style={styles.img} source={grimaceUri} />
				</View>
				<View style={styles.btnWrapper}>
					<TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.button}>
						<Text style={styles.btnText}> Ta kort </Text>
					</TouchableOpacity>
				</View>
			</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		flexDirection: 'column',
		backgroundColor: 'white'
	},
	previewImg: {
		width: 200,
		height: 200,
		borderWidth: 2,
		borderColor: 'pink',
		borderRadius: 6,
		transform: [{ rotateY: '180deg' }]
	},
	img: {
		width: 200,
		height: 200,
		borderWidth: 2,
		borderColor: 'pink',
		borderRadius: 6,
		margin: 16
	},
	cameraview: {
		width: 200,
		height: 200,
		overflow: 'hidden',
		borderWidth: 2,
		borderStyle: 'solid',
		borderColor: 'pink',
		borderRadius: 6
	},
	grimaceImageWrapper: {
		justifyContent: 'center',
		alignItems: 'center'
	},
	btnWrapper: {
		flex: 1
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
		backgroundColor: '#c32365'
	},
	btnText: {
		fontSize: 16
	},

});

export default PlaySet;
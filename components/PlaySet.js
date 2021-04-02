import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import grimaceImages from './../imagesApi/grimaceImages';

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
			<View style={styles.previewContainer}>
				<Text style={styles.textHeading}>Blev det likt?</Text>
				<Image
					style={styles.previewImg}
					source={{ uri: takenPictureUri }} />
				<Image style={styles.previewCompareImg} source={grimaceUri} />
				<TouchableOpacity onPress={() => setTakenPictureUri(null)} style={[styles.button, styles.buttonTop]}><Text style={styles.btn}>Nej, jag vill försöka igen!</Text></TouchableOpacity>
				<TouchableOpacity onPress={() => { setTakenPictureUri(null); updateImage(grimaceIndex); }} style={styles.button}><Text style={styles.btn}>Ja! Ge mig en ny grimas!</Text></TouchableOpacity>
			</View>
			:
			<View style={styles.container}>
				<Text style={styles.textHeading}>Försök härma bilden!</Text>
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
					<Image style={styles.img} source={grimaceUri} />
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
		alignItems: 'center'
	},
	previewImg: {
		width: 200,
		height: 200,
		borderWidth: 2,
		borderColor: 'pink',
		borderRadius: 6,
		marginBottom: 10
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
	textHeading: {
		backgroundColor: 'pink',
		fontSize: 24,
		paddingTop: 14,
		paddingBottom: 14,
		width: '100%',
		textAlign: 'center',
		marginBottom: 24
	},
	preview: {
		flex: 3,
		alignItems: 'center',
		borderWidth: 3,
		borderStyle: 'solid',
		borderColor: 'pink',
		borderRadius: 6,
		marginHorizontal: 16
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
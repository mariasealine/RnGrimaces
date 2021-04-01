import React, { useState } from 'react';
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RNCamera } from 'react-native-camera';

// const [type, setTypeCamera] = useState(RNCamera.Constants.Type.back);



const PlaySet = () => {
	const [imageUri, setImageUri] = useState(null);

	takePicture = async () => {
		try {
			if (this.camera) {
        const options = { quality: 0.5, base64: true };
        // const data = await this.camera.takePictureAsync(options);
        // console.log(data.uri);

				const { uri } = await this.camera.takePictureAsync(options);
				setImageUri(uri);
				console.log(uri);
    	}
		} catch (err) {
			alert(err.message);
		} 
};

    return (
			imageUri ?
			<View style={styles.previewContainer}>
				<Image
					style={styles.previewImg}
					source={{ uri: imageUri }} />
				<Image style={styles.previewCompareImg} source={{uri: 'https://picsum.photos/id/1025/300/200'}} />
				<Text style={styles.text}>Blev det likt?</Text>
				<TouchableOpacity onPress={() => setImageUri(null)} style={[styles.button, styles.buttonTop]}><Text style={styles.btn}>Nej, jag vill försöka igen!</Text></TouchableOpacity>
				<TouchableOpacity onPress={() => setImageUri(null)} style={styles.button}><Text style={styles.btn}>Ja! Ge mig en ny grimas!</Text></TouchableOpacity>
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
					captureAudio= {false}
					androidCameraPermissionOptions={{
						title: 'Permission to use camera',
						message: 'We need your permission to use your camera',
						buttonPositive: 'Ok',
						buttonNegative: 'Cancel',
					}}
				/>
				<View style={styles.compareImg}>
					<Image style={styles.img} source={{uri: 'https://picsum.photos/id/1025/300/200'}} />
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
	compareImg: {
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
import React,{useState} from 'react'
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'
import * as Location from 'expo-location';
const Analitica =() => {

    const [pickedImagePath, setPickedImagePath] = useState(null);
	
  const openCamera = async () => {
    // Ask the user for the permission to access the camera
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("por favor revisa tus configuracion de photos");
      return;
    }

    const result = await ImagePicker.launchCameraAsync();

    // Explore the result
    console.log(result);

    if (!result.cancelled) {
      setPickedImagePath(result.uri);
    }
  }

	takeImage = async () => {
		// make sure that we have the permission
		const hasPermission = await openCamera()
        
		if (!hasPermission) {
			return
		} else {
			// launch the camera with the following settings
			let image = await ImagePicker.launchCameraAsync({
				mediaTypes: pickedImagePath,
				allowsEditing: true,
				aspect: [3, 3],
				quality: 1,
				base64: true,
			})
			// make sure a image was taken:
			if (!image.cancelled) {
				fetch('http://192.168.2.111:8080/', {
					method: 'POST',
					headers: {
						Accept: 'application/json',
						'Content-Type': 'application/json',
					},
					// send our base64 string as POST request
					body: JSON.stringify({
						imgsource: image.base64,
					}),
				})
			}
		}
	}
	return (
		<View style={styles.container}>
			<Button title="Take a foto" onPress={takeImage} />
		</View>
	)
}

export default Analitica

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
})



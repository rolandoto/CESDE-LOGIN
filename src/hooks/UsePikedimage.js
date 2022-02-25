import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';


const UsePikedImage=() =>{

    const [pickedImagePath, setPickedImagePath] = useState(null);
    
    const showImagePicker = async () => {
    // Ask the user for the permission to access the media library 
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("por favor revisa tus configuraciones de photos para los permiso");
      return;
    }
    
    const result = await ImagePicker.launchImageLibraryAsync();

    
    
    if (!result.cancelled) {
      setPickedImagePath(result.uri);
    }
  }

  // This function is triggered when the "Open camera" button pressed
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

 

  return {showImagePicker,openCamera,pickedImagePath}
  
}

export default UsePikedImage
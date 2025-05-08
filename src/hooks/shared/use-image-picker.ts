import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

interface IOptions {
  allowsEditing?: boolean;
  aspect?: [number, number];
  quality?: number;
}

export const useImagePicker = (options: IOptions = {}) => {
  const [image, setImage] = useState<null | string>(null);

  const defaultOptions = {
    allowsEditing: true,
    aspect: [1, 1] as [number, number],
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    quality: 0.8,
    ...options,
  };

  const pickFromCamera = async (): Promise<void> => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('You need to allow camera permissions to take a photo');
      return;
    }

    const result = await ImagePicker.launchCameraAsync(defaultOptions);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const pickFromGallery = async (): Promise<void> => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('You need to allow gallery access to select an image');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync(defaultOptions);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return {
    image,
    pickFromCamera,
    pickFromGallery,
    setImage,
  };
};

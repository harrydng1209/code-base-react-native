import { useEffect, useState } from 'react';
import { Permission, PermissionsAndroid, Platform } from 'react-native';

const useDevicePermission = (type: Permission) => {
  const [granted, setGranted] = useState<boolean>(false);

  const requestPermission = async () => {
    if (Platform.OS === 'android') {
      const result = await PermissionsAndroid.request(type);
      setGranted(result === PermissionsAndroid.RESULTS.GRANTED);
    }
  };

  useEffect(() => {
    if (Platform.OS === 'android')
      PermissionsAndroid.check(type).then((result) => {
        setGranted(result);
      });
  }, []);

  return { granted, requestPermission };
};

export default useDevicePermission;

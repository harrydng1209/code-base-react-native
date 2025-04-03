import AsyncStorage from '@react-native-async-storage/async-storage';

export const getStorage = async <T>(key: string): Promise<null | T> => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  } catch (error) {
    console.error('Error getting data from AsyncStorage:', error);
    return null;
  }
};

export const setStorage = async <T>(key: string, value: T): Promise<void> => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('Error setting data in AsyncStorage:', error);
  }
};

export const removeStorage = async (key: string): Promise<void> => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error('Error removing data from AsyncStorage:', error);
  }
};

// export { useColorScheme } from 'react-native';
import { TColorScheme } from '@/models/types/shared.type';

// TODO: Currently always returns 'LIGHT'
export const useColorScheme = (): TColorScheme => {
  return 'LIGHT';
};

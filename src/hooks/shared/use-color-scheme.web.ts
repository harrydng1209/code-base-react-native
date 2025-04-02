// import { useEffect, useState } from 'react';
// import { useColorScheme as useRNColorScheme } from 'react-native';
import { TColorScheme } from '@/models/types/shared.type';

// export const useColorScheme = () => {
//   const colorScheme = useRNColorScheme();
//   const [hasHydrated, setHasHydrated] = useState(false);
//   useEffect(() => {
//     setHasHydrated(true);
//   }, []);
//   if (hasHydrated) return colorScheme;
//   return 'light';
// };

// TODO: Currently always returns 'LIGHT'
export const useColorScheme = (): TColorScheme => {
  return 'LIGHT';
};

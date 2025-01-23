import { useEffect, useState } from 'react';
import { useColorScheme as useRNColorScheme } from 'react-native';

export const useColorScheme = () => {
  const colorScheme = useRNColorScheme();

  const [hasHydrated, setHasHydrated] = useState(false);

  useEffect(() => {
    setHasHydrated(true);
  }, []);

  if (hasHydrated) return colorScheme;

  return 'light';
};

import '@/assets/styles/root/main.css';
import '@/plugins/react-i18next.plugin.ts';
import { LAYOUTS } from '@/assets/styles/root/_variables.style';
import TheLoading from '@/components/shared/TheLoading';
import { STORAGE_KEYS } from '@/constants/shared.const';
import AppThemeProvider from '@/contexts/AppThemeProvider';
import useThemeColor from '@/hooks/shared/use-theme-color';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { hideAsync, preventAutoHideAsync } from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

preventAutoHideAsync();

const RootLayout: React.FC = () => {
  const [fontLoaded, fontError] = useFonts({
    Manrope: require('@/assets/fonts/manrope/Manrope-VariableFont_wght.ttf'),
  });
  const { getThemeColor } = useThemeColor();

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const checkLoggedIn = async () => {
    const accessToken = useAsyncStorage(STORAGE_KEYS.ACCESS_TOKEN);
    const isAccessToken = Boolean(await accessToken.getItem());
    setIsLoggedIn(isAccessToken);
  };

  useEffect(() => {
    checkLoggedIn();
  }, []);

  useEffect(() => {
    if (fontLoaded || fontError) hideAsync();
  }, [fontLoaded, fontError]);

  if (!fontLoaded && !fontError) return null;

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView className="nw-flex-1">
        <BottomSheetModalProvider>
          <SafeAreaView
            className="nw-flex-1"
            edges={['top', 'left', 'right']}
            style={[
              {
                backgroundColor: getThemeColor('BACKGROUND'),
              },
              styles.container,
            ]}
          >
            <AppThemeProvider>
              <StatusBar style="dark" />
              <TheLoading />

              <Stack
                screenOptions={{
                  headerShown: false,
                }}
              >
                <Stack.Screen name={isLoggedIn ? '(tabs)' : 'auth'} />
                <Stack.Screen name="+not-found" />
              </Stack>
            </AppThemeProvider>
          </SafeAreaView>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: LAYOUTS.PADDING,
  },
});

export default RootLayout;

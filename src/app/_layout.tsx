import '@/assets/styles/root/main.css';
import '@/plugins/react-i18next.plugin';
import { LAYOUTS } from '@/assets/styles/root/_variables.style';
import { TheLoading } from '@/components/shared/TheLoading';
import { AppThemeProvider } from '@/contexts/AppThemeProvider';
import { useAuthGuard } from '@/hooks/shared/use-auth-guard';
import { useThemeColor } from '@/hooks/shared/use-theme-color';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { hideAsync, preventAutoHideAsync } from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { enableScreens } from 'react-native-screens';

preventAutoHideAsync();
enableScreens(true);

const queryClient = new QueryClient();

const RootLayout: React.FC = () => {
  const [fontLoaded, fontError] = useFonts({
    Manrope: require('@/assets/fonts/manrope/Manrope-VariableFont_wght.ttf'),
  });
  const { getThemeColor } = useThemeColor();

  const { isLoading } = useAuthGuard({ fontError, fontLoaded });

  useEffect(() => {
    if (!isLoading) hideAsync();
  }, [isLoading]);

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView className="nw-flex-1">
        <BottomSheetModalProvider>
          <QueryClientProvider client={queryClient}>
            <AppThemeProvider>
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
                <StatusBar style="dark" />
                <TheLoading />
                <Stack
                  screenOptions={{
                    headerShown: false,
                  }}
                >
                  <Stack.Screen name="(tabs)" />
                  <Stack.Screen name="auth" />
                  <Stack.Screen name="+not-found" />
                </Stack>
              </SafeAreaView>
            </AppThemeProvider>
          </QueryClientProvider>
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

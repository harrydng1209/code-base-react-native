import { Stack } from 'expo-router';

export const AuthLayout: React.FC = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" />
      <Stack.Screen name="login-password" />
      <Stack.Screen name="register" />
      <Stack.Screen name="register-password" />
    </Stack>
  );
};

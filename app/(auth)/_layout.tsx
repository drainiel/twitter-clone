import { Stack } from 'expo-router';

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false, 
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="signin" />
      <Stack.Screen name="create-account" />
      <Stack.Screen name="choose-username" />
      <Stack.Screen name="token-login" />
    </Stack>
  );
}
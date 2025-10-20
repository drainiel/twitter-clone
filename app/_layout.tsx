import { Icon, Label, NativeTabs } from 'expo-router/unstable-native-tabs';

export default function TabLayout() {
  return (
    <NativeTabs>
      <NativeTabs.Trigger name="index">
        <Label>Home</Label>
        <Icon sf="house.fill" drawable="custom_android_drawable" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="(auth)/login">
        <Icon sf="person" drawable="custom_login_drawable" />
        <Label>Login</Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="(auth)/signin">
        <Icon sf="person" drawable="custom_signin_drawable" />
        <Label>Sign in</Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="(auth)/create-account">
        <Icon sf="person" drawable="custom_signin_drawable" />
        <Label>Step 1</Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="(auth)/choose-username">
        <Icon sf="person" drawable="custom_signin_drawable" />
        <Label>Step 2</Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}

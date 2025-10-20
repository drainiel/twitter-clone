import { Icon, Label, NativeTabs } from 'expo-router/unstable-native-tabs';

export default function TabLayout() {
  return (
    <NativeTabs>
      <NativeTabs.Trigger name="index">
        <Label>Home</Label>
        <Icon sf="house.fill" drawable="custom_android_drawable" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="settings">
        <Icon sf="gear" drawable="custom_settings_drawable" />
        <Label>Settings</Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="login/login">
        <Icon sf="person" drawable="custom_login_drawable" />
        <Label>Login</Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="login/signin">
        <Icon sf="person" drawable="custom_signin_drawable" />
        <Label>Sign in</Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}

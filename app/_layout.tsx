import { Icon, Label, NativeTabs } from 'expo-router/unstable-native-tabs';

export default function TabLayout() {
  return (
    <NativeTabs minimizeBehavior="onScrollDown">
      <NativeTabs.Trigger name="index">
        <Label>Home</Label>
        <Icon sf="house.fill" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="(auth)/login">
        <Icon sf="person" />
        <Label>Login</Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="(auth)/signin">
        <Icon sf="person" />
        <Label>Sign in</Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="(auth)/create-account">
        <Icon sf="person" />
        <Label>Step 1</Label>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="(auth)/choose-username" role="search">
        <Icon sf="person" />
        <Label>Step 2</Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}

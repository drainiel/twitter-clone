import { Icon, Label, NativeTabs } from 'expo-router/unstable-native-tabs';

export default function TabLayout() {
  return (
    <NativeTabs 
    minimizeBehavior="onScrollDown">
      <NativeTabs.Trigger name="home">
        <Label>Home</Label>
        <Icon sf="house.fill" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="likes">
        <Label>Likes</Label>
        <Icon sf="heart.fill" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="profile">
        <Label>Profile</Label>
        <Icon sf="person.fill" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="create-post" role="search">
        <Label>New Post</Label>
        <Icon sf="square.and.pencil" />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}


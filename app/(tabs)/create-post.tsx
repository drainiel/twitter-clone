import { StyleSheet, Text, View } from 'react-native';

export default function createPost() {
  return (
    <View style={styles.container}>
      <Text style={{ color: 'white' }}>Create Post will be here my g</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#161E27',
  },
});

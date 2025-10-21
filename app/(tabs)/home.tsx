import { StyleSheet, Text, View } from 'react-native';

export default function index() {
  return (
    <View style={styles.container}>
      <Text style={{ color: 'white' }}>Home</Text>
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

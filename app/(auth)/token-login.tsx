import { router } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import Button from '../components/button';

export default function profile() {
  return (
    <View style={styles.container}>
    <View style={styles.buttonsContainer}>
        <Button 
          title="Login with token"
          variant='secondary'
          onPress={() => router.push('/(tabs)/home')}
        />
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#161E27',
    paddingHorizontal: 20,
  },
  buttonsContainer: {
    width: '100%',
  }
});

import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../components/button';

export default function settings() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
          <Ionicons name="logo-twitter" style={styles.icon} />
          <Text style={styles.title}>
              Twitter
          </Text>
          <Text style={styles.subtitle}>
              What's up?
          </Text>
      </View>

      <View style={styles.buttonsContainer}>
          <Button 
            title="Create account"
            onPress={() => console.log('Create account')}
          />
          <Button 
            title="Sign in"
            variant="secondary"
            onPress={() => console.log('Sign in')}
          />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161E27',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 120,
  },
  headerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 10,
  },
  subtitle: {
    color: '#93A5B7',
    fontSize: 18,
    fontWeight: 'normal',
    textAlign: 'left',
  },
  buttonsContainer: {
    width: '100%',
  },
  icon: {
    color: '#208BFE',
    fontSize: 120,
    marginBottom: 20,
  },
});

import { StyleSheet, Text, View } from 'react-native';
import Button from '../components/button';
import TextInput from '../components/text-input';

export default function index() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Sign In</Text>
      </View>  
      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>Enter your account credentials</Text>
      </View>  
      {/* Username input */}
      <TextInput
        placeholder="Username or email address"
        icon="at"
        autoCapitalize="none"
        keyboardType="email-address"
      />
      {/* Password input */}
      <TextInput
        placeholder="Password"
        icon="lock-closed"
        secureTextEntry
        autoCapitalize="none"
        keyboardType="default"
      />
    <View style={styles.buttonsContainer}>
        <Button 
            title="Back"
            size='small'
            variant='secondary'
            onPress={() => console.log('Back')}
        />
        <Button 
            title="Next"
            size='small'
            onPress={() => console.log('Next')}
        />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#161E27',
    paddingHorizontal: 20,
  },
  headerContainer: {
    marginBottom: 20,
    marginTop: 120,
  },
  headerText: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  subtitleContainer: {
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#93A5B7',
    fontWeight: '600',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3b82f6',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    marginLeft: 10,
  },  
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },

});

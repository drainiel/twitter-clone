
import { StyleSheet, Text, View } from 'react-native';
import TextInput from '../components/text-input';

export default function index() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Sign In</Text>
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
  headerContainer: {
    marginBottom: 40,
  },
  headerText: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
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
});

import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

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
          <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Create account</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.signUpButton]}>
              <Text style={[styles.buttonText, styles.signUpButtonText]}>Sign in</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161E27',
    justifyContent: 'flex-end', // Allinea i bottoni in basso
    paddingHorizontal: 20,
    paddingBottom: 120, // Spazio dal bordo inferiore - metti a 40 dopo
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
  button: {
    backgroundColor: '#208BFE',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signUpButton: {
    backgroundColor: '#1E2936',
  },
  signUpButtonText: {
    color: '#fff',
  },
  icon: {
    color: '#208BFE',
    fontSize: 120,
    marginBottom: 20,
  },
});
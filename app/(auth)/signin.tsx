
import {
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Button from '../components/button';
import TextInput from '../components/text-input';

export default function signIn() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView style={styles.scrollView} keyboardShouldPersistTaps="handled">
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
            <View style={styles.subtitleContainer}>
                <Text style={styles.subtitle}>Or sign in with a token</Text>
            </View>  
            {/* Login with token */}
             <Button 
                    title="Continue with token"
                    variant='secondary'
                    onPress={() => console.log('Token login')}
                />

        </ScrollView>    
     </TouchableWithoutFeedback>
        
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#161E27',
    paddingHorizontal: 20,
  },
  headerContainer: {
    marginBottom: 20,
    marginTop: 50,
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
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 5,
  },

});

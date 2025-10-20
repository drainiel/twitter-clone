
import {
    Keyboard,
    Linking,
    ScrollView,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
import Button from '../components/button';
import TextInput from '../components/text-input';

export default function createAccount() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView style={styles.scrollView} keyboardShouldPersistTaps="handled">
            <View style={styles.topHeaderContainer}>
                <Text style={styles.TopHeaderText}>Step 1 of 2</Text>
            </View>  
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Your account</Text>
            </View>  
            {/* Email input */}
            <TextInput
                placeholder="Enter your email address"
                label='Email'
                icon="mail"
                autoCapitalize="none"
                keyboardType="email-address"
            />
            {/* Password input */}
            <TextInput
                placeholder="Choose your password"
                label='Password'
                icon="lock-closed"
                autoCapitalize="none"
                keyboardType="default"
                secureTextEntry
            />
            {/* Birth date */}
            <TextInput
                placeholder="Insert birth date"
                label='Your birth date'
                icon="calendar"
                autoCapitalize="none"
                keyboardType="default"
            />
            <Text style={styles.warningText}>
                By creating an account you agree to the{' '}
                <Text 
                    style={styles.link}
                    onPress={() => Linking.openURL('https://jetop.com')}
                >
                    Terms of Service
                </Text>
                {' '}and{' '}
                <Text 
                    style={styles.link}
                    onPress={() => Linking.openURL('https://tinyurl.com/prh87s9b')}
                >
                    Privacy Policy
                </Text>
                .
            </Text>
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
  },
  headerText: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  topHeaderContainer: {
    marginTop: 50,
    marginBottom: 10,
  },
  TopHeaderText: {
    fontSize: 14,
    color: '#93A5B7',
    fontWeight: 'normal',
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
  warningText: {
    fontSize: 14,
    color: '#93A5B7',
    fontWeight: 'normal',
    marginTop: 5,
  },
  link: {
    color: '#208BFE',
  },
});

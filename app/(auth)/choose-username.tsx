
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

export default function chooseUsername() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView style={styles.scrollView} keyboardShouldPersistTaps="handled">
            <View style={styles.topHeaderContainer}>
                <Text style={styles.TopHeaderText}>Final step</Text>
            </View>  
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Choose your username</Text>
            </View>  
            {/* Username input */}
            <TextInput
              placeholder="Insert username"
              icon="at"
              autoCapitalize="none"
              keyboardType="email-address"
            />
            {/* optional warning button */}
            <Button 
              title={'Username is not available.'}
              variant='warning'
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
    marginBottom: 5000,
  },
});

import Button from '@/components/button';
import TextInput from '@/components/text-input';
import { colors, fontSize, fontWeight, spacing } from '@/constants/theme';
import { router } from 'expo-router';
import {
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

export default function editProfile() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView style={styles.scrollView} keyboardShouldPersistTaps="handled">
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Edit your profile</Text>
            </View>  
             {/* Name change input */}
            <TextInput
              placeholder="Insert name"
              icon="person"
              label='You can change your name'
              autoCapitalize="none"
              keyboardType="email-address"
            />
            {/* Username change input */}
            <TextInput
              placeholder="Insert username"
              icon="at"
              label="Or your username"
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
                  onPress={() => router.push('/(tabs)/profile')}
                />
                <Button 
                  title="Next"
                  size='small'
                  onPress={() => router.push('/(tabs)/profile')}
                />
            </View>
        </ScrollView>    
     </TouchableWithoutFeedback>
        
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 20,
  },
  headerContainer: {
    marginBottom: spacing.xl,
    marginTop: spacing.loginscreenMarginTop,
  },
  headerText: {
    fontSize: fontSize.xxxl,
    color: colors.textPrimary,
    fontWeight: fontWeight.bold,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: spacing.xl,
    marginBottom: spacing.xs, 
  },
});

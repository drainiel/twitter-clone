import Button from '@/components/button';
import DatePicker from '@/components/date-picker';
import TextInput from '@/components/text-input';
import { colors, fontSize, fontWeight, spacing } from '@/constants/theme';
import { router } from 'expo-router';
import { useState } from 'react';
import {
  Keyboard,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

export default function createAccount() {
  const [birthDate, setBirthDate] = useState(new Date(2005, 1, 25)); // Default: 25 Feb 2005

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView style={styles.scrollView} keyboardShouldPersistTaps="handled">
            <View style={styles.topHeaderContainer}>
              <Text style={styles.TopHeaderText}>Step 1 of 2</Text>
            </View>  
            <View style={styles.headerContainer}>
              <Text style={styles.headerText}>Your account</Text>
            </View>  
            {/* optional warning button */}
            <Button 
              title="Please enter all required fields."
              variant='warning'
            />
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
            
            {/* Birth date picker */}
            <DatePicker
              label="Your birth date"
              value={birthDate}
              onChange={setBirthDate}
              placeholder="Select your birth date"
              icon="calendar"
              maximumDate={new Date()} // Non permette date future
            />

            <Text style={styles.policyText}>
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
              onPress={() => router.push('/(auth)')}
            />
            <Button 
              title="Next"
              size='small'
              onPress={() => router.push('/(auth)/choose-username')}
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
  },
  headerText: {
    fontSize: fontSize.xxxl,
    color: colors.textPrimary,
    fontWeight: fontWeight.bold,
  },
  topHeaderContainer: {
    marginTop: spacing.loginscreenMarginTop,
    marginBottom: spacing.sm,
  },
  TopHeaderText: {
    fontSize: fontSize.sm,
    color: colors.textSecondary,
    fontWeight: fontWeight.regular,
  },    
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: spacing.xl,
  },
  policyText: {
    fontSize: fontSize.sm,
    color: colors.textSecondary,
    fontWeight: fontWeight.regular,
    lineHeight: 20,
  },
  link: {
    color: colors.primary,
  },
});
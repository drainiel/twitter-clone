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
                  onPress={() => router.push('/(auth)/create-account')}
                />
                <Button 
                  title="Next"
                  size='small'
                  onPress={() => router.push('/(tabs)/home')}
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
  subtitle: {
    fontSize: fontSize.lg,
    color: colors.textSecondary,
    fontWeight: fontWeight.semibold,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: spacing.xl,
    marginBottom: spacing.xs, 
  },
});
